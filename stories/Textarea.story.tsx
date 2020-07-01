import React from "react";
import { storiesOf } from "@storybook/react";
import { Textarea } from "../src/index";

storiesOf("Textarea", module)
  .add("basic", () => <Textarea id="textarea" label="Default" />)
  .add("disabled", () => (
    <Textarea
      id="textarea"
      disabled
      label="Disabled"
      defaultValue="Not allowed, sorry!"
    />
  ))
  .add("Mandatory", () => (
    <Textarea id="textarea" optional={false} label="Mandatory" />
  ))
  .add("with style", () => (
    <Textarea id="textarea" style={{ height: 500 }} label="With some style" />
  ))
  .add("with default value", () => (
    <Textarea
      id="textarea"
      defaultValue="Happy and well-informed employees are employees who are more likely to remain loyal to your organization. By giving them access to round-the-clock online training and self-paced learning modules, they can further their professional goals and feel motivated to improve their on-the-job performance. They can also pinpoint areas they may need to work on and find out their core strengths, so that they are able to become better employees and more informed advocates for your brand."
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
