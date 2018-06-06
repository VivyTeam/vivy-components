import React from 'react';
import FlexGrid from '../grid/FlexGrid';
import Col from '../grid/Col';
import WelcomeStyles from './welcome.style';

const WelcomePage = () => (
  <WelcomeStyles>
    <FlexGrid>
      <Col>
        <div className="container">
          <h1>Vision</h1>
          <p>
            This guide and component library aims to bring
            engineering and design together. These components
            will directly tie into our frontend infrastructure to
            empower a design first approach. With this philosophy we
            aim to have consistent and accessible design that unifies
            our features into a greater whole.
          </p>
          <br />
          <h1>Ethos</h1>
          <br />
          <h2 id="alt">
            Eat more fish, its healthy!
          </h2>
          <p>―DR. TAMARA RADAKOVIC</p>
          <br />
          <h2 id="alt">
            So we use 2px or 4px for corner radius?
          </h2>
          <p>―PIOTR ZIĘBA</p>
          <br />
          <h2 id="alt">
            When in doubt, crash the app.
          </h2>
          <p>―MOHAMED ELAWADI</p>
          <br />
          <h2 id="alt">
            Let the bugs stay there for a long time and they will become butterfly
          </h2>
          <p>―JIUN WU</p>
        </div>
      </Col>
    </FlexGrid>
  </WelcomeStyles>
);

export default WelcomePage;
