import React from 'react';
import PropTypes from 'prop-types';
import FlexGrid from '../grid/FlexGrid';
import Row from '../grid/Row';
import Col from '../grid/Col';
import { FormStyles } from './form.style';

export default function Form(props) {
  const { horizontal, children } = props;
  const form = horizontal ? <Row> {children} </Row> : <Col> {children} </Col>;

  return (
    <FormStyles>
      <FlexGrid>
        <form onSubmit={() => true}>{form}</form>
      </FlexGrid>
    </FormStyles>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  // submit: PropTypes.func,
  horizontal: PropTypes.bool,
};

Form.defaultProps = {
  // submit: () => {},
  horizontal: false,
};
