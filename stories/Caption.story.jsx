import React from "react";
import { storiesOf } from "@storybook/react";
import { Caption, Colors } from "../src/index";

storiesOf("Caption", module)
  .add("basic", () => <Caption>Better Health needs Vivy.</Caption>)
  .add("styled", () => (
    <Caption style={{ color: Colors.brandPrimary }}>
      Better Health needs Vivy.
    </Caption>
  ))
  .add("type bold", () => <Caption type="bold">Better Health needs Vivy.</Caption>)
  .add("size tiny", () => (
    <Caption size="tiny">Better Health needs Vivy.</Caption>
  ))
  .add("size tiny and type bold", () => (
    <Caption type="bold" size="tiny">
      Better Health needs Vivy.
    </Caption>
  ))
  .add("size tiny, type bold and styled", () => (
    <Caption type="bold" size="tiny" style={{ color: Colors.brandPrimary }}>
      Better Health needs Vivy.
    </Caption>
  ));
