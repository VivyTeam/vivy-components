import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function Button({
  disabled,
  onClick,
  type,
  children,
  customStyle
}) {
  return (
    <ButtonStyles>
      <button
        disabled={disabled}
        onClick={onClick}
        className={type}
        style={customStyle}
      >
        <div className="component-child">{children}</div>
      </button>
    </ButtonStyles>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  customStyle: PropTypes.shape({}),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: "primary",
  onClick: () => {},
  customStyle: {},
  disabled: false
};
