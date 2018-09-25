import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import SimpleLoader from "../src/SimpleLoader";

storiesOf("Animations", module).add(
  "SimpleLoader",
  withInfo("A simple loader")(() => (
    <div>
      <SimpleLoader centered />
    </div>
  ))
);
