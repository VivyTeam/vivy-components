import React from "react";
import PropTypes from "prop-types";
import CheckboxStyle from "./checkbox.style";

export default function Checkbox({ id, children, value, name, optional }) {
  return (
    <CheckboxStyle>
      <input id={id} name={name} type="checkbox" value={value} />
      {/* eslint-disable-next-line */}
      <label id={id} htmlFor={id} />
      <div className="content">{children}</div>

      {optional ? <span className="optional">*optional</span> : null}
      <span className="error-feedback" />
    </CheckboxStyle>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  optional: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string
};

Checkbox.defaultProps = {
  optional: false,
  value: "",
  name: ""
};
