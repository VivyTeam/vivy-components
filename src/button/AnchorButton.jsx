import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function AnchorButton({
  onClick,
  type,
  href,
  target,
  rel,
  children
}) {
  return (
    <ButtonStyles>
      <a
        onClick={onClick}
        className={type}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    </ButtonStyles>
  );
}

AnchorButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string
};

AnchorButton.defaultProps = {
  type: "primary",
  onClick: () => {},
  target: "_self",
  rel: ""
};
