import React, { FC, CSSProperties } from "react";
import InputWrapper from "../InputWrapper";
import { ValidationContext } from "../Forms/Validation";
import formData from "../utils/formData";

type TextareaProps = {
  id: string;
  name?: string;
  defaultValue?: string;
  iconName?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  validateOnChange?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  validateOnBlur?: boolean;
  placeholder?: string;
  label?: string;
  optional?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
};

const Textarea: FC<TextareaProps> = ({
  id,
  name = "",
  iconName = "",
  onChange = (_e) => {},
  validateOnChange = false,
  onBlur = (_e) => {},
  validateOnBlur = false,
  label = "",
  defaultValue,
  optional = false,
  placeholder = "",
  disabled = false,
  style = {},
}) => {
  return (
    <ValidationContext.Consumer>
      {({ validate, cleanField, errors: { [id]: error } }) => (
        <InputWrapper
          error={error}
          id={id}
          iconName={iconName}
          label={label}
          optional={optional}
        >
          <textarea
            id={id}
            name={name}
            defaultValue={defaultValue}
            disabled={disabled}
            placeholder={placeholder}
            style={style}
            onChange={(e) => {
              if (validateOnChange) {
                validate(formData(e.target.form), e.target.id);
              } else {
                cleanField(e.target.id);
              }

              onChange(e);
            }}
            onBlur={(e) => {
              if (validateOnBlur) {
                validate(formData(e.target.form), e.target.id);
              }
              onBlur(e);
            }}
          />
        </InputWrapper>
      )}
    </ValidationContext.Consumer>
  );
};

export default Textarea;
export { Textarea };
