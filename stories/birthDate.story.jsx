import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { BirthDate } from "../src";

storiesOf("BirthDate", module).add(
  "BirthDate",
  withInfo("Simply shows the birthdate in form DD.MM.YYYY")(() => (
    <div>
      <BirthDate date="1990-10-10" />
    </div>
  ))
);
