import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Sidebar } from "../src/index";
import logo from "../public/images/vivy_logo/logo/logo_2.svg";

const LayoutStyles = styled.div`
  height: 500px;
`;

storiesOf("Sidebar", module)
  .addDecorator(storyFn => <LayoutStyles>{storyFn()}</LayoutStyles>)
  .add("basic", () => (
    <Sidebar>
      <Sidebar.Header
        logoUrl={logo}
        logoAltText="Vivy Logo"
        href="https://vivy.com"
      >
        Vivy Pro
      </Sidebar.Header>
      <Sidebar.Link active iconName="documents" href="https://vivy.com">
        Documents
      </Sidebar.Link>
      <Sidebar.Link iconName="share-with-user" href="https://vivy.com">
        Patients
      </Sidebar.Link>
      <Sidebar.Link iconName="invoice" href="https://vivy.com">
        Invoices
      </Sidebar.Link>
    </Sidebar>
  ));
