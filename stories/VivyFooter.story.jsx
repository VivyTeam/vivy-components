import React from "react";
import { storiesOf } from "@storybook/react";
import { VivyFooter } from "../src/index";

storiesOf("VivyFooter", module).add("default styles", () => <VivyFooter />, {
  info: "The raw footer component"
});
