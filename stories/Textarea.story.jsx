import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Textarea } from "../src/index";

storiesOf("Textarea", module)
  .add("default", withInfo()(() => <Textarea label="Default" />))
  .add("disabled", withInfo()(() => <Textarea disabled label="Disabled" />))
  .add("required", withInfo()(() => <Textarea required label="Mandatory" />))
  .add(
    "with style",
    withInfo()(() => (
      <Textarea style={{ height: 500 }} label="With some style" />
    ))
  );
