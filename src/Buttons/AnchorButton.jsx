import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function AnchorButton({
  onClick,
  type,
  href,
  target,
  rel,
  download,
  children,
  style,
  className
}) {
  return (
    <ButtonStyles>
      <a
        className={`${className} ${type}`}
        onClick={onClick}
        href={href}
        target={target}
        rel={rel}
        style={style}
        download={download}
      >
        <div className="component-child">{children}</div>
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
  download: PropTypes.string,
  style: PropTypes.shape({}),
  className: PropTypes.string
};

AnchorButton.defaultProps = {
  type: "primary",
  onClick: () => {},
  target: "_self",
  rel: "",
  download: "",
  style: {},
  className: ""
};
