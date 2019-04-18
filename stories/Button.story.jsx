import React from "react";
import { storiesOf } from "@storybook/react";
import { Button, Icon } from "../src/index";

storiesOf("Button", module)
  .add("primary", () => <Button>Call to Action</Button>)
  .add("primary height 56", () => <Button height="lg">Call to Action</Button>)
  .add("primary height 32", () => <Button height="sm">Call to Action</Button>)
  .add("primary with custom width", () => (
    <Button style={{ width: 130 }}>Call to Action</Button>
  ))
  .add("primary disabled", () => <Button disabled>Call to Action</Button>)
  .add("secondary", () => <Button type="secondary">Call to Action</Button>)
  .add("secondary height 56", () => (
    <Button height="lg" type="secondary">
      Call to Action
    </Button>
  ))
  .add("secondary height 32", () => (
    <Button height="sm" type="secondary">
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
