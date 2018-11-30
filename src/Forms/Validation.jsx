import React, { createContext, Component } from "react";
import Schema from "async-validator";
import PropTypes from "prop-types";

const DEFAULT_STATE = {
  errors: {}
};

export const ValidationContext = createContext(DEFAULT_STATE);

export default class Validation extends Component {
  state = DEFAULT_STATE;

  valueOfTarget = target => {
    const { type, checked, value, id } = target;
    switch (type) {
      case "checkbox":
        return { [id]: checked };
      default:
        return { [id]: value };
    }
  };

  validateForm = e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const { rules } = this.props;
    const fields = Array.from(e.target.elements)
      .filter(target => target.id)
      .reduce(
        (prev, target) => ({ ...prev, ...this.valueOfTarget(target) }),
        {}
      );

    const schema = new Schema(rules);
    schema.validate(fields, errors => {
      let err = {};
      if (errors) {
        err = errors.reduce(
          (prev, error) => ({ ...prev, [error.field]: error.message }),
          {}
        );
      }
      this.setState({ errors: err });
    });
  };

  validateField = e => {
    const { rules } = this.props;
    const field = this.valueOfTarget(e.target);

    const schema = new Schema(rules);
    schema.validate(field, errors => {
      const err = errors.filter(input => input.field === e.target.id)[0] || {};

      this.setState({
        errors: { ...this.state.errors, [e.target.id]: err.message }
      });
    });
  };

  render() {
    return (
      <ValidationContext.Provider
        value={{
          onBlur: this.validateField,
          onChange: this.validateField,
          onSubmit: this.validateForm,
          errors: this.state.errors
        }}
      >
        {this.props.children}
      </ValidationContext.Provider>
    );
  }
}

Validation.propTypes = {
  children: PropTypes.node.isRequired,
  rules: PropTypes.shape({}).isRequired
};
