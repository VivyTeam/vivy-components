import React from "react";
import PropTypes from "prop-types";
import TextareaStyles from "./textarea.style";

export function Textarea({
  label,
  required,
  placeholder,
  onInput,
  disabled,
  style
}) {
  return (
    <TextareaStyles>
      {label}
      {required ? <span className="required">(required)</span> : null}
      <textarea
        disabled={disabled}
        onInput={onInput}
        placeholder={placeholder}
        style={style}
      />
    </TextareaStyles>
  );
}

Textarea.propTypes = {
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.shape({})
};

Textarea.defaultProps = {
  onInput: () => {},
  placeholder: "",
  label: "",
  required: false,
  disabled: false,
  style: {}
};

export default Textarea;
