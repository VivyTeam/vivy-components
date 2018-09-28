import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function AnchorButton({
  onClick,
  type,
  href,
  target,
  rel,
  children,
  customStyle
}) {
  return (
    <ButtonStyles>
      <a
        className={type}
        onClick={onClick}
        href={href}
        target={target}
        rel={rel}
        style={customStyle}
      >
        <div className="anchor-child">{children}</div>
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
  rel: PropTypes.string,
  customStyle: PropTypes.shape({})
};

AnchorButton.defaultProps = {
  type: "primary",
  onClick: () => {},
  target: "_self",
  rel: "",
  customStyle: {}
};
