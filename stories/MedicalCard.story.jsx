import React from "react";
import { storiesOf } from "@storybook/react";
import { Row, Col, MedicalCard } from "../src/index";
import "../public/translations/i18n";


storiesOf("MedicalCard", module).add(
  "default",
  () => (
    <Row position="center">
      <Col lg={8}>
        <MedicalCard
          user={{
            name: "Demo User",
            dateOfBirth: "1970-01-01"
          }}
          data={{
            pregnancyDueDate: {
              data: "1970-01-01"
            },
            gender: {
              text: "Female",
              icon: "gender-female"
            },
            weight: "82",
            height: "180",
            bloodType: "A-",
            organDonor: "yes"
          }}
          lastUpdatedAt="1970-01-01"
        />
      </Col>
    </Row>
  ),
  { info: "A simple page with topbar, body, footer" }
);
