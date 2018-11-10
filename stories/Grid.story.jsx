import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";
import { Row, Col } from "../src/index";

const Box = styled.div`
  background-color: #04d4bf;
  height: 50px;
`;

const BoxYellow = styled.div`
  background-color: #ffff19;
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
      <Row space="around">
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
    "evenly",
    withInfo()(() => (
      <Row space="evenly">
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
      <Row space="between">
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
      <Row position="start">
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
      <Row position="center">
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
      <Row position="end">
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
        <Row space="around" style={{ marginBottom: 10 }}>
          <Col col={1} offset={11}>
            <Box />
          </Col>
        </Row>
        <Row space="around" style={{ marginBottom: 10 }}>
          <Col col={2} offset={10}>
            <Box />
          </Col>
        </Row>
        <Row space="around" style={{ marginBottom: 10 }}>
          <Col col={3} offset={9}>
            <Box />
          </Col>
        </Row>
        <Row space="around" style={{ marginBottom: 10 }}>
          <Col col={4} offset={8}>
            <Box />
          </Col>
        </Row>
        <Row space="around" style={{ marginBottom: 10 }}>
          <Col col={5} offset={7}>
            <Box />
          </Col>
        </Row>
        <Row space="around" style={{ marginBottom: 10 }}>
          <Col col={6} offset={6}>
            <Box />
          </Col>
        </Row>
        <Row space="around" style={{ marginBottom: 10 }}>
          <Col col={7} offset={5}>
            <Box />
          </Col>
        </Row>
        <Row space="around" style={{ marginBottom: 10 }}>
          <Col col={8} offset={4}>
            <Box />
          </Col>
        </Row>
        <Row space="around" style={{ marginBottom: 10 }}>
          <Col col={9} offset={3}>
            <Box />
          </Col>
        </Row>
        <Row space="around" style={{ marginBottom: 10 }}>
          <Col col={10} offset={2}>
            <Box />
          </Col>
        </Row>
        <Row space="around" style={{ marginBottom: 10 }}>
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
      <Row verticalAlign="top">
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
      <Row verticalAlign="middle">
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
      <Row verticalAlign="bottom">
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
      <Row reverse position="center">
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
      <Row position="center">
        <Col col={3}>
          <Row column position="center">
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
  )
  .addWithJSX(
    "nested",
    withInfo()(() => (
      <Row position="center">
        <Col center col={6}>
          <BoxYellow>
            <Row position="center">
              <Col col={1}>
                <Box>1</Box>
              </Col>
              <Col col={1}>
                <Box>2</Box>
              </Col>
              <Col col={1}>
                <Box>3</Box>
              </Col>
              <Col col={1}>
                <Box>4</Box>
              </Col>
              <Col col={1}>
                <Box>5</Box>
              </Col>
              <Col col={1}>
                <Box>6</Box>
              </Col>
              <Col col={1}>
                <Box>7</Box>
              </Col>
              <Col col={1}>
                <Box>8</Box>
              </Col>
              <Col col={1}>
                <Box>9</Box>
              </Col>
              <Col col={1}>
                <Box>10</Box>
              </Col>
              <Col col={1}>
                <Box>11</Box>
              </Col>
              <Col col={1}>
                <Box>12</Box>
              </Col>
            </Row>
          </BoxYellow>
        </Col>
      </Row>
    ))
  );
