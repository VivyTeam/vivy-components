import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withGlobalStyles, withVivyOptions } from "./customDecorators";

addDecorator(withGlobalStyles);
addDecorator(withVivyOptions);
addDecorator(withInfo);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
