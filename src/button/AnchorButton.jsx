import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function AnchorButton({ children, type, ...rest }) {
  return (
    <ButtonStyles>
      <a {...rest} className={type}>
        <div className="component-child">{children}</div>
      </a>
    </ButtonStyles>
  );
}

AnchorButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

AnchorButton.defaultProps = {
  type: "primary"
};
