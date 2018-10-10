import React from "react";
import { storiesOf } from "@storybook/react";
import PrinciplesPage from "./PrinciplesPage";
import EthosPage from "./EthosPage";

storiesOf("Welcome", module)
  .add("Principles", () => <PrinciplesPage />)
  .add("Vision & Ethos", () => <EthosPage />);
