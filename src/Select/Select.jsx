import React from "react";
import PropTypes from "prop-types";
import SelectStyles from "./select.style";

export default function Select({ id, children, value, name, type, optional }) {
  return (
    <SelectStyles>
      <input id={id} name={name} type={type} value={value} />
      {/* eslint-disable-next-line */}
      <label id={id} htmlFor={id} />
      <p>{children}</p>
      {optional ? <span className="optional">*optional</span> : null}
    </SelectStyles>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  optional: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
};

Select.defaultProps = {
  optional: true,
  value: "",
  name: "",
  type: "checkbox"
};
