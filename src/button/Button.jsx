import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";
import Icon from "../icons/Icon";

export default function Button(props) {
  return (
    <ButtonStyles>
      <button
        disabled={props.disabled}
        onClick={props.onClick}
        className={props.type}
      >
        {props.icon ? <Icon name={props.icon} /> : null}
        {props.children}
      </button>
    </ButtonStyles>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string
};

Button.defaultProps = {
  children: "",
  type: "primary",
  onClick: () => {},
  disabled: false,
  icon: ""
};
