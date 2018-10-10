import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { Textarea } from "../index";
import { withInfo } from "@storybook/addon-info";

setAddon(JSXAddon);

storiesOf("Textarea", module)
  .addWithJSX("default", withInfo()(() => <Textarea label="Default" />))
  .addWithJSX(
    "disabled",
    withInfo()(() => <Textarea disabled label="Disabled" />)
  )
  .addWithJSX(
    "required",
    withInfo()(() => <Textarea required label="Mandatory" />)
  )
  .addWithJSX(
    "with style",
    withInfo()(() => (
      <Textarea style={{ height: 500 }} label="With some style" />
    ))
  );
