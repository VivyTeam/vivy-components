import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Icon } from "../index";
import { AlertStyles, TextStyles } from "./alertSmall.style";
import * as AlertTypes from "./alertTypes";

export default function AlertSmall({ hasIcon, type, children }) {
  const iconName =
    type === AlertTypes.SUCCESS ? "confirmed-fill" : "warning-triangle-filled";

  return (
    <AlertStyles type={type}>
      <Row fullWidth verticalAlign="middle" textAlign="center">
        <Col lg={1}>{hasIcon && <Icon name={iconName} />}</Col>
        <Col lg={10}>
          <TextStyles>{children}</TextStyles>
        </Col>
      </Row>
    </AlertStyles>
  );
}

AlertSmall.propTypes = {
  hasIcon: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(AlertTypes)).isRequired,
  children: PropTypes.string.isRequired,
};

AlertSmall.defaultProps = {
  hasIcon: true,
};
