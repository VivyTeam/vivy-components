import { addDecorator, configure, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";
import { withGlobalStyles } from "./customDecorators";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);
addDecorator(withGlobalStyles);

addParameters({
  options: {
    showPanel: false,
    name: "Vivy",
    theme: create({
      base: "light",
      brandTitle: "Vivy",
      brandUrl: "https://www.vivy.com/",
    }),
  },
});

function loadStories() {
  // put welcome screen at the top of the list so it's the first one displayed
  require("../stories/Welcome");
  // automatically import all story files
  const req = require.context("../stories", true, /\.story\.(tsx|jsx)$/);

  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
