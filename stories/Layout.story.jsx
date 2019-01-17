import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { MedicalCard, Topbar, VivyFooter } from "../src/index";
import logo from "../public/images/logo.svg";
import "../public/translations/i18n";

const LayoutStyles = styled.div`
  width: 80%;
  margin: 0 auto;

  .layout-body {
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

storiesOf("Layout", module).add(
  "Simple Page",
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
      <div className="layout-body">
        <MedicalCard
          user={{
            name: "Demo User",
            dateOfBirth: "1970-01-01"
          }}
          data={{
            gender: {
              text: "Other",
              icon: "gender-other-16"
            },
            weight: "82",
            height: "180",
            bloodType: "A-"
          }}
          lastUpdatedAt="1970-01-01"
        />
      </div>
      <VivyFooter />
    </LayoutStyles>
  ),
  { info: "A simple page with topbar, body, footer" }
);
