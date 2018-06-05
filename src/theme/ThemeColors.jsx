import React from 'react';
import ThemeStyles from './theme.style';
import ColorBox from './ColorBox';
import FlexGrid from '../grid/FlexGrid';
import Row from '../grid/Row';
import Col from '../grid/Col';

const ThemeColors = () => (
  <FlexGrid>
    <ThemeStyles>
      <Col>
        <div>
          <h2>Colors</h2>
          <Row>
            <ColorBox
              description="Brand color"
              color="#04d4bf"
            />
            <ColorBox
              description="Alt brand color"
              color="#05e6c8"
            />
            <ColorBox
              description="Actionable text"
              color="#09cbb8"
            />
            <ColorBox
              description="Alert"
              color="#e94119"
            />
            <ColorBox
              description="Background"
              color="#f5f5f5"
              dark
            />
            <ColorBox
              description="Primary"
              color="#575756"
            />
            <ColorBox
              description="Secondary"
              color="#898988"
            />
            <ColorBox
              description="Hint"
              color="#bfbfbf"
            />
            <ColorBox
              description="Divider"
              color="#e0e0e0"
              dark
            />
          </Row>
        </div>
        <div>
          <h2>Gradient</h2>
          <Row >
            <ColorBox
              description="Positive"
              gradient="linear-gradient(180deg,#34de95,#14cfc1)"
            />
            <ColorBox
              description="Neutral"
              gradient="linear-gradient(180deg,#ffe071,#ffa97c)"
            />
            <ColorBox
              description="Negative"
              gradient="linear-gradient(180deg,#ff7676,#f54ea2)"
            />
            <ColorBox
              description="Inactive"
              gradient="linear-gradient(180deg,#cccbd0,#bcbbc1)"
            />
          </Row>
        </div>
      </Col>
    </ThemeStyles>
  </FlexGrid>
);

export default ThemeColors;
