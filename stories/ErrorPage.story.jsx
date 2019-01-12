import React from "react";
import { storiesOf } from "@storybook/react";
import { NotFoundPage, Topbar, Button } from "../src/index";
import logo from "../public/images/logo.svg";

storiesOf("Error Pages", module).add(
  "404 page",
  () => (
    <div>
      <Topbar>
        <a
          className="link"
          href="https://www.vivy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src={logo} alt="Vivy Logo" />
        </a>
      </Topbar>
      <NotFoundPage>
        <h2>Oops! Looks like we have lost that page.</h2>
        <p>Please try again or return to the homepage</p>
        <Button type="secondary">Return home</Button>
      </NotFoundPage>
    </div>
  ),
  { info: "An error page for when a route can't be found" }
);
