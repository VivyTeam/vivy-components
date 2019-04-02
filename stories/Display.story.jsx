import React from "react";
import { storiesOf } from "@storybook/react";
import { Display, Colors } from "../src/index";

storiesOf("Display", module)
  .add("basic", () => <Display>Better Health Needs Vivy</Display>)
  .add("styled", () => (
    <Display style={{ color: Colors.brandPrimary }}>
      Better Health Needs Vivy
    </Display>
  ));
