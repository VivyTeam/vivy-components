import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";
import {FlexRow, FlexColumn} from "../src/index";

const Box = styled.div`
  background-color: #04d4bf;
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
      <FlexRow around>
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
      <FlexRow between>
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
      <FlexRow start>
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
      <FlexRow center>
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
      <FlexRow end>
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
        <FlexRow around style={{ marginBottom: 10 }}>
          <FlexColumn col={1} offset={11}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow around style={{ marginBottom: 10 }}>
          <FlexColumn col={2} offset={10}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow around style={{ marginBottom: 10 }}>
          <FlexColumn col={3} offset={9}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow around style={{ marginBottom: 10 }}>
          <FlexColumn col={4} offset={8}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow around style={{ marginBottom: 10 }}>
          <FlexColumn col={5} offset={7}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow around style={{ marginBottom: 10 }}>
          <FlexColumn col={6} offset={6}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow around style={{ marginBottom: 10 }}>
          <FlexColumn col={7} offset={5}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow around style={{ marginBottom: 10 }}>
          <FlexColumn col={8} offset={4}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow around style={{ marginBottom: 10 }}>
          <FlexColumn col={9} offset={3}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow around style={{ marginBottom: 10 }}>
          <FlexColumn col={10} offset={2}>
            <Box />
          </FlexColumn>
        </FlexRow>
        <FlexRow around style={{ marginBottom: 10 }}>
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
      <FlexRow top>
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
      <FlexRow middle>
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
      <FlexRow bottom>
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
      <FlexRow reverse center>
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
      <FlexRow center>
        <FlexColumn col={3}>
          <FlexRow column center>
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
  );
