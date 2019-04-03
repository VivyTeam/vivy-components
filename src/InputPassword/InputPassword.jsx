import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Styles from "./inputPassword.style";
import InputWrapper from "../InputWrapper";
import classNames from "../utils/classNames";
import { ValidationContext } from "../Forms/Validation";
import formData from "../utils/formData";

class InputPassword extends Component {
  constructor(props) {
    super(props);
    const { showPassword } = props;
    this.state = { showPassword };
  }

  toggle = () => {
    const { showPassword } = this.state;
    return this.setState({ showPassword: !showPassword });
  };

  render() {
    const {
      id,
      label,
      placeholder,
      name,
      iconName,
      visibility,
      validateOnChange,
      validateOnBlur
    } = this.props;
    const { showPassword } = this.state;

    const padding = classNames(["icon-padding", iconName]);

    return (
      <ValidationContext.Consumer>
        {({ onBlur, onChange, cleanField, errors: { [id]: error } }) => (
          <Styles>
            <InputWrapper
              error={error}
              id={id}
              iconName={iconName}
              label={label}
            >
              <input
                autoComplete="password"
                id={id}
                name={name}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                className={padding}
                onChange={
                  validateOnChange
                    ? e => onChange(formData(e.target.form || {}), e.target.id)
                    : e => cleanField(e.target.id)
                }
                onBlur={
                  validateOnBlur
                    ? e => onBlur(formData(e.target.form || {}), e.target.id)
                    : null
                }
              />

              {visibility ? (
                <button
                  type="button"
                  className="button-position-right"
                  onClick={this.toggle}
                  tabIndex="-1"
                >
                  {showPassword ? (
                    <Icon name="show-pass-off" />
                  ) : (
                    <Icon name="show-pass-on" />
                  )}
                </button>
              ) : null}
            </InputWrapper>
          </Styles>
        )}
      </ValidationContext.Consumer>
    );
  }
}

InputPassword.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  iconName: PropTypes.string,
  showPassword: PropTypes.bool,
  visibility: PropTypes.bool,
  validateOnChange: PropTypes.bool,
  validateOnBlur: PropTypes.bool
};

InputPassword.defaultProps = {
  name: "default",
  placeholder: "",
  iconName: "",
  label: "",
  showPassword: false,
  visibility: false,
  validateOnChange: true,
  validateOnBlur: true
};

export default InputPassword;
