import React from "react";
import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
  name: "Vivy",
  url: "https://www.vivy.com/",
  showStoriesPanel: true,
  showAddonPanel: true
});

// automatically import all files ending in *.story.jsx
const req = require.context("../src", true, /story\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
