import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { AlertSmall } from "../src/index";

const LayoutStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 100px;
`;

storiesOf("AlertSmall", module)
  .add("success", () => (
    <LayoutStyles>
      <AlertSmall type="success">Good things happened!</AlertSmall>
    </LayoutStyles>
  ))
  .add("warning", () => (
    <LayoutStyles>
      <AlertSmall type="warning">Bad things happened!</AlertSmall>
    </LayoutStyles>
  ));
