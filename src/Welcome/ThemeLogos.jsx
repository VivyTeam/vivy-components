import React from "../../node_modules/react";
import styled from "../../node_modules/styled-components";
import { Col, Row } from "../index";
import logo from "../../public/images/vivy_logo/logo/logo_2.svg";
import letterHead from "../../public/images/vivy_logo/logo_letter_head/letter_head.svg";
import logoComplete from "../../public/images/vivy_logo/logo-complete/logo-complete.svg";

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(151, 160, 191, 0.3) 0px 4px 6px 0px;
  height: 150px;
  background-color: rgb(255, 255, 255);
  padding: 10px;
  margin: 10px;
  border-radius: 7px;
`;

export default function ThemeLogos() {
  return (
    <div>
      <Row position="center">
        <Col lg={4}>
          <LogoBox>
            <img src={logo} alt="Vivy logo" />
          </LogoBox>
        </Col>

        <Col lg={4}>
          <LogoBox>
            <img src={letterHead} alt="Vivy logo letterhead" width="130" />
          </LogoBox>
        </Col>
        <Col lg={4}>
          <LogoBox>
            <img src={logoComplete} alt="Vivy complete logo" width="80" />
          </LogoBox>
        </Col>
      </Row>
    </div>
  );
}
