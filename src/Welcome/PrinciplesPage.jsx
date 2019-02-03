import React from "react";
import { Row, Col } from "../../src/index";

export default function PrinciplesPage() {
  return (
    <Row position="center" fullWidth>
      <Col lg={8}>
        <h1>Principles</h1>

        <h3>Integrity</h3>
        <p>
          We design products to be open, honest and re­liable. Their interfaces
          are channels of truth which never obscure our intentions.
        </p>

        <h3>Simplicity</h3>
        <p>
          We create products to empower our users. We honor their goals by
          paving their way. For every solution, we strive for its essence.
        </p>

        <h3>Confidence</h3>
        <p>
          We challenge our ideas and let understanding drive our decisions.
          Through research and exploration, we transform uncertainties into
          insight.
        </p>

        <h3>Inclusivity</h3>
        <p>
          We design for humans, in all their diversity. We welcome them, comfort
          them, guide them, serve them and never get in their way.
        </p>

        <h3>Delight</h3>
        <p>
          We enrich our products with moments of joy and comfort to express our
          appreciation for the person on the other side of the screen.
        </p>

        <h3>Momentum</h3>
        <p>
          We question our work and are willing to kill our darlings. We fight
          for our ideas, listen to arguments, agree or disagree, but always
          commit.
        </p>

        <h3>Consistency</h3>
        <p>
          We think holistically. The bigger picture always informs our decisions
          down to the tiniest detail. Every change to one part enhances the
          whole.
        </p>
      </Col>
    </Row>
  );
}
