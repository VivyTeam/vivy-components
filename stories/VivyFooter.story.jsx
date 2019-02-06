import React from "react";
import { storiesOf } from "@storybook/react";
import { VivyFooter } from "../src/index";

storiesOf("VivyFooter", module).add(
  "default styles",
  () => (
    <div style={{ marginTop: 100 }}>
      <VivyFooter />
    </div>
  ),
  { info: "The raw footer component" }
);
