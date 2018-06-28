import React from 'react';
import FlexGrid from '../grid/FlexGrid';
import Col from '../grid/Col';
import WelcomeStyles from './welcome.style';
import header from '../../public/images/header.png';

export default function PrinciplesPage() {
  return (
    <WelcomeStyles>
      <img src={header} alt="Vivy relax header" width="100%" />
      <FlexGrid>
        <Col>
          <div className="container">
            <h1>Principles</h1>
            <div className="box">
              <h2>Unified</h2>
              <p>
                Each piece is part of a greater whole and should contribute
                positively to the system at scale. There should be no isolated
                features or outliers.
              </p>
            </div>
            <div className="box">
              <h2>Universal</h2>
              <p>
                Vivy is used by a wide global community. Our products and visual
                language should be welcoming and accessible.
              </p>
            </div>
            <div className="box">
              <h2>Iconic</h2>
              <p>
                We’re focused when it comes to both design and functionality.
                Our work should speak boldly and clearly to this focus.
              </p>
            </div>
            <div className="box">
              <h2>Conversational</h2>
              <p>
                Our use of motion breathes life into our products, and allows us
                to communicate with users in easily understood ways.
              </p>
            </div>
          </div>
        </Col>
      </FlexGrid>
    </WelcomeStyles>
  );
}
