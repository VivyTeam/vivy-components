import React from "react";
import PropTypes from "prop-types";
import Styles from "./inputWrapper.style";
import Icon from "../Icon/index";
import classNames from "../_utils/classNames";

export default function InputWrapper({
  children,
  id,
  label,
  optional,
  iconName,
  error
}) {
  const invalid = classNames(["invalid", error]);

  return (
    <Styles>
      <span className="label">
        {label}
        {optional ? <span className="optional">*optional</span> : null}
      </span>
      {/* eslint-disable-next-line */}
      <label htmlFor={id} id={id} className={invalid}>
        {iconName ? (
          <div className="icon-left">
            <Icon name={iconName} />
          </div>
        ) : null}
        {children}
        {error ? <span className="error-feedback">{error}</span> : null}
      </label>
    </Styles>
  );
}

InputWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  optional: PropTypes.bool,
  iconName: PropTypes.string,
  error: PropTypes.string
};

InputWrapper.defaultProps = {
  label: "",
  optional: false,
  iconName: "",
  error: ""
};
