import React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "../src";

storiesOf("Checkbox", module)
  .add("basic", () => (
    <Checkbox id="newsletter" name="newsletter">
      Sign up newsletter
    </Checkbox>
  ))
  .add("with optional label", () => (
    <Checkbox id="newsletter" name="newsletter" optional>
      Sign up newsletter
    </Checkbox>
  ));
