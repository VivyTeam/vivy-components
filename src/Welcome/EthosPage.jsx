import React from "react";
import { Row, Col } from "../index";

export default function WelcomePage() {
  return (
    <Row position="center" fullWidth>
      <Col lg={8}>
        <h1>Vision &amp; Ethos</h1>
        <p>
          The styleguide and component library aims to bring engineering and
          design together.
        </p>
        <p>
          Components tie into our frontend infrastructure to empower a design
          first approach.
        </p>
        <p>
          With this philosophy we aim to have consistent and accessible design
          that unifies our features into a greater whole.
        </p>
      </Col>
    </Row>
  );
}
