import React from "react";
import { storiesOf } from "@storybook/react";
import { MedicalCard, Topbar, VivyFooter, Row, Col } from "../src/index";
import logo from "../public/images/logo.svg";
import "../public/translations/i18n";

storiesOf("Layout", module).add(
  "Simple Page",
  () => (
    <Row position="center" fullWidth>
      <Col lg={12}>
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
        <Row position="center">
          <Col lg={8} style={{ margin: 100 }}>
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
          </Col>
        </Row>
        <VivyFooter />
      </Col>
    </Row>
  ),
  { info: "A simple page with topbar, body, footer" }
);
