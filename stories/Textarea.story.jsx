import React from "react";
import { storiesOf } from "@storybook/react";
import { Textarea } from "../src/index";

storiesOf("Textarea", module)
  .add("basic", () => <Textarea label="Default" />)
  .add("disabled", () => <Textarea disabled label="Disabled" />)
  .add("required", () => <Textarea required label="Mandatory" />)
  .add("with style", () => (
    <Textarea style={{ height: 500 }} label="With some style" />
  ));
