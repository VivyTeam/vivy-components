import React from "react";
import { storiesOf } from "@storybook/react";
import { HeadingOne, Colors } from "../src/index";

storiesOf("HeadingOne", module)
  .add("basic", () => <HeadingOne>Better Health Needs Vivy</HeadingOne>)
  .add("styled", () => (
    <HeadingOne style={{ color: Colors.brandPrimary }}>
      Better Health Needs Vivy
    </HeadingOne>
  ));
