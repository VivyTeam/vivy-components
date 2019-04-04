import styled from "styled-components";
import React from "react";
import ColorBox from "./ColorBox";
import { Row, Col, Colors } from "..";

const Styles = styled.div`
  margin-top: 20px;

  color: ${Colors.textPrimary};

  h2 {
    margin-left: 20px;
  }

  .color-box {
    cursor: pointer;
    outline: none;
    text-align: center;
    border: solid 1px ${Colors.divider};
    width: 200px;
    padding: 25px 0;
    border-radius: 4px;
  }

  .color-box .copy {
    cursor: pointer;
    font-size: 20px;
    visibility: hidden;
    opacity: 0;
    padding: 4px;
    background-color: rgba(245, 245, 245, 0.6);
    transition: visibility 0s, opacity 0.2s linear;
  }

  .color-box:hover .copy {
    visibility: visible;
    opacity: 1;
  }

  .color-description {
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
  }

  .color-name {
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 24px;
  }
`;

export default function ThemeColors() {
  return (
    <Styles>
      <Row space="around">
        {Object.keys(Colors).map(name => (
          <Col lg={0} key={name}>
            <ColorBox description={name} color={Colors[name]} />
          </Col>
        ))}
      </Row>
    </Styles>
  );
}
