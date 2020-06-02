import React from "react";
import { storiesOf } from "@storybook/react";
import { Button, Icon } from "../src/index";
import { ButtonHeights } from "../src/Buttons/button.style";

storiesOf("Button", module)
  .add("primary", () => <Button>Call to Action</Button>)
  .add("primary height large", () => (
    <Button height={ButtonHeights.HEIGHT_TYPE_LG}>Call to Action</Button>
  ))
  .add("primary with height small", () => (
    <Button height={ButtonHeights.HEIGHT_TYPE_SM}>Call to Action</Button>
  ))
  .add("primary with custom width", () => (
    <Button style={{ width: 130 }}>Call to Action</Button>
  ))
  .add("primary disabled", () => <Button disabled>Call to Action</Button>)
  .add("secondary", () => <Button type="secondary">Call to Action</Button>)
  .add("secondary with height basic", () => (
    <Button height={ButtonHeights.HEIGHT_TYPE_BASIC} type="secondary">
      Call to Action
    </Button>
  ))
  .add("secondary with height large", () => (
    <Button height={ButtonHeights.HEIGHT_TYPE_LG} type="secondary">
      Call to Action
    </Button>
  ))
  .add("secondary with height small", () => (
    <Button height={ButtonHeights.HEIGHT_TYPE_SM} type="secondary">
      Call to Action
    </Button>
  ))
  .add("secondary with custom width", () => (
    <Button type="secondary" style={{ width: 130 }}>
      Call to Action
    </Button>
  ))
  .add("secondary disabled", () => (
    <Button disabled type="secondary">
      Call to Action
    </Button>
  ))
  .add("with an icon", () => (
    <Button>
      <Icon name="call-filled" />
      Call to Action
    </Button>
  ))
  .add("onClick handler", () => (
    // eslint-disable-next-line no-alert
    <Button onClick={() => window && window.alert("Button Clicked!")}>
      Click me!
    </Button>
  ));
