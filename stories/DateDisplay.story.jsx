import React from "react";
import { storiesOf } from "@storybook/react";
import { DateDisplay } from "../src/index";

storiesOf("DateDisplay", module).add(
  "basic",
  () => <DateDisplay date="1990-10-10" />,
  {
    info: "Simply shows the birthdate in form DD.MMMM YYYY"
  }
);
