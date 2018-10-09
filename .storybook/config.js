import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

import Container from "./Container";

setOptions({
  name: "Vivy",
  url: "https://www.vivy.com/",
  showStoriesPanel: true,
  showAddonPanel: true
});

// adds same Container style to all stories.
addDecorator(story => <Container story={story} />);

// automatically import all files ending in *.story.jsx
const req = require.context("../src", true, /story\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
