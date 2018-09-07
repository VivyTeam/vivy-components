import React, { Fragment } from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import JSXAddon from "storybook-addon-jsx";
import Index from "../src/footer/index";

setAddon(JSXAddon);

const container = {
  width: "80%",
  margin: "0 auto",
  paddingTop: "100px"
};

storiesOf("Footer", module).addWithJSX("Simple Vivy Footer", () => (
  <div style={container}>
    <Index>
      <Fragment>
        <a className="link" href="https://www.vivy.com/impressum" target="_">
          Impressum
        </a>
        <a
          className="link"
          href="https://www.vivy.com/nutzungsbedingungen"
          target="_"
        >
          AGB
        </a>
        <a className="link" href="https://www.vivy.com/datenschutz" target="_">
          Datenschutz
        </a>
      </Fragment>
    </Index>
  </div>
));
