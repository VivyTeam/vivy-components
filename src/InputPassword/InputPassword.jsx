import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import InputPasswordStyles from "./inputPassword.style";
import ParentStyles from "../Input/input.style";

export default function InputPassword({
  id,
  label,
  placeholder,
  name,
  toggle,
  showPassword,
  errors
}) {
  const invalid = id in errors ? "invalid" : "";

  return (
    <ParentStyles>
      <InputPasswordStyles>
        <span className="label">{label}</span>
        <label htmlFor={id}>
          <input
            id={id}
            name={name}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className={invalid}
          />

          {/* eslint-disable-next-line */}
          <div className="icon-position-right" onClick={toggle}>
            {showPassword ? (
              <Icon name="show-pass-off" />
            ) : (
              <Icon name="show-pass-on" />
            )}
          </div>

          {id in errors &&
            errors[id].map(index => (
              <span key={index} className="error-feedback">
                {index.message}
              </span>
            ))}
        </label>
      </InputPasswordStyles>
    </ParentStyles>
  );
}

InputPassword.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  errors: PropTypes.shape({})
};

InputPassword.defaultProps = {
  name: "default",
  placeholder: "",
  label: "",
  errors: {}
};
