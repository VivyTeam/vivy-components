import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import InputPasswordStyles from "./inputPassword.style";
import ParentStyles from "../Input/input.style";

function InputPassword({ id, label, placeholder, name, toggle, showPassword }) {
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
          />

          <button className="button-position-right" onClick={toggle}>
            {showPassword ? (
              <Icon name="show-pass-off" />
            ) : (
              <Icon name="show-pass-on" />
            )}
          </button>
          <span className="error-feedback" />
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
  showPassword: PropTypes.bool.isRequired
};

InputPassword.defaultProps = {
  name: "default",
  placeholder: "",
  label: ""
};

export default InputPassword;
