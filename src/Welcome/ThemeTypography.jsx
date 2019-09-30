import React from "../../node_modules/react";
import { Row, Col, Paragraph, Display, H1, H2, Caption, Tiny } from "../index";

import Styles from "./themeTypography.style";

export default function ThemeTypography() {
  return (
    <Styles>
      <Row position="center">
        <Col lg={8}>
          <h5>Display</h5>
          <Display>Used for Slogans</Display>
          <br />

          <h5>H1</h5>
          <H1>Heading One</H1>
          <br />

          <h5>H2</h5>
          <H2>Heading Two</H2>
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
