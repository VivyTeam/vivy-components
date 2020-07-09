import React, { FunctionComponent } from "react";
import { ValidationContext } from "../Forms/Validation";
import formData from "../utils/formData";
import {
  CheckBoxWrapper,
  CheckBoxInput,
  CheckMark,
  Label,
  OptionalMetaLabel,
  ErrorMetaLabel,
} from "./checkbox.style";

type CheckboxProps = {
  id: string;
  value?: string;
  name?: string;
  optional?: boolean;
};

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  id,
  children,
  value = "",
  name = "",
  optional = false,
}) => {
  return (
    <ValidationContext.Consumer>
      {({ validate, errors: { [id]: error } }) => (
        <CheckBoxWrapper>
          <CheckBoxInput
            id={id}
            name={name}
            value={value}
            onChange={(e) => validate(formData(e.target.form), e.target.id)}
          />
          <CheckMark htmlFor={id} />
          <Label htmlFor={id}>{children}</Label>
          {optional && (
            <OptionalMetaLabel htmlFor={id}>*optional</OptionalMetaLabel>
          )}
          {error && <ErrorMetaLabel htmlFor={id}>{error}</ErrorMetaLabel>}
        </CheckBoxWrapper>
      )}
    </ValidationContext.Consumer>
  );
};
