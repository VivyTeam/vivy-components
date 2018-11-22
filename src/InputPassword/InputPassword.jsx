import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Styles from "./inputPassword.style";
import InputSheath from "../InputSheath";

export default function InputPassword({
  id,
  placeholder,
  name,
  toggle,
  showPassword,
  iconName,
  errors
}) {
  const padding = iconName ? "icon-padding" : "";
  const invalid = id in errors ? "invalid" : "";

  return (
    <Styles>
      <InputSheath id={id} iconName={iconName} errors={errors}>
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`${padding} ${invalid}`}
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
      </InputSheath>
    </Styles>
  );
}

InputPassword.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  iconName: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  errors: PropTypes.shape({})
};

InputPassword.defaultProps = {
  name: "default",
  placeholder: "",
  iconName: "",
  errors: {}
};
