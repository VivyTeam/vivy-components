import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";
import { FlexRow, FlexColumn } from "../src/index";

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
      <FlexRow>
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
      </FlexRow>
    ))
  )
  .addWithJSX(
    "around",
    withInfo()(() => (
      <FlexRow space="around">
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
      </FlexRow>
    ))
  )
  .addWithJSX(
    "evenly",
    withInfo()(() => (
      <FlexRow space="evenly">
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
      </FlexRow>
    ))
  )
  .addWithJSX(
    "between",
    withInfo()(() => (
      <FlexRow space="between">
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
      </FlexRow>
    ))
  )
  .addWithJSX(
    "start",
    withInfo()(() => (
      <FlexRow position="start">
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
      </FlexRow>
    ))
  )
  .addWithJSX(
    "center",
    withInfo()(() => (
      <FlexRow position="center">
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
      </FlexRow>
    ))
  )
  .addWithJSX(
    "end",
    withInfo()(() => (
      <FlexRow position="end">
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
        <FlexColumn col={3}>
          <Box />
        </FlexColumn>
      </FlexRow>
    ))
  )
  .addWithJSX(
    "offset",
    withInfo()(() => (
      <div>
        <FlexRow space="around" style={{ marginBottom: 10 }}>
          <FlexColumn col={1} offset={11}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow space="around" style={{ marginBottom: 10 }}>
          <FlexColumn col={2} offset={10}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow space="around" style={{ marginBottom: 10 }}>
          <FlexColumn col={3} offset={9}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow space="around" style={{ marginBottom: 10 }}>
          <FlexColumn col={4} offset={8}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow space="around" style={{ marginBottom: 10 }}>
          <FlexColumn col={5} offset={7}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow space="around" style={{ marginBottom: 10 }}>
          <FlexColumn col={6} offset={6}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow space="around" style={{ marginBottom: 10 }}>
          <FlexColumn col={7} offset={5}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow space="around" style={{ marginBottom: 10 }}>
          <FlexColumn col={8} offset={4}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow space="around" style={{ marginBottom: 10 }}>
          <FlexColumn col={9} offset={3}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow space="around" style={{ marginBottom: 10 }}>
          <FlexColumn col={10} offset={2}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow space="around" style={{ marginBottom: 10 }}>
          <FlexColumn col={11} offset={1}>
            <Box />
          </FlexColumn>
        </FlexRow>
      </div>
    ))
  )
  .addWithJSX(
    "top",
    withInfo()(() => (
      <FlexRow verticalAlign="top">
        <FlexColumn col={6}>
          <Box style={{ height: 200 }} />
        </FlexColumn>
        <FlexColumn col={6}>
          <Box />
        </FlexColumn>
      </FlexRow>
    ))
  )
  .addWithJSX(
    "middle",
    withInfo()(() => (
      <FlexRow verticalAlign="middle">
        <FlexColumn col={6}>
          <Box style={{ height: 200 }} />
        </FlexColumn>
        <FlexColumn col={6}>
          <Box />
        </FlexColumn>
      </FlexRow>
    ))
  )
  .addWithJSX(
    "bottom",
    withInfo()(() => (
      <FlexRow verticalAlign="bottom">
        <FlexColumn col={6}>
          <Box style={{ height: 200 }} />
        </FlexColumn>
        <FlexColumn col={6}>
          <Box />
        </FlexColumn>
      </FlexRow>
    ))
  )
  .addWithJSX(
    "reverse",
    withInfo()(() => (
      <FlexRow reverse position="center">
        <FlexColumn col={3}>
          <Box>1</Box>
        </FlexColumn>
        <FlexColumn col={3}>
          <Box>2</Box>
        </FlexColumn>
        <FlexColumn col={3}>
          <Box>3</Box>
        </FlexColumn>
        <FlexColumn col={3}>
          <Box>4</Box>
        </FlexColumn>
      </FlexRow>
    ))
  )
  .addWithJSX(
    "column",
    withInfo()(() => (
      <FlexRow position="center">
        <FlexColumn col={3}>
          <FlexRow column position="center">
            <FlexColumn>
              <Box>1</Box>
            </FlexColumn>
            <FlexColumn>
              <Box>2</Box>
            </FlexColumn>
            <FlexColumn>
              <Box>3</Box>
            </FlexColumn>
            <FlexColumn>
              <Box>4</Box>
            </FlexColumn>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    ))
  )
  .addWithJSX(
    "nested",
    withInfo()(() => (
      <FlexRow position="center">
        <FlexColumn center col={6}>
          <BoxYellow>
            <FlexRow position="center">
              <FlexColumn col={1}>
                <Box>1</Box>
              </FlexColumn>
              <FlexColumn col={1}>
                <Box>2</Box>
              </FlexColumn>
              <FlexColumn col={1}>
                <Box>3</Box>
              </FlexColumn>
              <FlexColumn col={1}>
                <Box>4</Box>
              </FlexColumn>
              <FlexColumn col={1}>
                <Box>5</Box>
              </FlexColumn>
              <FlexColumn col={1}>
                <Box>6</Box>
              </FlexColumn>
              <FlexColumn col={1}>
                <Box>7</Box>
              </FlexColumn>
              <FlexColumn col={1}>
                <Box>8</Box>
              </FlexColumn>
              <FlexColumn col={1}>
                <Box>9</Box>
              </FlexColumn>
              <FlexColumn col={1}>
                <Box>10</Box>
              </FlexColumn>
              <FlexColumn col={1}>
                <Box>11</Box>
              </FlexColumn>
              <FlexColumn col={1}>
                <Box>12</Box>
              </FlexColumn>
            </FlexRow>
          </BoxYellow>
        </FlexColumn>
      </FlexRow>
    ))
  );
