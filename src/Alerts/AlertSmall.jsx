import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Icon } from "../../src/index";
import { AlertStyles } from "./alert.style";
import * as AlertTypes from "./alertTypes";

export default function AlertSmall({ type, children }) {
  const iconName =
    type === AlertTypes.SUCCESS
      ? "radio-button-filled-alt"
      : "warning-triangle-filled";

  return (
    <AlertStyles small type={type}>
      <Row fullWidth verticalAlign="middle" textAlign="center">
        <Col lg={1}>
          <Icon name={iconName} />
        </Col>
        <Col lg={10}>{children}</Col>
      </Row>
    </AlertStyles>
  );
}

AlertSmall.propTypes = {
  type: PropTypes.oneOf(Object.values(AlertTypes)).isRequired,
  children: PropTypes.string.isRequired
};
