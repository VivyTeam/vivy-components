import React from "react";
import PropTypes from "prop-types";
import InputStyles from "./input.style";

export default function Input(props) {
  const {
    id,
    label,
    optional,
    type,
    placeholder,
    validationMsg,
    name,
    value,
    defaultValue,
    children
  } = props;

  return (
    <InputStyles>
      <span className="label">
        {label}
        {optional ? <span id="optional">*optional</span> : null}
        {children}
      </span>
      <label htmlFor={id}>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          data-validationmessage={validationMsg}
          {...value && { value }}
          {...defaultValue && { defaultValue }}
        />
        <span className="error-feedback" />
      </label>
    </InputStyles>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  optional: PropTypes.bool,
  validationMsg: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string
};

Input.defaultProps = {
  type: "",
  name: "default",
  placeholder: "",
  label: "",
  optional: false,
  validationMsg: "",
  value: "",
  defaultValue: ""
};
