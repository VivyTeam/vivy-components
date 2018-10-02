import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Button from "../src/button/Button";
import Icon from "../src/icons";

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
        <Button>
          <button className="primary" onClick={() => click("button clicked!")}>
            <div className="component-child">
              <Icon name="call-contact" />
              Call to Action
            </div>
          </button>
        </Button>
      </div>
      <h2>Secondary Call to Action</h2>
      <div className="list">
        <Button>
          <button
            className="secondary"
            onClick={() => click("button clicked!")}
          >
            <div className="component-child">
              <Icon name="call-contact" />
              Call to Action
            </div>
          </button>
        </Button>
      </div>
      <h2>Tertiary Call to Action</h2>
      <div className="list">
        <Button type="tertiary">
          <button className="tertiary" onClick={() => click("button clicked!")}>
            <div className="component-child">
              <Icon name="call-contact" />
              Call to Action
            </div>
          </button>
        </Button>
      </div>
      <h2>quaternary call to action</h2>
      <div className="list">
        <Button>
          <button className="tertiary" onClick={() => click("button clicked!")}>
            <div className="component-child">
              <Icon name="call-contact" />
              Call to Action
            </div>
          </button>
        </Button>
      </div>
      <h2>Disabled</h2>
      <div className="list">
        <Button>
          <button
            disabled
            className="primary"
            onClick={() => click("button clicked!")}
          >
            <div className="component-child">Disabled</div>
          </button>
        </Button>
        <Button>
          <button
            disabled
            className="secondary"
            onClick={() => click("button clicked!")}
          >
            <div className="component-child">Disabled</div>
          </button>
        </Button>
      </div>

      <h1>Anchor Buttons</h1>
      <h2>Primary Call to Action</h2>
      <div className="list">
        <Button>
          <a className="primary" href="https://www.vivy.com/">
            <div className="component-child">
              <Icon name="call-contact" />
              Call to Action
            </div>
          </a>
        </Button>
      </div>
      <h2>Secondary Call to Action</h2>
      <div className="list">
        <Button>
          <a className="secondary" href="https://www.vivy.com/">
            <div className="component-child">
              <Icon name="call-contact" />
              Call to Action
            </div>
          </a>
        </Button>
      </div>
      <h2>Tertiary Call to Action</h2>
      <div className="list">
        <Button>
          <a className="tertiary" href="https://www.vivy.com/">
            <div className="component-child">
              <Icon name="call-contact" />
              Call to Action
            </div>
          </a>
        </Button>
      </div>
      <h2>Quaternary call to action</h2>
      <div className="list">
        <Button>
          <a className="quaternary" href="https://www.vivy.com/">
            <div className="component-child">
              <Icon name="call-contact" />
              Call to Action
            </div>
          </a>
        </Button>
      </div>
    </ButtonStyles>
  ))
);
