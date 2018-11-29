import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";
import { Row, Col } from "../src/index";

const OffsetGrid = styled.div`
  .row {
    margin-bottom: 10px;
  }
`;
const Box = styled.div`
  background-color: #04d4bf;
  height: 50px;
`;

const BoxBlue = styled.div`
  background-color: #0000ff;
  height: 50px;
`;

const BoxYellow = styled.div`
  background-color: #ffff19;
  padding: 10px;
  min-height: 50px;
`;

storiesOf("Grid", module)
  .addWithJSX(
    "default",
    withInfo()(() => (
      <Row>
        <Col lg={3}>
          <Box />
        </Col>
        <Col lg={3}>
          <Box />
        </Col>
        <Col lg={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "responsive",
    withInfo()(() => (
      <Row position="center">
        <Col xs={10} sm={3} md={7} lg={3}>
          <Box />
        </Col>
        <Col xs={10} sm={3} md={8} lg={3}>
          <BoxBlue />
        </Col>
        <Col xs={10} sm={3} md={7} lg={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "responsive with hiden middle column on tablet devices",
    withInfo()(() => (
      <Row position="center">
        <Col xs={7} sm={12} md={7} lg={3}>
          <Box />
        </Col>
        <Col xs={7} sm="hide" md={10} lg={3}>
          <BoxBlue />
        </Col>
        <Col xs={7} sm={12} md={7} lg={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "around",
    withInfo()(() => (
      <Row space="around">
        <Col lg={3}>
          <Box />
        </Col>
        <Col lg={3}>
          <Box />
        </Col>
        <Col lg={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "evenly",
    withInfo()(() => (
      <Row space="evenly">
        <Col lg={3}>
          <Box />
        </Col>
        <Col lg={3}>
          <Box />
        </Col>
        <Col lg={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "between",
    withInfo()(() => (
      <Row space="between">
        <Col lg={3}>
          <Box />
        </Col>
        <Col lg={3}>
          <Box />
        </Col>
        <Col lg={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "start",
    withInfo()(() => (
      <Row position="start">
        <Col lg={3}>
          <Box />
        </Col>
        <Col lg={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "center",
    withInfo()(() => (
      <Row position="center">
        <Col lg={3}>
          <Box />
        </Col>
        <Col lg={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "end",
    withInfo()(() => (
      <Row position="end">
        <Col lg={3}>
          <Box />
        </Col>
        <Col lg={3}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "offset",
    withInfo()(() => (
      <OffsetGrid>
        <Row space="around">
          <Col lg={1} offsetLg={11}>
            <Box />
          </Col>
        </Row>
        <Row space="around">
          <Col lg={2} offsetLg={10}>
            <Box />
          </Col>
        </Row>
        <Row space="around">
          <Col lg={3} offsetLg={9}>
            <Box />
          </Col>
        </Row>
        <Row space="around">
          <Col lg={4} offsetLg={8}>
            <Box />
          </Col>
        </Row>
        <Row space="around">
          <Col lg={5} offsetLg={7}>
            <Box />
          </Col>
        </Row>
        <Row space="around">
          <Col lg={6} offsetLg={6}>
            <Box />
          </Col>
        </Row>
        <Row space="around">
          <Col lg={7} offsetLg={5}>
            <Box />
          </Col>
        </Row>
        <Row space="around">
          <Col lg={8} offsetLg={4}>
            <Box />
          </Col>
        </Row>
        <Row space="around">
          <Col lg={9} offsetLg={3}>
            <Box />
          </Col>
        </Row>
        <Row space="around">
          <Col lg={10} offsetLg={2}>
            <Box />
          </Col>
        </Row>
        <Row space="around">
          <Col lg={11} offsetLg={1}>
            <Box />
          </Col>
        </Row>
      </OffsetGrid>
    ))
  )
  .addWithJSX(
    "top",
    withInfo()(() => (
      <Row verticalAlign="top">
        <Col lg={6}>
          <Box style={{ height: 200 }} />
        </Col>
        <Col lg={6}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "middle",
    withInfo()(() => (
      <Row verticalAlign="middle">
        <Col lg={6}>
          <Box style={{ height: 200 }} />
        </Col>
        <Col lg={6}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "bottom",
    withInfo()(() => (
      <Row verticalAlign="bottom">
        <Col lg={6}>
          <Box style={{ height: 200 }} />
        </Col>
        <Col lg={6}>
          <Box />
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "reverse",
    withInfo()(() => (
      <Row reverse position="center">
        <Col lg={3}>
          <Box>1</Box>
        </Col>
        <Col lg={3}>
          <Box>2</Box>
        </Col>
        <Col lg={3}>
          <Box>3</Box>
        </Col>
        <Col lg={3}>
          <Box>4</Box>
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "column",
    withInfo()(() => (
      <Row column position="center">
        <Col lg={3}>
          <Box>1</Box>
        </Col>
        <Col lg={3}>
          <Box>2</Box>
        </Col>
        <Col lg={3}>
          <Box>3</Box>
        </Col>
        <Col lg={3}>
          <Box>4</Box>
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "text-align-left",
    withInfo()(() => (
      <Row position="center">
        <Col lg={3}>
          <Row column position="center">
            <Col lg={12}>
              <Box>1</Box>
            </Col>
            <Col lg={12}>
              <Box>2</Box>
            </Col>
            <Col lg={12}>
              <Box>3</Box>
            </Col>
            <Col lg={12}>
              <Box>4</Box>
            </Col>
          </Row>
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "text-align-center",
    withInfo()(() => (
      <Row position="center">
        <Col lg={3}>
          <Row column position="center" textAlign="center">
            <Col lg={12}>
              <Box>1</Box>
            </Col>
            <Col lg={12}>
              <Box>2</Box>
            </Col>
            <Col lg={12}>
              <Box>3</Box>
            </Col>
            <Col lg={12}>
              <Box>4</Box>
            </Col>
          </Row>
        </Col>
      </Row>
    ))
  )
  .addWithJSX(
    "text-align-right",
    withInfo()(() => (
      <Row position="center">
        <Col lg={3}>
          <Row column position="center" textAlign="right">
            <Col lg={12}>
              <Box>1</Box>
            </Col>
            <Col lg={12}>
              <Box>2</Box>
            </Col>
            <Col lg={12}>
              <Box>3</Box>
            </Col>
            <Col lg={12}>
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
        <Col center lg={6}>
          <BoxYellow>
            <Row position="center">
              <Col lg={1}>
                <Box>1</Box>
              </Col>
              <Col lg={1}>
                <Box>2</Box>
              </Col>
              <Col lg={1}>
                <Box>3</Box>
              </Col>
              <Col lg={1}>
                <Box>4</Box>
              </Col>
              <Col lg={1}>
                <Box>5</Box>
              </Col>
              <Col lg={1}>
                <Box>6</Box>
              </Col>
              <Col lg={1}>
                <Box>7</Box>
              </Col>
              <Col lg={1}>
                <Box>8</Box>
              </Col>
              <Col lg={1}>
                <Box>9</Box>
              </Col>
              <Col lg={1}>
                <Box>10</Box>
              </Col>
              <Col lg={1}>
                <Box>11</Box>
              </Col>
              <Col lg={1}>
                <Box>12</Box>
              </Col>
            </Row>
          </BoxYellow>
        </Col>
      </Row>
    ))
  );
