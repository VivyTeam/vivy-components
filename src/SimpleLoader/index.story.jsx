import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { SimpleLoader } from "../index";

storiesOf("SimpleLoader", module)
  .add(
    "default",
    withInfo("A simple loader")(() => (
      <div>
        <SimpleLoader />
      </div>
    ))
  )
  .add(
    "centered",
    withInfo("A simple loader centered")(() => (
      <div>
        <SimpleLoader centered />
      </div>
    ))
  )
  .add(
    "with width and height",
    withInfo("A simple loader")(() => (
      <div>
        <SimpleLoader width={100} height={100} />
      </div>
    ))
  );
