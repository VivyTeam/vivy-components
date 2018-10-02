import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function Button({ children, type, ...rest }) {
  return (
    <ButtonStyles>
      <button className={type} {...rest}>
        <div className="component-child">{children}</div>
      </button>
    </ButtonStyles>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  type: "primary"
};
