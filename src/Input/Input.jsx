import React from "react";
import PropTypes from "prop-types";
import InputStyles from "./input.style";

export default function Input(props) {
  const { id, label, optional, type, placeholder, name } = props;

  return (
    <InputStyles>
      <span className="label">
        {label}
        {optional ? <span className="optional">*optional</span> : null}
      </span>
      <label htmlFor={id}>
        <input id={id} name={name} type={type} placeholder={placeholder} />
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
  optional: PropTypes.bool
};

Input.defaultProps = {
  type: "",
  name: "default",
  placeholder: "",
  label: "",
  optional: false
};
