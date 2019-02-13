import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Icon } from "../../src/index";
import {
  AlertSmallSuccessStyles,
  AlertSmallWarningStyles
} from "./alert.style";

const TYPE_WARNING = "warning";
const TYPE_SUCCESS = "success";

export default function AlertSmall({ type, children }) {
  const Styles =
    type === TYPE_SUCCESS ? AlertSmallSuccessStyles : AlertSmallWarningStyles;
  const iconName =
    type === TYPE_SUCCESS
      ? "radio-button-filled-alt"
      : "warning-triangle-filled";

  return (
    <Styles>
      <Row verticalAlign="middle" space="between" textAlign="center">
        <Col lg={1}>
          <Icon name={iconName} />
        </Col>
        <Col lg={11}>{children}</Col>
      </Row>
    </Styles>
  );
}

AlertSmall.propTypes = {
  type: PropTypes.oneOf([TYPE_SUCCESS, TYPE_WARNING]).isRequired,
  children: PropTypes.string.isRequired
};
