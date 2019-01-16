import React, { Fragment } from "react";
import Fonts from "../src/Fonts/fonts.style";
import { withOptions } from "@storybook/addon-options";

export function withGlobalStyles(storyFn) {
  return (
    <Fragment>
      <Fonts />
      {storyFn()}
    </Fragment>
  );
}

export const withVivyOptions = withOptions({
  name: "Vivy",
  url: "https://www.vivy.com/",
  showStoriesPanel: true,
  showAddonPanel: true
});
