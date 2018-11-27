import React from "react";
import PropTypes from "prop-types";
import Styles from "./inputSheath.style";
import Icon from "../Icon/index";

export default function InputSheath({
  id,
  label,
  optional,
  iconName,
  children,
  error
}) {
  const invalid = "message" in error ? "invalid" : "";

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
        {"message" in error ? (
          <span className="error-feedback">{error.message}</span>
        ) : null}
      </label>
    </Styles>
  );
}

InputSheath.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  optional: PropTypes.bool,
  iconName: PropTypes.string,
  error: PropTypes.shape({})
};

InputSheath.defaultProps = {
  label: "",
  optional: false,
  iconName: "",
  error: {}
};
