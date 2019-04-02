import React from "react";
import { storiesOf } from "@storybook/react";
import { HeadingTwo, Colors } from "../src/index";

storiesOf("HeadingTwo", module)
  .add("basic", () => <HeadingTwo>Better Health Needs Vivy</HeadingTwo>)
  .add("styled", () => (
    <HeadingTwo style={{ color: Colors.brandPrimary }}>
      Better Health Needs Vivy
    </HeadingTwo>
  ));
