import { withOptions } from "@storybook/addon-options";
import Fonts from '../src/Fonts';
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
      <Fonts />
      {storyFn()}
    </React.Fragment>
  );
}