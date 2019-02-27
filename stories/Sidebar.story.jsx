import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Sidebar } from "../src/index";

const LayoutStyles = styled.div`
  height: 500px;
`;

storiesOf("Sidebar", module)
  .addDecorator(storyFn => <LayoutStyles>{storyFn()}</LayoutStyles>)
  .add("basic", () => (
    <Sidebar>
      <Sidebar.Item active iconName="documents">
        Documents
      </Sidebar.Item>
      <Sidebar.Item iconName="share-with-user">Patients</Sidebar.Item>
      <Sidebar.Item iconName="invoice">Invoices</Sidebar.Item>
    </Sidebar>
  ));
