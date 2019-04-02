import React from "react";
import { storiesOf } from "@storybook/react";
import { Paragraph, Colors } from "../src/index";

storiesOf("Paragraph", module)
  .add("basic", () => <Paragraph>Better Health needs Vivy.</Paragraph>)
  .add("styled", () => (
    <Paragraph style={{ color: Colors.brandPrimary }}>
      Better Health needs Vivy.
    </Paragraph>
  ))
  .add("bold", () => (
    <Paragraph type="bold">Better Health needs Vivy.</Paragraph>
  ));
