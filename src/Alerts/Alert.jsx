import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Icon } from "../index";
import { AlertStyles, TextStyles } from "./alert.style";
import * as AlertTypes from "./alertTypes";

export default function Alert({ hasIcon, type, children }) {
  const iconName =
    type === AlertTypes.SUCCESS ? "confirmed-fill" : "warning-triangle-filled";

  return (
    <AlertStyles type={type}>
      <Row fullWidth textAlign="center">
        <Col>
          {hasIcon && <Icon name={iconName} />}
          <TextStyles hasIcon={hasIcon}>{children}</TextStyles>
        </Col>
      </Row>
    </AlertStyles>
  );
}

Alert.propTypes = {
  hasIcon: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(AlertTypes)).isRequired,
  children: PropTypes.string.isRequired
};

Alert.defaultProps = {
  hasIcon: true
};
