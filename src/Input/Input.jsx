import React from "react";
import PropTypes from "prop-types";
import InputStyles from "./input.style";
import Icon from "../Icon";

export default function Input(props) {
  const { id, label, optional, type, placeholder, name, iconName } = props;
  const padding = iconName ? "icon-padding" : "default-padding";

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
          className={padding}
        />
        <span className="error-feedback" />
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
  iconName: PropTypes.string
};

Input.defaultProps = {
  type: "",
  name: "default",
  placeholder: "",
  label: "",
  optional: false,
  iconName: undefined
};
