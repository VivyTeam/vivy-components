import React, { createContext, Component } from "react";
import Schema from "async-validator";
import PropTypes from "prop-types";

const DEFAULT_STATE = {
  errors: {},
  validate: () => {},
  cleanField: () => {}
};

export const ValidationContext = createContext(DEFAULT_STATE);

export default class Validation extends Component {
  state = DEFAULT_STATE;

  validate = (fields, rules) => {
    const schema = new Schema(rules);
    let validation = {};

    schema.validate(fields, validateErr => {
      if (validateErr) {
        validation = validateErr.reduce(
          (prev, error) => ({ ...prev, [error.field]: error.message }),
          {}
        );
      }
    });

    return validation;
  };

  validateForm = (fields, input) => {
    const { rules } = this.props;
    const { errors } = this.state;
    const validation = this.validate(fields, rules);
    const inputErrors = input ? { [input]: validation[input] } : validation;
    const allErrors = { ...errors, ...inputErrors };
    const hasErrors = Object.keys(allErrors).some(
      message => allErrors[message]
    );

    this.setState({ errors: allErrors });

    return hasErrors;
  };

  cleanField = input => {
    const { errors } = this.state;
    const cleanError = input && { [input]: "" };
    const allErrors = { ...errors, ...cleanError };
    const hasErrors = Object.keys(allErrors).some(
      message => allErrors[message]
    );

    this.setState({ errors: allErrors });

    return hasErrors;
  };

  render() {
    const { children } = this.props;
    const { errors } = this.state;

    return (
      <ValidationContext.Provider
        value={{
          validate: this.validateForm,
          cleanField: this.cleanField,
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
