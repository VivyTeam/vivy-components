import React from "react";
import { storiesOf } from "@storybook/react";
import { DateDisplayMinimal } from "../src/index";

storiesOf("DateDisplayMinimal", module).add(
  "basic",
  () => <DateDisplayMinimal date="1990-10-10" />,
  { info: "Simply shows the birthdate in form DD.MM.YYYY" }
);
