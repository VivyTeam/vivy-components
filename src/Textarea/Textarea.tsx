import React, { FC } from "react";
import TextareaStyles from "./textarea.style";

type TextareaProps = {
  onInput?: () => {};
  placeholder?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  style?: {};
};

const Textarea: FC<TextareaProps> = ({
  label = "",
  required = false,
  placeholder = "",
  onInput = () => {},
  disabled = false,
  style = {},
}) => {
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
};

export default Textarea;
export { Textarea };
