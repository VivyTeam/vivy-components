import { withOptions } from "@storybook/addon-options";
import { Fonts, GlobalStyles } from "../src/index";
import React from "react";

export const withVivyOptions = withOptions({
  name: "Vivy",
  url: "https://www.vivy.com/",
  showStoriesPanel: true,
  showAddonPanel: false
});

export function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Fonts />
      {storyFn()}
    </React.Fragment>
  );
}
