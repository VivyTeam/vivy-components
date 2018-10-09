import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { Textarea } from "../index";

setAddon(JSXAddon);

storiesOf("Textarea", module)
  .addWithJSX("default", () => <Textarea label="Default" />)
  .addWithJSX("disabled", () => <Textarea disabled label="Disabled" />)
  .addWithJSX("required", () => <Textarea required label="Mandatory" />)
  .addWithJSX("with style", () => (
    <Textarea style={{ height: 500 }} label="With some style" />
  ));
