import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { SimpleLoader } from "../index";

storiesOf("Animations", module)
  .add(
    "SimpleLoader",
    withInfo("A simple loader")(() => (
      <div>
        <SimpleLoader />
      </div>
    ))
  )
  .add(
    "SimpleLoader centered",
    withInfo("A simple loader centered")(() => (
      <div>
        <SimpleLoader centered />
      </div>
    ))
  )
  .add(
    "SimpleLoader with width and height",
    withInfo("A simple loader")(() => (
      <div>
        <SimpleLoader width={100} height={100} />
      </div>
    ))
  );
