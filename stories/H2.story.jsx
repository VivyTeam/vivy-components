import React from "react";
import { storiesOf } from "@storybook/react";
import { H2, Colors } from "../src/index";

storiesOf("H2", module)
  .add("basic", () => <H2>Better Health Needs Vivy</H2>)
  .add("styled", () => (
    <H2 style={{ color: Colors.brandPrimary }}>Better Health Needs Vivy</H2>
  ));
