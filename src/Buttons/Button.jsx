import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function Button({
  type,
  htmlType,
  onClick,
  children,
  disabled,
  style,
  className
}) {
  return (
    <ButtonStyles>
      {/* eslint-disable-next-line */}
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${className} ${type}`}
        type={htmlType}
        style={style}
      >
        <div className="component-child">{children}</div>
      </button>
    </ButtonStyles>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  htmlType: PropTypes.oneOf(["button", "submit", "reset"]),
  style: PropTypes.shape({}),
  disabled: PropTypes.bool,
  className: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  type: "primary",
  htmlType: "button",
  style: {},
  disabled: false,
  className: ""
};
