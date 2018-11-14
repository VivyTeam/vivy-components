import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { VivyFooter } from "../src/index";

storiesOf("VivyFooter", module).add(
  "default",
  withInfo("The raw footer component")(() => <VivyFooter />)
);
