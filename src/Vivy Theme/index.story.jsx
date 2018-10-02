import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import ThemeColors from "./ThemeColors";
import ThemeTypography from "./ThemeTypography";
import ThemeLogos from "./ThemeLogos";

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

storiesOf("Vivy Theme", module)
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
