import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { BirthDate } from "../index";

storiesOf("BirthDate", module).add(
  "default",
  withInfo("Simply shows the birthdate in form DD.MM.YYYY")(() => (
    <BirthDate date="1990-10-10" />
  ))
);
