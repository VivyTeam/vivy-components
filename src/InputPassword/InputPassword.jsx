import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Styles from "./inputPassword.style";
import InputWrapper from "../InputWrapper";
import classNames from "../utils/classNames";
import { ValidationContext } from "../Forms/Validation";

export default function InputPassword({
  id,
  label,
  placeholder,
  name,
  toggle,
  showPassword,
  iconName
}) {
  const padding = classNames(["icon-padding", iconName]);

  return (
    <ValidationContext.Consumer>
      {({ onBlur, onChange, errors: { [id]: error } }) => (
        <Styles>
          <InputWrapper error={error} id={id} iconName={iconName} label={label}>
            <input
              autoComplete="password"
              id={id}
              name={name}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              className={padding}
              onChange={onChange}
              onBlur={onBlur}
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
      )}
    </ValidationContext.Consumer>
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
