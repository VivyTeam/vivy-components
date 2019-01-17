import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { withVivyOptions, withGlobalStyles } from "./customDecorators";

addDecorator(withVivyOptions);
addDecorator(withGlobalStyles);

function loadStories() {
  // put welcome screen at the top of the list so it's the first one displayed
  require("../stories/Welcome");
  // automatically import all story js files that end with *.stories.js
  const req = require.context("../stories", true, /\.story\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
