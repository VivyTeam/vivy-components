import React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "../src/index";

storiesOf("Checkbox", module)
  .add("basic", () => (
    <Checkbox id="newsletter" name="newsletter">
      Sign up newsletter
    </Checkbox>
  ))
  .add("optional", () => (
    <Checkbox id="newsletter" name="newsletter" optional>
      Sign up newsletter
    </Checkbox>
  ));
