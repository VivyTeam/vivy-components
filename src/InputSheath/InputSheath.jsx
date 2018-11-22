import React from "react";
import PropTypes from "prop-types";
import Styles from "./inputSheath.style";
import Icon from "../Icon/index";

export default function InputSheath({
  id,
  label,
  optional,
  iconName,
  errors,
  children
}) {
  return (
    <Styles>
      <span className="label">
        {label}
        {optional ? <span className="optional">*optional</span> : null}
      </span>
      {/* eslint-disable-next-line */}
      <label htmlFor={id} id={id}>
        {iconName ? (
          <div className="icon-left">
            <Icon name={iconName} />
          </div>
        ) : null}
        {children}
        {id in errors &&
          errors[id].map((index, key) => (
            <span key={key} className="error-feedback">
              {index.message}
            </span>
          ))}
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
  errors: PropTypes.shape({
    inputId: PropTypes.arrayOf({
      message: PropTypes.string,
      field: PropTypes.string
    })
  })
};

InputSheath.defaultProps = {
  label: "",
  optional: false,
  iconName: "",
  errors: {}
};
