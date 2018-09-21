import React from "react";
import PropTypes from "prop-types";
import TextareaStyles from "./textarea.style.js";

export function Textarea(props) {
  const { label, required, placeholder, onInput, disabled } = props;

  return (
    <TextareaStyles>
      {label}
      {required ? <span className="required">(required)</span> : null}
      <textarea
        disabled={disabled}
        onInput={onInput}
        placeholder={placeholder}
      />
    </TextareaStyles>
  );
}

Textarea.propTypes = {
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};

Textarea.defaultProps = {
  onInput: () => {},
  placeholder: "",
  label: "",
  required: false,
  disabled: false
};

export default Textarea;
