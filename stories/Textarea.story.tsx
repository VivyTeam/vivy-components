import React from "react";
import { storiesOf } from "@storybook/react";
import { Textarea } from "../src/index";

storiesOf("Textarea", module)
  .add("basic", () => <Textarea id="textarea" label="Default" />)
  .add("disabled", () => <Textarea id="textarea" disabled label="Disabled" />)
  .add("Mandatory", () => (
    <Textarea id="textarea" optional={false} label="Mandatory" />
  ))
  .add("with style", () => (
    <Textarea id="textarea" style={{ height: 500 }} label="With some style" />
  ))
  .add("with default value", () => (
    <Textarea
      id="textarea"
      defaultValue="With some value"
      label="With Default Value"
    />
  ))
  .add("with onBlur", () => (
    <Textarea
      id="textarea"
      label="With onBlur"
      onBlur={(_e) => {
        // eslint-disable-next-line no-console
        console.log("Blur!");
      }}
    />
  ))
  .add("with onChange", () => (
    <Textarea
      id="textarea"
      label="With onChange"
      onChange={(_e) => {
        // eslint-disable-next-line no-console
        console.log(_e.target.value);
      }}
    />
  ));
