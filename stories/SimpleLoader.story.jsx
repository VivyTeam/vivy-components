import React from "react";
import { storiesOf } from "@storybook/react";
import { SimpleLoader } from "../src/index";

storiesOf("SimpleLoader", module)
  .add("basic", () => <SimpleLoader />, {
    info: "A simple loader without any frills"
  })
  .add("centered", () => <SimpleLoader centered />, {
    info: { info: "A list of primary, secondary, and tertiary buttons" }
  })
  .add(
    "loader with custom size",
    () => <SimpleLoader width={100} height={100} />,
    { info: "Loader with a set width and height" }
  );
