import React from "react";
import { storiesOf } from "@storybook/react";
import { H1, Colors } from "../src/index";

storiesOf("HeadingOne", module)
  .add("basic", () => <H1>Better Health Needs Vivy</H1>)
  .add("styled", () => (
    <H1 style={{ color: Colors.brandPrimary }}>Better Health Needs Vivy</H1>
  ));
