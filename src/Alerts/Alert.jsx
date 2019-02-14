import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Icon } from "../../src/index";
import { AlertStyles, ContentStyles } from "./alert.style";
import * as AlertTypes from "./alertTypes";

export default function Alert({ type, children }) {
  const iconName =
    type === AlertTypes.SUCCESS
      ? "radio-button-filled-alt"
      : "warning-triangle-filled";

  return (
    <AlertStyles normal type={type}>
      <Row fullWidth textAlign="center">
        <Col>
          <Icon name={iconName} />
          <ContentStyles>{children}</ContentStyles>
        </Col>
      </Row>
    </AlertStyles>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(Object.values(AlertTypes)).isRequired,
  children: PropTypes.string.isRequired
};
