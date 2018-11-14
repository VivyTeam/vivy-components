import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import ButtonStyles from "./inputPassword.style";
import InputStyles from "../Input/input.style";

function InputPassword({ id, label, placeholder, name, toggle, showPassword }) {
  return (
    <InputStyles>
      <span className="label">{label}</span>
      <label htmlFor={id}>
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
        />

        <ButtonStyles className="password-icon" onClick={toggle}>
          {showPassword ? (
            <Icon name="show-pass-off" />
          ) : (
            <Icon name="show-pass-on" />
          )}
        </ButtonStyles>
        <span className="error-feedback" />
      </label>
    </InputStyles>
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
