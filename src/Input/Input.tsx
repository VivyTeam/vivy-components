import React, { FC, createRef, ChangeEvent, LegacyRef } from "react";
import InputWrapper from "../InputWrapper";
import { ValidationContext } from "../Forms/Validation";
import classNames from "../utils/classNames";
import formData from "../utils/formData";

type InputProps = {
  id: string;
  name?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  iconName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validateOnChange?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  validateOnBlur?: boolean;
  rel?: LegacyRef<HTMLInputElement>;
};

const Input: FC<InputProps> = ({
  id,
  label = "",
  type = "",
  placeholder = "",
  name = "default",
  iconName = "",
  defaultValue = "",
  rel = createRef(),
  onChange = (_e: ChangeEvent<HTMLInputElement>) => {},
  validateOnChange = true,
  onBlur = () => {},
  validateOnBlur = true,
}) => {
  const padding = classNames(["icon-padding", iconName]);

  return (
    <ValidationContext.Consumer>
      {({ validate, cleanField, errors: { [id]: error } }) => (
        <InputWrapper error={error} id={id} iconName={iconName} label={label}>
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={padding}
            ref={rel}
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
            {...(defaultValue && { defaultValue })}
          />
        </InputWrapper>
      )}
    </ValidationContext.Consumer>
  );
};

export default Input;
