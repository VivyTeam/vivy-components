import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Styles from "./inputPassword.style";
import InputWrapper from "../InputWrapper";
import classNames from "../utils/classNames";
import { ValidationContext } from "../Forms/Validation";

class InputPassword extends Component {
  state = { showPassword: this.props.showPassword };

  toggle = () => this.setState({ showPassword: !this.state.showPassword });

  render() {
    const { id, label, placeholder, name, iconName, visibility } = this.props;
    const { showPassword } = this.state;

    const padding = classNames(["icon-padding", iconName]);

    return (
      <ValidationContext.Consumer>
        {({ onBlur, onChange, errors: { [id]: error } }) => (
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
                onChange={onChange}
                onBlur={onBlur}
              />

              {visibility ? (
                <button
                  type="button"
                  className="button-position-right"
                  onClick={this.toggle}
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
  visibility: PropTypes.bool
};

InputPassword.defaultProps = {
  name: "default",
  placeholder: "",
  iconName: "",
  label: "",
  showPassword: false,
  visibility: false
};

export default InputPassword;
