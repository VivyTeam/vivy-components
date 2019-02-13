import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Col, Icon } from "../../src/index";

const TYPE_WARNING = "warning";
const TYPE_SUCCESS = "success";

const AlertStyles = styled.div`
  background-color: red;
  padding: 16px;
  border-radius: 8px;

  i {
    font-size: 48px;
  }
`;

const ContentStyles = styled.div`
  margin-top: 12px;
`;

const AlertSuccessStyle = styled(AlertStyles)`
  background-color: #e8f5e5;

  i {
    color: #189f59;
  }
`;

const AlertWarningStyle = styled(AlertStyles)`
  background-color: #fff1cb;

  i {
    color: #d97508;
  }
`;

export default function Alert({ type, children }) {
  const Styles = type === TYPE_SUCCESS ? AlertSuccessStyle : AlertWarningStyle;
  const iconName =
    type === TYPE_SUCCESS
      ? "radio-button-filled-alt"
      : "warning-triangle-filled";

  return (
    <Styles>
      <Row fullWidth textAlign="center">
        <Col>
          <Icon name={iconName} />
          <ContentStyles>{children}</ContentStyles>
        </Col>
      </Row>
    </Styles>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf([TYPE_SUCCESS, TYPE_WARNING]).isRequired,
  children: PropTypes.string.isRequired
};
