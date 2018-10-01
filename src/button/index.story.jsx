import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { Button, AnchorButton, Icon } from "../index";

const click = action("Button");

const ButtonStyles = styled.div`
  margin: 80px 0 50px 110px;

  h1 {
    margin-bottom: 66.6px;
    font-size: 22px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.91;
    letter-spacing: normal;
    color: #898988;
    text-transform: uppercase;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: #575756;
  }

  .list {
    display: flex;
    flex-direction: row;
    margin-top: 27px;
    margin-bottom: 50px;
  }

  a,
  button {
    margin-right: 25px;
  }
`;

// Button styles are copied from the Vivy zeplin
// WebUIs/Styleguide
storiesOf("Buttons", module).add(
  "Buttons Types",
  withInfo("A list of primary, secondary, and tertiary buttons")(() => (
    <ButtonStyles>
      <h1>Buttons</h1>

      <h2>Primary Call to Action</h2>
      <div className="list">
        <Button onClick={() => click("button clicked!")}>Call to Action</Button>
        <Button onClick={() => click("button clicked!")}>
          <Icon name="call-contact" />
          Call to Action
        </Button>
      </div>
      <h2>Secondary Call to Action</h2>
      <div className="list">
        <Button type="secondary" onClick={() => click("button clicked!")}>
          Call to Action
        </Button>
        <Button type="secondary" onClick={() => click("button clicked!")}>
          <Icon name="call-contact" />
          Call to Action
        </Button>
      </div>
      <h2>Tertiary Call to Action</h2>
      <div className="list">
        <Button type="tertiary" onClick={() => click("button clicked!")}>
          Call to Action
        </Button>
        <Button type="tertiary" onClick={() => click("button clicked!")}>
          <Icon name="call-contact" />
          Call to Action
        </Button>
      </div>
      <h2>quaternary call to action</h2>
      <div className="list">
        <Button type="quaternary" onClick={() => click("button clicked!")}>
          Call to Action
        </Button>
        <Button type="quaternary" onClick={() => click("button clicked!")}>
          <Icon name="call-contact" />
          Call to Action
        </Button>
      </div>
      <h2>Disabled</h2>
      <div className="list">
        <Button disabled type="primary" onClick={() => click("disabled")}>
          Disabled
        </Button>
        <Button disabled type="secondary" onClick={() => click("disabled")}>
          Disabled
        </Button>
      </div>

      <h1>Anchor Buttons</h1>

      <h2>Primary Call to Action</h2>
      <div className="list">
        <AnchorButton
          onClick={() => click("button clicked!")}
          href="https://www.vivy.com/"
          target="_blank"
        >
          Call to Action
        </AnchorButton>
        <AnchorButton
          onClick={() => click("button clicked!")}
          href="https://www.vivy.com/"
          target="_blank"
        >
          <Icon name="call-contact" />
          Call to Action
        </AnchorButton>
      </div>
      <h2>Secondary Call to Action</h2>
      <div className="list">
        <AnchorButton
          type="secondary"
          onClick={() => click("button clicked!")}
          href="https://www.vivy.com/"
          target="_blank"
        >
          Call to Action
        </AnchorButton>
        <AnchorButton
          type="secondary"
          onClick={() => click("button clicked!")}
          href="https://www.vivy.com/"
          target="_blank"
        >
          <Icon name="call-contact" />
          Call to Action
        </AnchorButton>
      </div>
      <h2>Tertiary Call to Action</h2>
      <div className="list">
        <AnchorButton
          type="tertiary"
          onClick={() => click("button clicked!")}
          href="https://www.vivy.com/"
          target="_blank"
        >
          Call to Action
        </AnchorButton>
        <AnchorButton
          type="tertiary"
          onClick={() => click("button clicked!")}
          href="https://www.vivy.com/"
          target="_blank"
        >
          <Icon name="call-contact" />
          Call to Action
        </AnchorButton>
      </div>
      <h2>Quaternary call to action</h2>
      <div className="list">
        <AnchorButton
          type="quaternary"
          onClick={() => click("button clicked!")}
          href="https://www.vivy.com/"
          target="_blank"
        >
          Call to Action
        </AnchorButton>
        <AnchorButton
          type="quaternary"
          onClick={() => click("button clicked!")}
          href="https://www.vivy.com/"
          target="_blank"
        >
          <Icon name="call-contact" /> <span>Call to Action</span>
        </AnchorButton>
      </div>
    </ButtonStyles>
  ))
);
