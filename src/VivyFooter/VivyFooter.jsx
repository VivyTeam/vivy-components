import React from "react";
import Styles from "./vivyFooter.style";
import { Col, Row, Footer } from "../index";

export default function VivyFooter() {
  return (
    <Footer>
      <Styles>
        <Row position="center" verticalAlign="middle">
          <Col col={0} style={{ padding: 0 }}>
            <a
              className="anchor-1"
              href="https://www.vivy.com/impressum"
              target="_"
              rel="noopener noreferrer"
            >
              Impressum
            </a>
          </Col>
          <Col col={0} style={{ padding: 0 }}>
            <a
              className="anchor-2"
              href="https://www.vivy.com/nutzungsbedingungen"
              target="_"
              rel="noopener noreferrer"
            >
              AGB
            </a>
          </Col>
          <Col col={0} style={{ padding: 0 }}>
            <a
              className="anchor-3"
              href="https://www.vivy.com/datenschutz"
              target="_"
              rel="noopener noreferrer"
            >
              Datenschutz
            </a>
          </Col>
        </Row>
      </Styles>
    </Footer>
  );
}
