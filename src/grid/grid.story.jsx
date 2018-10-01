import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import ExampleStyles from "./example.style";
import { FlexGrid, Row, Col } from "../index";

setAddon(JSXAddon);

storiesOf("Flex Grid", module).addWithJSX("Simple Grid", () => (
  <ExampleStyles>
    <div className="example-container">
      <h4>Grid</h4>
      <FlexGrid>
        <div className="example">
          <h4>Row</h4>
          <Row className="example-grid">
            <div className="example-box">Box 1</div>
            <div className="example-box">Box 2</div>
            <div className="example-box">Box 3</div>
          </Row>
        </div>
        <div className="example">
          <h4>Column</h4>
          <Col>
            <div className="example-box">Box 1</div>
            <div className="example-box">Box 2</div>
            <div className="example-box">Box 3</div>
          </Col>
        </div>
      </FlexGrid>
    </div>
  </ExampleStyles>
));
