import React from "react";
import PropTypes from "prop-types";
import { FlexGrid, Row, Col } from "../index";
import { FormStyles } from "./input.style";

export default function Form(props) {
  const { horizontal, children } = props;
  const form = horizontal ? <Row> {children} </Row> : <Col> {children} </Col>;

  return (
    <FormStyles>
      <FlexGrid>{form}</FlexGrid>
    </FormStyles>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  horizontal: PropTypes.bool
};

Form.defaultProps = {
  horizontal: false
};
