import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { DateDisplayMinimal } from "../src/index";

storiesOf("DateDisplayMinimal", module).add(
  "default",
  withInfo("Simply shows the birthdate in form DD.MM.YYYY")(() => (
    <DateDisplayMinimal date="1990-10-10" />
  ))
);
