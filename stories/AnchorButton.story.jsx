import React from "react";
import { storiesOf } from "@storybook/react";
import { AnchorButton, Icon } from "../src/index";

storiesOf("AnchorButton", module)
  .add("primary", () => (
    <AnchorButton href="https://www.vivy.com/" target="_blank">
      Call to Action
    </AnchorButton>
  ))
  .add("primary height 56", () => (
    <AnchorButton height="lg" href="https://www.vivy.com/" target="_blank">
      Call to Action
    </AnchorButton>
  ))
  .add("primary height 32", () => (
    <AnchorButton height="sm" href="https://www.vivy.com/" target="_blank">
      Call to Action
    </AnchorButton>
  ))
  .add("primary with custom width", () => (
    <AnchorButton
      style={{ width: 130 }}
      href="https://www.vivy.com/"
      target="_blank"
    >
      Call to Action
    </AnchorButton>
  ))
  .add("secondary", () => (
    <AnchorButton href="https://www.vivy.com/" target="_blank" type="secondary">
      Call to Action
    </AnchorButton>
  ))
  .add("secondary height 56", () => (
    <AnchorButton
      height="lg"
      href="https://www.vivy.com/"
      target="_blank"
      type="secondary"
    >
      Call to Action
    </AnchorButton>
  ))
  .add("secondary height 32", () => (
    <AnchorButton
      height="sm"
      href="https://www.vivy.com/"
      target="_blank"
      type="secondary"
    >
      Call to Action
    </AnchorButton>
  ))
  .add("secondary with custom width", () => (
    <AnchorButton
      style={{ width: 130 }}
      href="https://www.vivy.com/"
      target="_blank"
      type="secondary"
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
