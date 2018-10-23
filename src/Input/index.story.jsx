import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Input } from "../index";

storiesOf("Input", module)
  .add(
    "default",
    withInfo()(() => <Input id="name" placeholder="Your name" label="Name" />)
  )
  .add(
    "required",
    withInfo()(() => (
      <Input id="required" placeholder="Required" label="Required" isRequired />
    ))
  )
  .add(
    "email",
    withInfo()(() => (
      <Input id="email" placeholder="Your e-mail" label="E-mail" type="email" />
    ))
  )
  .add(
    "password",
    withInfo()(() => (
      <Input
        id="password"
        placeholder="Your password"
        label="Password"
        type="password"
      />
    ))
  );
