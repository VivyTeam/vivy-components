import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";
import Row from "../src/FlexGrid/FlexRow/index";
import Col from "../src/FlexGrid/FlexColumn/index";

const Box = styled.div`
  background-color: #04d4bf;
  height: 50px;
`;

storiesOf("FlexGrid", module)
  .addWithJSX(
    "default",
    withInfo()(() => (
      <Row>
        <Col col={3}>
          <Box />
        </Col>
        <Col col={3}>
          <Box />
        </Col>
        <Col col={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "around",
    withInfo()(() => (
      <Row around>
        <Col col={3}>
          <Box />
        </Col>
        <Col col={3}>
          <Box />
        </Col>
        <Col col={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "between",
    withInfo()(() => (
      <Row between>
        <Col col={3}>
          <Box />
        </Col>
        <Col col={3}>
          <Box />
        </Col>
        <Col col={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "start",
    withInfo()(() => (
      <Row start>
        <Col col={3}>
          <Box />
        </Col>
        <Col col={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "center",
    withInfo()(() => (
      <Row center>
        <Col col={3}>
          <Box />
        </Col>
        <Col col={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "end",
    withInfo()(() => (
      <Row end>
        <Col col={3}>
          <Box />
        </Col>
        <Col col={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "offset",
    withInfo()(() => (
      <div>
        <Row around style={{ marginBottom: 10 }}>
          <Col col={1} offset={11}>
            <Box />
          </Col>
        </Row>
        <Row around style={{ marginBottom: 10 }}>
          <Col col={2} offset={10}>
            <Box />
          </Col>
        </Row>
        <Row around style={{ marginBottom: 10 }}>
          <Col col={3} offset={9}>
            <Box />
          </Col>
        </Row>
        <Row around style={{ marginBottom: 10 }}>
          <Col col={4} offset={8}>
            <Box />
          </Col>
        </Row>
        <Row around style={{ marginBottom: 10 }}>
          <Col col={5} offset={7}>
            <Box />
          </Col>
        </Row>
        <Row around style={{ marginBottom: 10 }}>
          <Col col={6} offset={6}>
            <Box />
          </Col>
        </Row>
        <Row around style={{ marginBottom: 10 }}>
          <Col col={7} offset={5}>
            <Box />
          </Col>
        </Row>
        <Row around style={{ marginBottom: 10 }}>
          <Col col={8} offset={4}>
            <Box />
          </Col>
        </Row>
        <Row around style={{ marginBottom: 10 }}>
          <Col col={9} offset={3}>
            <Box />
          </Col>
        </Row>
        <Row around style={{ marginBottom: 10 }}>
          <Col col={10} offset={2}>
            <Box />
          </Col>
        </Row>
        <Row around style={{ marginBottom: 10 }}>
          <Col col={11} offset={1}>
            <Box />
          </Col>
        </Row>
      </div>
    ))
  )
  .addWithJSX(
    "top",
    withInfo()(() => (
      <Row top>
        <Col col={6}>
          <Box style={{ height: 200 }} />
        </Col>
        <Col col={6}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "middle",
    withInfo()(() => (
      <Row middle>
        <Col col={6}>
          <Box style={{ height: 200 }} />
        </Col>
        <Col col={6}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "bottom",
    withInfo()(() => (
      <Row bottom>
        <Col col={6}>
          <Box style={{ height: 200 }} />
        </Col>
        <Col col={6}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "reverse",
    withInfo()(() => (
      <Row reverse center>
        <Col col={3}>
          <Box>1</Box>
        </Col>
        <Col col={3}>
          <Box>2</Box>
        </Col>
        <Col col={3}>
          <Box>3</Box>
        </Col>
        <Col col={3}>
          <Box>4</Box>
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "column",
    withInfo()(() => (
      <Row center>
        <Col col={3}>
          <Row column center>
            <Col>
              <Box>1</Box>
            </Col>
            <Col>
              <Box>2</Box>
            </Col>
            <Col>
              <Box>3</Box>
            </Col>
            <Col>
              <Box>4</Box>
            </Col>
          </Row>
        </Col>
      </Row>
    ))
  );
