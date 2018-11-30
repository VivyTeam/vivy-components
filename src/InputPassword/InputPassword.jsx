import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Styles from "./inputPassword.style";
import InputWrapper from "../InputWrapper";

export default function InputPassword({
  id,
  label,
  placeholder,
  name,
  toggle,
  showPassword,
  iconName
}) {
  const padding = iconName ? "icon-padding" : "";

  return (
    <Styles>
      <InputWrapper id={id} iconName={iconName} label={label}>
        <input
          autoComplete="password"
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={padding}
        />

        <button
          type="button"
          className="button-position-right"
          onClick={toggle}
        >
          {showPassword ? (
            <Icon name="show-pass-off" />
          ) : (
            <Icon name="show-pass-on" />
          )}
        </button>
      </InputWrapper>
    </Styles>
  );
}

InputPassword.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  iconName: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired
};

InputPassword.defaultProps = {
  name: "default",
  placeholder: "",
  iconName: "",
  label: ""
};
