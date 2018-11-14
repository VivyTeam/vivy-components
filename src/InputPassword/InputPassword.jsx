import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./inputPassword.style";
import InputStyles from "../Input/input.style";
import Icon from "../Icon";

class InputPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false };
  }

  render() {
    const { id, label, placeholder, name } = this.props;
    const { showPassword } = this.state;

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

          <ButtonStyles
            className="password-icon"
            onClick={() =>
              this.setState({ showPassword: !this.state.showPassword })
            }
          >
            {this.state.showPassword ? (
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
}

InputPassword.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string
};

InputPassword.defaultProps = {
  name: "default",
  placeholder: "",
  label: ""
};

export default InputPassword;
