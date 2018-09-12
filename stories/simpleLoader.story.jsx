import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Spinner from "../src/SimpleLoader/index";

storiesOf("Animations", module).add(
  "Spinner",
  withInfo("A simple spinner for showing loading progress")(() => (
    <div>
      <Spinner isCentered />
    </div>
  ))
);
