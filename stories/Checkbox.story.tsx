import React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox, Validation } from "../src";
import { ValidationRules } from "../src/Forms/Validation";

const validationRules: ValidationRules = {
  newsletter: {
    type: "enum",
    enum: ["true"],
    required: true,
    message: "*You must agree to the newsletter",
    transform: (value = false) => value.toString(),
  },
};

storiesOf("Checkbox", module)
  .add("default", () => (
    <Checkbox id="newsletter" name="newsletter">
      Sign up newsletter
    </Checkbox>
  ))
  .add("with optional label", () => (
    <Checkbox id="newsletter" name="newsletter" optional>
      Sign up newsletter
    </Checkbox>
  ))
  .add("with error validation", () => (
    <Validation rules={validationRules}>
      <Checkbox id="newsletter" name="newsletter">
        Sign up newsletter
      </Checkbox>
    </Validation>
  ));
