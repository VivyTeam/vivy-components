import React from "react";
import ThemeStyles from "./themeColors.style";
import ColorBox from "./ColorBox";
import { Row, Col } from "../../src/index";
import Colors from "../Colors";

export default function ThemeColors() {
  return (
    <ThemeStyles>
      <div className="color-container">
        <h2>Colors</h2>
        <Row position="center">
          {Object.keys(Colors).map(index => {
            return (
              <Col col={3}>
                <ColorBox description="Brand color" color={Colors[index]} />
              </Col>
            );
          })}
        </Row>

        <h2>Gradient</h2>
        <Row position="center">
          <Col col={3}>
            <ColorBox
              description="Positive"
              gradient="linear-gradient(180deg,#34de95,#14cfc1)"
            />
          </Col>
          <Col col={3}>
            <ColorBox
              description="Neutral"
              gradient="linear-gradient(180deg,#ffe071,#ffa97c)"
            />
          </Col>
          <Col col={3}>
            <ColorBox
              description="Negative"
              gradient="linear-gradient(180deg,#ff7676,#f54ea2)"
            />
          </Col>
          <Col col={3}>
            <ColorBox
              description="Inactive"
              gradient="linear-gradient(180deg,#cccbd0,#bcbbc1)"
            />
          </Col>
        </Row>
      </div>
    </ThemeStyles>
  );
}
