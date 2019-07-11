import React from "react";
import { storiesOf } from "@storybook/react";
import { Caption, Colors } from "../src/index";

storiesOf("Caption", module)
  .add("basic", () => <Caption>Better Health needs Vivy.</Caption>)
  .add("styled", () => (
    <Caption style={{ color: Colors.primary }}>
      Better Health needs Vivy.
    </Caption>
  ))
  .add("type bold", () => (
    <Caption type="bold">Better Health needs Vivy.</Caption>
  ));
