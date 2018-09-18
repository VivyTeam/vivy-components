import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import BirthDate from "../src/BirthDate";

storiesOf("BirthDate", module).add(
  "BirthDate",
  withInfo("Simply shows the birthdate in form DD.MMM.YYYY")(() => (
    <div>
      <BirthDate birthDate="1990-10-10" />
    </div>
  ))
);
