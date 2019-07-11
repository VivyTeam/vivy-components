import React from "react";
import { storiesOf } from "@storybook/react";
import { NotFoundPage, Button } from "../src/index";

storiesOf("NotFoundPage", module).add(
  "basic",
  () => (
    <NotFoundPage>
      <h2>Oops! Looks like we have lost that page.</h2>
      <p>Please try again or return to the homepage</p>
      <Button>Return home</Button>
    </NotFoundPage>
  ),
  { info: "An error page for when a route can't be found" }
);
