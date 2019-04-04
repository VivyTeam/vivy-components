import React from "react";
import { storiesOf } from "@storybook/react";
import { Tiny, Colors } from "../src/index";

storiesOf("Tiny", module)
  .add("basic", () => <Tiny>Better Health needs Vivy.</Tiny>)
  .add("styled", () => (
    <Tiny style={{ color: Colors.brandPrimary }}>
      Better Health needs Vivy.
    </Tiny>
  ))
  .add("type bold", () => <Tiny type="bold">Better Health needs Vivy.</Tiny>);
