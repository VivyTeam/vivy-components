import React, { createContext, Component } from "react";
import Schema from "async-validator";
import PropTypes from "prop-types";

const DEFAULT_STATE = {
  errors: {},
  fields: {}
};

export const ValidationContext = createContext(DEFAULT_STATE);

export default class Validation extends Component {
  state = DEFAULT_STATE;

  fieldValue = target => {
    const { type, checked, value, id } = target;
    switch (type) {
      case "checkbox":
        return { [id]: checked };
      default:
        return { [id]: value };
    }
  };

  validate = (fields, rules) => {
    const schema = new Schema(rules);
    let validation = {};
    schema.validate(fields, errors => {
      let err = {};
      if (errors) {
        err = errors.reduce(
          (prev, error) => ({ ...prev, [error.field]: error.message }),
          {}
        );
      } else {
        err = Object.keys(fields).reduce(
          (prev, key) => ({ ...prev, [key]: null }),
          {}
        );
      }
      validation = { ...this.state.errors, ...err };
    });
    return validation;
  };

  validateForm = e => {
    const { rules } = this.props;
    const fields = Array.from(e.target.elements)
      .filter(target => target.id)
      .reduce((prev, target) => ({ ...prev, ...this.fieldValue(target) }), {});

    const errors = this.validate(fields, rules);
    const hasErrors = Object.keys(errors).some(message => errors[message]);
    this.setState({ errors, fields });
    return hasErrors;
  };

  validateField = e => {
    const { id } = e.target;
    const { rules } = this.props;

    const rule = { [id]: rules[id] || {} };
    const field = this.fieldValue(e.target);

    const errors = this.validate(field, rule);
    this.setState({ errors, fields: { ...this.state.fields, ...field } });
  };

  render() {
    return (
      <ValidationContext.Provider
        value={{
          onBlur: this.validateField,
          onChange: this.validateField,
          validation: this.validateForm,
          errors: this.state.errors,
          fields: this.state.fields
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
