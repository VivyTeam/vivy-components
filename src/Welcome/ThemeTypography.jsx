import React from "react";
import { Row, Col, Paragraph, Caption, Tiny } from "../index";

import Styles from "./themeTypography.style";

export default function ThemeTypography() {
  return (
    <Styles>
      <Row position="center">
        <Col lg={8}>
          <h5>H1</h5>
          <h1>Heading One</h1>
          <br />
          <h5>H2</h5>
          <h2>Heading Two</h2>
          <br />

          <h5>Paragraph</h5>
          <Paragraph>
            We design products to be open, honest and re­liable. Their
            interfaces are channels of truth which never obscure our intentions.
          </Paragraph>
          <br />

          <h5>Caption</h5>
          <Caption>
            We design products to be open, honest and re­liable. Their
            interfaces are channels of truth which never obscure our intentions.
          </Caption>
          <br />

          <h5>Tiny</h5>
          <Tiny>
            We design products to be open, honest and re­liable. Their
            interfaces are channels of truth which never obscure our intentions.
          </Tiny>
          <br />

          <h5>Anchor</h5>
          <a href="https://www.vivy.com/" rel="noopener noreferrer">
            This is a link
          </a>
        </Col>
      </Row>
    </Styles>
  );
}
