import React from "react";
import { storiesOf } from "@storybook/react";
import { SimpleLoader } from "../src/index";

storiesOf("Loaders", module)
  .add("Basic loader", () => <SimpleLoader />, {
    info: "A simple loader without any frills"
  })
  .add("Centered", () => <SimpleLoader centered />, {
    info: { info: "A list of primary, secondary, and tertiary buttons" }
  })
  .add(
    "Loader with custom size",
    () => <SimpleLoader width={100} height={100} />,
    { info: "Loader with a set width and height" }
  );
