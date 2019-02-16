import React from "react";
import { storiesOf } from "@storybook/react";
import { AnchorButton, Icon } from "../src/index";

storiesOf("AnchorButton", module)
  .add("primary", () => (
    <AnchorButton href="https://www.vivy.com/" target="_blank">
      Call to Action
    </AnchorButton>
  ))
  .add("secondary", () => (
    <AnchorButton href="https://www.vivy.com/" target="_blank" type="secondary">
      Call to Action
    </AnchorButton>
  ))
  .add("tertiary", () => (
    <AnchorButton href="https://www.vivy.com/" target="_blank" type="tertiary">
      Call to Action
    </AnchorButton>
  ))
  .add("quaternary", () => (
    <AnchorButton
      href="https://www.vivy.com/"
      target="_blank"
      type="quaternary"
    >
      Call to Action
    </AnchorButton>
  ))
  .add("with an icon", () => (
    <AnchorButton href="https://www.vivy.com/" target="_blank">
      <Icon name="call-filled" />
      Call to Action
    </AnchorButton>
  ));
