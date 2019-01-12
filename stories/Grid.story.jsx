import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { Row, Col } from "../src/index";

const Box = styled.div`
  -webkit-box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  margin: 2px;
  padding: 1em 1em;
  border: 1px solid #01a1a1;
  background-color: #b3e1e5;
  flex: 1;
`;

const BoxWhite = styled.div`
  -webkit-box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  margin: 2px;
  padding: 1em 1em;
  border: 1px solid #01a1a1;
  background-color: #fff;
  flex: 1;
`;

storiesOf("Grid", module)
  .add(
    "default width",
    () => (
      <Row>
        <Col lg={12}>
          <Box />
        </Col>
      </Row>
    ),
    {
      info:
        "The Row would have the default maximum width of the column which is 960px"
    }
  )
  .add(
    "full width",
    () => (
      <Row fullWidth>
        <Col lg={12}>
          <Box />
        </Col>
      </Row>
    ),
    { info: "The Row would take the full width of the screen" }
  )
  .add(
    "responsive column sizes",
    () => (
      <Row position="center">
        <Col xs={10} sm={3} md={7} lg={3}>
          <Box />
        </Col>
        <Col xs={10} sm={3} md={8} lg={3}>
          <BoxWhite />
        </Col>
        <Col xs={10} sm={3} md={7} lg={3}>
          <Box />
        </Col>
      </Row>
    ),
    {
      info: "The Row would have different size of columns for different devices"
    }
  )
  .add(
    "hidden column only on small devices",
    () => (
      <Row position="center">
        <Col xs={7} sm={12} md={7} lg={3}>
          <Box />
        </Col>
        <Col xs={7} sm="hide" md={10} lg={3}>
          <BoxWhite />
        </Col>
        <Col xs={7} sm={12} md={7} lg={3}>
          <Box />
        </Col>
      </Row>
    ),
    { info: "Hides the middle column on small devices by parsing sm='hide'" }
  )
  .add("space around", () => (
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
  .add("space evenly", () => (
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
  .add("space between", () => (
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
  .add("position start", () => (
    <Row position="start">
      <Col lg={3}>
        <Box />
      </Col>
      <Col lg={3}>
        <Box />
      </Col>
    </Row>
  ))
  .add("position center", () => (
    <Row position="center">
      <Col lg={3}>
        <Box />
      </Col>
      <Col lg={3}>
        <Box />
      </Col>
    </Row>
  ))
  .add("position end", () => (
    <Row position="end">
      <Col lg={3}>
        <Box />
      </Col>
      <Col lg={3}>
        <Box />
      </Col>
    </Row>
  ))
  .add(
    "responsive position end",
    () => (
      <Row positionMd="end">
        <Col lg={3}>
          <Box />
        </Col>
        <Col lg={3}>
          <BoxWhite />
        </Col>
        <Col lg={3}>
          <Box />
        </Col>
      </Row>
    ),
    {
      info:
        "Changes the position of the row to 'end' for medium devices and all the smaller than medium devices"
    }
  )
  .add("offset", () => (
    <div>
      <Row space="around">
        <Col lg={1} offset={11}>
          <Box />
        </Col>
      </Row>
      <Row space="around">
        <Col lg={2} offset={10}>
          <Box />
        </Col>
      </Row>
      <Row space="around">
        <Col lg={3} offset={9}>
          <Box />
        </Col>
      </Row>
      <Row space="around">
        <Col lg={4} offset={8}>
          <Box />
        </Col>
      </Row>
      <Row space="around">
        <Col lg={5} offset={7}>
          <Box />
        </Col>
      </Row>
      <Row space="around">
        <Col lg={6} offset={6}>
          <Box />
        </Col>
      </Row>
      <Row space="around">
        <Col lg={7} offset={5}>
          <Box />
        </Col>
      </Row>
      <Row space="around">
        <Col lg={8} offset={4}>
          <Box />
        </Col>
      </Row>
      <Row space="around">
        <Col lg={9} offset={3}>
          <Box />
        </Col>
      </Row>
      <Row space="around">
        <Col lg={10} offset={2}>
          <Box />
        </Col>
      </Row>
      <Row space="around">
        <Col lg={11} offset={1}>
          <Box />
        </Col>
      </Row>
    </div>
  ))
  .add("vertical alignment top", () => (
    <BoxWhite style={{ height: 300 }}>
      <Row verticalAlign="top">
        <Col lg={12}>
          <Box />
        </Col>
      </Row>
    </BoxWhite>
  ))
  .add("vertical alignment middle", () => (
    <BoxWhite style={{ height: 300 }}>
      <Row verticalAlign="middle">
        <Col lg={12}>
          <Box />
        </Col>
      </Row>
    </BoxWhite>
  ))
  .add("vertical alignment bottom", () => (
    <BoxWhite style={{ height: 300 }}>
      <Row verticalAlign="bottom">
        <Col lg={12}>
          <Box />
        </Col>
      </Row>
    </BoxWhite>
  ))
  .add("complex vertical alignment example", () => (
    <Row>
      <Col lg={4}>
        <Box style={{ height: 300 }}>
          <Row verticalAlign="bottom">
            <Col lg={12}>
              <BoxWhite>i am on the bottom</BoxWhite>
            </Col>
          </Row>
        </Box>
      </Col>
      <Col lg={4}>
        <Box style={{ height: 300 }}>
          <Row verticalAlign="middle" stretched>
            <Col lg={12}>
              <BoxWhite>i am on the middle</BoxWhite>
            </Col>
          </Row>
        </Box>
      </Col>
      <Col lg={4}>
        <Box style={{ height: 300 }}>
          <Row stretched>
            <Col lg={12}>
              <BoxWhite>i am on the top</BoxWhite>
            </Col>
          </Row>
        </Box>
      </Col>
    </Row>
  ))
  .add(
    "columns in reverse order",
    () => (
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
    ),
    { info: "will reverse the columns" }
  )
  .add("column", () => (
    <Row column position="center">
      <Col lg={3}>
        <Box />
      </Col>
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
  .add("text align is on left", () => (
    <Row position="center">
      <Col lg={3}>
        <Box>1</Box>
      </Col>
      <Col lg={3}>
        <Box>2</Box>
      </Col>
      <Col lg={3}>
        <Box>3</Box>
      </Col>
    </Row>
  ))
  .add("text align is on center", () => (
    <Row position="center" textAlign="center">
      <Col lg={3}>
        <Box>1</Box>
      </Col>
      <Col lg={3}>
        <Box>2</Box>
      </Col>
      <Col lg={3}>
        <Box>3</Box>
      </Col>
    </Row>
  ))
  .add("text align is on right", () => (
    <Row position="center" textAlign="right">
      <Col lg={3}>
        <Box>1</Box>
      </Col>
      <Col lg={3}>
        <Box>2</Box>
      </Col>
      <Col lg={3}>
        <Box>3</Box>
      </Col>
    </Row>
  ))
  .add(
    "responsive text align is on right",
    () => (
      <Row position="center" textAlign="left" textAlignMd="right">
        <Col lg={3}>
          <Box>1</Box>
        </Col>
        <Col lg={3}>
          <Box>2</Box>
        </Col>
        <Col lg={3}>
          <Box>3</Box>
        </Col>
      </Row>
    ),
    {
      info:
        "Changes the position of the text alignment to 'right' for medium size devices"
    }
  )
  .add("nested rows", () => (
    <Row position="center">
      <Col center lg={10}>
        <BoxWhite>
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
        </BoxWhite>
      </Col>
    </Row>
  ));
