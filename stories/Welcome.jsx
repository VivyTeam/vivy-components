import React from "react";
import { storiesOf } from "@storybook/react";
import PrinciplesPage from "../src/Welcome/PrinciplesPage";
import EthosPage from "../src/Welcome/EthosPage";
import ThemeColors from "../src/Welcome/ThemeColors";
import ThemeTypography from "../src/Welcome/ThemeTypography";
import ThemeLogos from "../src/Welcome/ThemeLogos";

storiesOf("Welcome", module)
  .add("Principles", () => <PrinciplesPage />)
  .add("Vision & Ethos", () => <EthosPage />)
  .add("Typography", () => <ThemeTypography />)
  .add("Color Palette", () => <ThemeColors />)
  .add("Logos", () => <ThemeLogos />);
