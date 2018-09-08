import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import SimpleLoader from "../src/SimpleLoader/index";
import { withInfo } from "@storybook/addon-info";

setAddon(JSXAddon);

const container = {
  width: "80%",
  margin: "0 auto",
  paddingTop: "100px",
};

storiesOf("Spinner", module).addWithJSX("Spinner",
  withInfo("A Spinner")(() => (
    <div style={container}>
      <SimpleLoader />
      <SimpleLoader isCentered />
    </div>
  ))
);
