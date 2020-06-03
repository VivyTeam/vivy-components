import { Fonts, GlobalStyles } from "../src/index";
import React from "react";

export function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Fonts />
      {storyFn()}
    </React.Fragment>
  );
}
