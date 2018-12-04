import React from "react";
import ThemeStyles from "./themeColors.style";
import ColorBox from "./ColorBox";
import { Row, Col } from "../../src";

export default function ThemeColors() {
  return (
    <ThemeStyles>
      <Row>
        <Col>
          <h2>Colors</h2>
        </Col>
      </Row>
      <Row position="center" space="around" textAlign="center">
        <Col lg={0}>
          <ColorBox description="Brand color" color="#04d4bf" />
        </Col>
        <Col lg={0}>
          <ColorBox description="Alt brand color" color="#05e6c8" />
        </Col>
        <Col lg={0}>
          <ColorBox description="Actionable text" color="#09cbb8" />
        </Col>
        <Col lg={0}>
          <ColorBox description="Alert" color="#e94119" />
        </Col>
        <Col lg={0}>
          <ColorBox description="Background" color="#f5f5f5" dark />
        </Col>
        <Col lg={0}>
          <ColorBox description="Primary" color="#353f41" />
        </Col>
        <Col lg={0}>
          <ColorBox description="Secondary" color="#7b7b7b" />
        </Col>
        <Col lg={0}>
          <ColorBox description="Hint" color="#bfbfbf" />
        </Col>
        <Col lg={0}>
          <ColorBox description="Divider" color="#e0e0e0" dark />
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Gradient</h2>
        </Col>
      </Row>
      <Row position="center" space="around" textAlign="center">
        <Col lg={0}>
          <ColorBox
            description="Positive"
            gradient="linear-gradient(180deg,#34de95,#14cfc1)"
          />
        </Col>
        <Col lg={0}>
          <ColorBox
            description="Neutral"
            gradient="linear-gradient(180deg,#ffe071,#ffa97c)"
          />
        </Col>
        <Col lg={0}>
          <ColorBox
            description="Negative"
            gradient="linear-gradient(180deg,#ff7676,#f54ea2)"
          />
        </Col>
        <Col lg={0}>
          <ColorBox
            description="Inactive"
            gradient="linear-gradient(180deg,#cccbd0,#bcbbc1)"
          />
        </Col>
      </Row>
    </ThemeStyles>
  );
}
