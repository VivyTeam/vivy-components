import React from "react";
import Styles from "./footer.style";
import { Col, Row, Footer } from "../index";

export default function VivyFooter() {
  return (
    <div style={{ marginTop: 100 }}>
      <Footer>
        <Styles>
          <Row fullWidth>
            <Col lg={12}>
              <Row position="center" verticalAlign="middle">
                <Col lg={0}>
                  <a
                    className="anchor"
                    href="https://www.vivy.com/impressum"
                    target="_"
                    rel="noopener noreferrer"
                  >
                    Impressum
                  </a>
                </Col>
                <Col lg={0}>
                  <a
                    className="anchor"
                    href="https://www.vivy.com/nutzungsbedingungen"
                    target="_"
                    rel="noopener noreferrer"
                  >
                    AGB
                  </a>
                </Col>
                <Col lg={0}>
                  <a
                    className="anchor last"
                    href="https://www.vivy.com/datenschutz"
                    target="_"
                    rel="noopener noreferrer"
                  >
                    Datenschutz
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Styles>
      </Footer>
    </div>
  );
}
