import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { DateDisplay } from "../src/index";

storiesOf("DateDisplay", module).add(
  "default",
  withInfo("Simply shows the birthdate in form DD.MMMM YYYY")(() => (
    <DateDisplay date="1990-10-10" />
  ))
);
