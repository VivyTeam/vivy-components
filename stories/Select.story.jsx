import React from "react";
import { storiesOf } from "@storybook/react";
import { Select, Row, Col } from "../src/index";

const flavourOptions = [
  { value: "vanilla", label: "Vanilla", rating: "safe" },
  { value: "chocolate", label: "Chocolate", rating: "good" },
  { value: "strawberry", label: "Strawberry", rating: "wild" },
  { value: "salted-caramel", label: "Salted Caramel", rating: "crazy" },
];

storiesOf("Select", module)
  .add("basic", () => (
    <Row style={{ margin: 2 }} fullWidth>
      <Col lg={3}>
        <Select />
      </Col>
    </Row>
  ))
  .add("with options", () => (
    <Row style={{ margin: 2 }} fullWidth>
      <Col lg={3}>
        <Select options={flavourOptions} />
      </Col>
    </Row>
  ))
  .add("with onChange func", () => (
    <Row style={{ margin: 2 }} fullWidth>
      <Col lg={3}>
        <Select
          options={flavourOptions}
          onChange={({ value, label }) =>
            // eslint-disable-next-line no-console
            console.log(`Selected value is ${value}. Label is ${label}`)
          }
        />
      </Col>
    </Row>
  ));
