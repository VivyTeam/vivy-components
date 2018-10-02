import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Footer } from "../index";

const LayoutStyles = styled.div`
  width: 80%;
  margin: 0 auto;

  .layout-body {
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const footerChildren = (
  <Fragment>
    <a
      className="link"
      href="https://www.vivy.com/impressum"
      target="_"
      rel="noopener noreferrer"
    >
      Impressum
    </a>
    <a
      className="link"
      href="https://www.vivy.com/nutzungsbedingungen"
      target="_"
      rel="noopener noreferrer"
    >
      AGB
    </a>
    <a
      className="link"
      href="https://www.vivy.com/datenschutz"
      target="_"
      rel="noopener noreferrer"
    >
      Datenschutz
    </a>
  </Fragment>
);

storiesOf("Footer", module).add(
  "default",
  withInfo("The raw footer component")(() => (
    <LayoutStyles>
      <Footer>{footerChildren}</Footer>
    </LayoutStyles>
  ))
);
