import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Alert, AlertSmall } from "../src/index";

const LayoutStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 100px;
`;

storiesOf("Alerts", module)
  .add("Alert", () => (
    <LayoutStyles>
      <h1>Alerts</h1>

      <h3>type: success</h3>
      <Alert type="success">Good things happened!</Alert>

      <h3>type: warning</h3>
      <Alert type="warning">Bad things happened!</Alert>
    </LayoutStyles>
  ))
  .add("AlertSmall", () => (
    <LayoutStyles>
      <h1>AlterSmalls</h1>

      <h3>type: success</h3>
      <AlertSmall type="success">Good things happened!</AlertSmall>

      <h3>type: warning</h3>
      <AlertSmall type="warning">Bad things happened!</AlertSmall>
    </LayoutStyles>
  ));
