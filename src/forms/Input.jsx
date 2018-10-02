import React from "react";
import PropTypes from "prop-types";
import InputStyles from "./input.style";

const Input = props => (
  <InputStyles>
    <label htmlFor={props.id}>
      <span>
        {props.label}
        {props.isRequired ? <span id="required">(required)</span> : null}
      </span>
      <input
        id={props.id}
        name={props.id}
        type={props.type}
        placeholder={props.placeholder}
      />
    </label>
  </InputStyles>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool
};

Input.defaultProps = {
  type: "",
  placeholder: "",
  label: "",
  isRequired: false
};

export default Input;
