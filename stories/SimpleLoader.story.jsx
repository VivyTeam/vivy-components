import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { SimpleLoader } from "../src/index";

storiesOf("Loaders", module)
  .add(
    "Basic loader",
    withInfo("A simple loader without any frills")(() => <SimpleLoader />)
  )
  .add(
    "Centered",
    withInfo("A loader that is centered in the page")(() => (
      <SimpleLoader centered />
    ))
  )
  .add(
    "Loader with custom size",
    withInfo("Loader with a set width and height")(() => (
      <SimpleLoader width={100} height={100} />
    ))
  );
