import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Footer, Row, Col } from "../src/index";

const Container = styled.div`
  margin-bottom: 35px;
  margin-top: 35px;
`;

const Anchor = styled.a`
  padding: 0 16px;
  border-right: 1px solid #cdcdcd;
`;
const AnchorLast = styled.a`
  padding-left: 16px;
`;

storiesOf("Footer", module)
  .add(
    "default",
    withInfo("The raw Footer component")(() => (
      <Footer>
        <Container>
          <Row position="center" verticalAlign="middle">
            <Col lg={0}>
              <Anchor
                href="https://www.vivy.com/impressum"
                target="_"
                rel="noopener noreferrer"
              >
                Impressum
              </Anchor>
            </Col>
            <Col lg={0}>
              <Anchor
                href="https://www.vivy.com/nutzungsbedingungen"
                target="_"
                rel="noopener noreferrer"
              >
                AGB
              </Anchor>
            </Col>
            <Col lg={0}>
              <AnchorLast
                href="https://www.vivy.com/datenschutz"
                target="_"
                rel="noopener noreferrer"
              >
                Datenschutz
              </AnchorLast>
            </Col>
          </Row>
        </Container>
      </Footer>
    ))
  )
  .add(
    "position start",
    withInfo("Position start")(() => (
      <Footer>
        <Container>
          <Row position="start">
            <Col lg={0}>
              <Anchor
                href="https://www.vivy.com/impressum"
                target="_"
                rel="noopener noreferrer"
              >
                Impressum
              </Anchor>
            </Col>
            <Col lg={0}>
              <Anchor
                href="https://www.vivy.com/nutzungsbedingungen"
                target="_"
                rel="noopener noreferrer"
              >
                AGB
              </Anchor>
            </Col>
            <Col lg={0}>
              <AnchorLast
                href="https://www.vivy.com/datenschutz"
                target="_"
                rel="noopener noreferrer"
              >
                Datenschutz
              </AnchorLast>
            </Col>
          </Row>
        </Container>
      </Footer>
    ))
  )
  .add(
    "position end",
    withInfo("position end")(() => (
      <Footer>
        <Container>
          <Row position="end">
            <Col lg={0}>
              <Anchor
                href="https://www.vivy.com/impressum"
                target="_"
                rel="noopener noreferrer"
              >
                Impressum
              </Anchor>
            </Col>
            <Col lg={0}>
              <Anchor
                href="https://www.vivy.com/nutzungsbedingungen"
                target="_"
                rel="noopener noreferrer"
              >
                AGB
              </Anchor>
            </Col>
            <Col lg={0}>
              <AnchorLast
                href="https://www.vivy.com/datenschutz"
                target="_"
                rel="noopener noreferrer"
              >
                Datenschutz
              </AnchorLast>
            </Col>
          </Row>
        </Container>
      </Footer>
    ))
  );
