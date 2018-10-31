import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function Button({
  type,
  htmlType,
  onClick,
  children,
  disabled,
  customStyle
}) {
  return (
    <ButtonStyles>
      {/* eslint-disable-next-line */}
      <button
        disabled={disabled}
        onClick={onClick}
        className={type}
        type={htmlType}
        style={customStyle}
      >
        <div className="component-child">{children}</div>
      </button>
    </ButtonStyles>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  htmlType: PropTypes.oneOf(["button", "submit", "reset"]),
  customStyle: PropTypes.shape({}),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: "primary",
  htmlType: "button",
  customStyle: {},
  disabled: false
};
