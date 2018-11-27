import React from "react";
import PropTypes from "prop-types";
import Styles from "./checkbox.style";

export default function Checkbox({
  id,
  children,
  value,
  name,
  optional,
  error,
  onChange
}) {
  return (
    <Styles>
      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        onChange={onChange}
      />
      {/* eslint-disable-next-line */}
      <label id={id} htmlFor={id} />
      <div className="content">{children}</div>

      {optional ? <span className="optional">*optional</span> : null}
      {"message" in error ? (
        <span className="error-feedback">{error.message}</span>
      ) : null}
    </Styles>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  optional: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.shape({}),
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  optional: false,
  value: "",
  name: "",
  error: {},
  onChange: () => {}
};
