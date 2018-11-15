import React from "react";
import PropTypes from "prop-types";
import InputStyles from "./input.style";
import Icon from "../Icon";

export default function Input({
  id,
  label,
  optional,
  type,
  placeholder,
  name,
  iconName,
  errors
}) {
  const padding = iconName ? "icon-padding" : "";
  const error = id in errors ? "invalid" : "";

  return (
    <InputStyles>
      <span className="label">
        {label}
        {optional ? <span className="optional">*optional</span> : null}
      </span>
      <label htmlFor={id}>
        {iconName ? (
          <div className="icon-left">
            <Icon name={iconName} />
          </div>
        ) : null}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`${padding} ${error}`}
        />
        {id in errors &&
          errors[id].map(index => (
            <span key={index} className="error-feedback">
              {index.message}
            </span>
          ))}
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
  iconName: PropTypes.string,
  errors: PropTypes.shape({
    inputId: PropTypes.arrayOf({
      message: PropTypes.string,
      field: PropTypes.string
    })
  })
};

Input.defaultProps = {
  type: "",
  name: "default",
  placeholder: "",
  label: "",
  optional: false,
  iconName: "",
  errors: {}
};
