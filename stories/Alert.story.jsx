import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Alert } from "../src/index";

const LayoutStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 100px;
`;

storiesOf("Alert", module)
  .add("success", () => (
    <LayoutStyles>
      <Alert type="success">Good things happened!</Alert>
    </LayoutStyles>
  ))
  .add("warning", () => (
    <LayoutStyles>
      <Alert type="warning">Bad things happened!</Alert>
    </LayoutStyles>
  ));
