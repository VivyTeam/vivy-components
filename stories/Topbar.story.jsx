import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Topbar } from "../src/index";
import logo from "../public/images/logo.svg";

const LayoutStyles = styled.div`
  width: 80%;
  margin: 0 auto;

  .logo {
    width: 93px;
    height: 63px;
  }

  .layout-body {
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

storiesOf("Topbar", module).add(
  "default",
  () => (
    <LayoutStyles>
      <Topbar>
        <a
          className="link"
          href="https://www.vivy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src={logo} alt="Vivy Logo" />
        </a>
      </Topbar>
    </LayoutStyles>
  ),
  { info: "The raw topbar component" }
);
