import React from "react";
import { Row, Col } from "../../src/index";
import WelcomeStyles from "./welcome.style";

export default function PrinciplesPage() {
  return (
    <WelcomeStyles>
      <Row>
        <Col col={12}>
          <div className="container">
            <h1>Principles</h1>
            <div className="box">
              <h3>Integrity</h3>
              <p>
                We design products to be open, honest and re­liable. Their
                interfaces are channels of truth which never obscure our
                intentions.
              </p>
            </div>
            <div className="box">
              <h3>Simplicity</h3>
              <p>
                We create products to empower our users. We honor their goals by
                paving their way. For every solution, we strive for its essence.
              </p>
            </div>
            <div className="box">
              <h3>Confidence</h3>
              <p>
                We challenge our ideas and let understanding drive our
                decisions. Through research and exploration, we transform
                uncertainties into insight.
              </p>
            </div>
            <div className="box">
              <h3>Inclusivity</h3>
              <p>
                We design for humans, in all their diversity. We welcome them,
                comfort them, guide them, serve them and never get in their way.
              </p>
            </div>
            <div className="box">
              <h3>Delight</h3>
              <p>
                We enrich our products with moments of joy and comfort to
                express our appreciation for the person on the other side of the
                screen.
              </p>
            </div>
            <div className="box">
              <h3>Momentum</h3>
              <p>
                We question our work and are willing to kill our darlings. We
                fight for our ideas, listen to arguments, agree or disagree, but
                always commit.
              </p>
            </div>
            <div className="box">
              <h3>Consistency</h3>
              <p>
                We think holistically. The bigger picture always informs our
                decisions down to the tiniest detail. Every change to one part
                enhances the whole.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </WelcomeStyles>
  );
}
