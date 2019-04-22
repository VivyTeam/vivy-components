import React from "react";
import { addDecorator, configure, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";
import { withGlobalStyles } from "./customDecorators";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(withGlobalStyles);

addParameters({
  options: {
    name: "Vivy",
    theme: create({
      base: "light",
      brandTitle: "Vivy",
      brandUrl: "https://www.vivy.com/"
    })
  }
});

function loadStories() {
  // put welcome screen at the top of the list so it's the first one displayed
  require("../stories/Welcome");
  // automatically import all story js files that end with *.stories.js
  const req = require.context("../stories", true, /\.story\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
