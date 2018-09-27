import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function Button({ disabled, onClick, type, rel, children }) {
  return (
    <ButtonStyles>
      <button disabled={disabled} onClick={onClick} className={type} rel={rel}>
        {children}
      </button>
    </ButtonStyles>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  rel: PropTypes.string
};

Button.defaultProps = {
  type: "primary",
  onClick: () => {},
  disabled: false,
  rel: ""
};
