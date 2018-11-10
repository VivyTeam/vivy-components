import React from "react";
import styled, { injectGlobal } from "styled-components";
import { storiesOf } from "@storybook/react";
import PrinciplesPage from "../src/Welcome/PrinciplesPage";
import EthosPage from "../src/Welcome/EthosPage";
import ThemeColors from "../src/Welcome/ThemeColors";
import ThemeTypography from "../src/Welcome/ThemeTypography";
import ThemeLogos from "../src/Welcome/ThemeLogos";

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'TTNorms', sans-serif;
  }
`;

const ThemeStyles = styled.div`
  .container {
    margin: 80px 0 50px 110px;
    max-width: 600px;
  }

  .title {
    font-size: 22px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.91;
    letter-spacing: normal;
    color: #898988;
    text-transform: uppercase;
  }
`;

storiesOf("Welcome", module)
  .add("Principles", () => <PrinciplesPage />)
  .add("Vision & Ethos", () => <EthosPage />)
  .add("Colors", () => (
    <ThemeStyles>
      <ThemeColors />
    </ThemeStyles>
  ))
  .add("Typography", () => (
    <ThemeStyles>
      <ThemeTypography />
    </ThemeStyles>
  ))
  .add("Logos", () => (
    <ThemeStyles>
      <ThemeLogos />
    </ThemeStyles>
  ));
