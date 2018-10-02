import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function Button({ children }) {
  return <ButtonStyles>{children}</ButtonStyles>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired
};
