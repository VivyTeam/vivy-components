import React from "react";
import { storiesOf } from "@storybook/react";
import { Topbar } from "../src/index";
import logo from "../public/images/logo.svg";

storiesOf("Topbar", module).add(
  "basic",
  () => (
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
  ),
  { info: "The raw topbar component" }
);
