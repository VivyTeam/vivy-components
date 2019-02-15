import React from "react";
import { storiesOf } from "@storybook/react";
import { Button, Icon } from "../src/index";

storiesOf("Button", module)
  .add("primary", () => <Button>Call to Action</Button>)
  .add("secondary", () => <Button type="secondary">Call to Action</Button>)
  .add("tertiary", () => <Button type="tertiary">Call to Action</Button>)
  .add("quaternary", () => <Button type="quaternary">Call to Action</Button>)
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
