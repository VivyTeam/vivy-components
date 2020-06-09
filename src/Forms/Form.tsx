import React, { FC, FormEvent } from "react";
import { ValidationContext, FieldsObject } from "./Validation";
import formData from "../utils/formData";

type FormProps = {
  select?: (value: string) => void;
  submit?: (fields: FieldsObject, event: FormEvent<HTMLFormElement>) => void;
};

const Form: FC<FormProps> = ({
  children,
  select = () => {},
  submit = () => {},
}) => {
  const formSubmit = (e: FormEvent<HTMLFormElement>, validation) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const fields = formData((e.target as HTMLFormElement).elements);

    if (!validation || !validation(fields)) {
      submit(fields, e);
    }
  };

  return (
    <ValidationContext.Consumer>
      {({ validate }) => (
        <form
          onChange={(e) => select((e.target as HTMLFormElement).value)}
          onSubmit={(e) => formSubmit(e, validate)}
        >
          {children}
        </form>
      )}
    </ValidationContext.Consumer>
  );
};

export default Form;
