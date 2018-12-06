import React, { createContext, Component } from "react";
import Schema from "async-validator";
import PropTypes from "prop-types";

const DEFAULT_STATE = {
  errors: {}
};

export const ValidationContext = createContext(DEFAULT_STATE);

export default class Validation extends Component {
  state = DEFAULT_STATE;

  validate = (fields, rules) => {
    const schema = new Schema(rules);
    const { errors } = this.state;
    let validation = {};

    schema.validate(fields, validateErr => {
      let err = {};
      if (validateErr) {
        err = validateErr.reduce(
          (prev, error) => ({ ...prev, [error.field]: error.message }),
          {}
        );
      } else {
        err = Object.keys(fields).reduce(
          (prev, key) => ({ ...prev, [key]: null }),
          {}
        );
      }
      validation = { ...errors, ...err };
    });
    return validation;
  };

  validateForm = fields => {
    const { rules } = this.props;
    const errors = this.validate(fields, rules);
    const hasErrors = Object.keys(errors).some(message => errors[message]);

    this.setState({ errors });

    return hasErrors;
  };

  validateField = e => {
    const { checked, value, id } = e.target;
    const { rules } = this.props;
    const rule = { [id]: rules[id] || {} };
    const field = checked ? { [id]: checked } : { [id]: value };

    const errors = this.validate(field, rule);
    this.setState({ errors });
  };

  render() {
    const { children } = this.props;
    const { errors } = this.state;

    return (
      <ValidationContext.Provider
        value={{
          onBlur: this.validateField,
          onChange: this.validateField,
          validation: this.validateForm,
          errors
        }}
      >
        {children}
      </ValidationContext.Provider>
    );
  }
}

Validation.propTypes = {
  children: PropTypes.node.isRequired,
  rules: PropTypes.shape({}).isRequired
};
