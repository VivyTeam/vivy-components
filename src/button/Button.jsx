import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function Button({
  as,
  disabled,
  onClick,
  type,
  href,
  target,
  rel,
  children
}) {
  const Base = props =>
    props.as === "button" ? (
      <button {...props}>{props.children}</button>
    ) : (
      <a href={props.href} {...props}>
        {props.children}
      </a>
    );
  return (
    <ButtonStyles>
      <Base
        as={as}
        disabled={disabled}
        onClick={onClick}
        className={type}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </Base>
    </ButtonStyles>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  as: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string
};

Button.defaultProps = {
  children: <div />,
  type: "primary",
  onClick: () => {},
  disabled: false,
  as: "button",
  href: "",
  target: "_self",
  rel: ""
};
