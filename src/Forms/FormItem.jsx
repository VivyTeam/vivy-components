import React from "react";
import PropTypes from "prop-types";

export default function FormItem({ children }) {
  return <div className="form-item">{children}</div>;
}

FormItem.propTypes = {
  children: PropTypes.node.isRequired
};
