import React from 'react';
import FlexGrid from './FlexGrid';
import Row from './Row';
import Col from './Col';
import ExampleStyles from './example.style';

const GridExample = () => (
  <ExampleStyles>
    <div className="example-container">
      <h4>Grid</h4>
      <FlexGrid>
        <div className="example">
          <h4>Row</h4>
          <Row className="example-grid">
            <div className="example-box">
              Box 1
            </div>
            <div className="example-box">
              Box 2
            </div>
            <div className="example-box">
              Box 3
            </div>
          </Row>
        </div>
        <div className="example">
          <h4>Column</h4>
          <Col>
            <div className="example-box">
            Box 1
            </div>
            <div className="example-box">
            Box 2
            </div>
            <div className="example-box">
            Box 3
            </div>
          </Col>
        </div>
      </FlexGrid>
    </div>
  </ExampleStyles>
);

export default GridExample;
