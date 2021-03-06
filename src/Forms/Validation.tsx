import React, { createContext, useState, FC } from "react";
import Schema, { Rules } from "async-validator";

export type FieldsObject = { [key: string]: unknown };

type Validator = (fields: FieldsObject, rulesOrID: Rules | string) => boolean;
type FieldCleaner = (inputId: string) => void;

const defaultValidate: Validator = () => false;
const defaultCleanField: FieldCleaner = () => {};

const DEFAULT_STATE = {
  errors: {} as { [key: string]: string },
  validate: defaultValidate,
  cleanField: defaultCleanField,
};

export const ValidationContext = createContext(DEFAULT_STATE);
export type ValidationRules = Rules;

type ValidationProps = {
  rules: Rules;
};

const Validation: FC<ValidationProps> = ({ children, rules }) => {
  const [errors, setErrors] = useState({});

  const validateRules = (fields: FieldsObject) => {
    const schema = new Schema(rules);
    let validation = {};

    schema.validate(fields, undefined, (validateErr) => {
      if (validateErr) {
        validation = validateErr.reduce(
          (prev, error) => ({ ...prev, [error.field]: error.message }),
          {}
        );
      }
    });

    return validation;
  };

  const validateForm = (fields: FieldsObject, input?: string) => {
    const validation = validateRules(fields);
    const inputErrors = input ? { [input]: validation[input] } : validation;
    const allErrors = { ...errors, ...inputErrors };
    const hasErrors = Object.keys(allErrors).some(
      (message) => allErrors[message]
    );

    setErrors(allErrors);

    return hasErrors;
  };

  const cleanField = (inputId: string) => {
    const cleanError = inputId && { [inputId]: "" };
    const allErrors = { ...errors, ...cleanError };
    const hasErrors = Object.keys(allErrors).some(
      (message) => allErrors[message]
    );

    setErrors(allErrors);

    return hasErrors;
  };

  return (
    <ValidationContext.Provider
      value={{
        validate: validateForm,
        cleanField,
        errors,
      }}
    >
      {children}
    </ValidationContext.Provider>
  );
};

export default Validation;
