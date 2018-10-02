import React from "react";
import ThemeLogosStyles from "./themeLogos.style";
import { FlexGrid, Col, Row } from "../index";

import logo from "../../public/images/vivy_logo/logo/logo_2.svg";
import letterHead from "../../public/images/vivy_logo/logo_letter_head/letter_head.svg";
import logoComplete from "../../public/images/vivy_logo/logo-complete/logo-complete.svg";

export default function ThemeLogos() {
  return (
    <ThemeLogosStyles>
      <div className="logo-container">
        <FlexGrid>
          <Col>
            <Row>
              <div className="logo-box">
                <img src={logo} alt="Vivy logo" />
              </div>
              <div className="logo-box">
                <img src={letterHead} alt="Vivy logo letterhead" width="130" />
              </div>
              <div className="logo-box">
                <img src={logoComplete} alt="Vivy complete logo" width="80" />
              </div>
            </Row>
          </Col>
        </FlexGrid>
      </div>
    </ThemeLogosStyles>
  );
}
