import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function AnchorButton({
  id,
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
        id={id}
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
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
  download: PropTypes.oneOf([PropTypes.bool, PropTypes.string]),
  style: PropTypes.shape({}),
  className: PropTypes.string
};

AnchorButton.defaultProps = {
  id: null,
  type: "primary",
  onClick: () => {},
  target: "_self",
  rel: null,
  download: null,
  style: {},
  className: ""
};
