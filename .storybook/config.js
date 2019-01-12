import { addDecorator, configure } from "@storybook/react";
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);
addDecorator(
  withOptions({
    name: "Vivy",
    url: "https://www.vivy.com/",
    showStoriesPanel: true,
    showAddonPanel: true
  })
);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
