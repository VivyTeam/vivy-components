import React from "react";
import PropTypes from "prop-types";
import ButtonStyles, {
  HEIGHT_TYPE_LG,
  HEIGHT_TYPE_SM,
  HEIGHT_TYPE_BASIC,
} from "./button.style";

export default function Button({
  type,
  id,
  htmlType,
  onClick,
  children,
  disabled,
  style,
  className,
  height,
}) {
  return (
    <ButtonStyles height={height}>
      {/* eslint-disable-next-line */}
      <button
        id={id}
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
  id: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary"]),
  htmlType: PropTypes.oneOf(["button", "submit", "reset"]),
  style: PropTypes.shape({}),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.oneOf([HEIGHT_TYPE_LG, HEIGHT_TYPE_SM, HEIGHT_TYPE_BASIC]),
};

Button.defaultProps = {
  id: null,
  onClick: () => {},
  type: "primary",
  htmlType: "button",
  style: {},
  disabled: false,
  className: "",
  height: HEIGHT_TYPE_BASIC,
};
