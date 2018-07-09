import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { rxConnect, ofActions } from 'rx-connect';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import authenticateFormData from './formValidation';
import FlexGrid from '../grid/FlexGrid';
import Row from '../grid/Row';
import Col from '../grid/Col';
import { FormStyles } from './form.style';

@rxConnect(() => {
  const actions = {
    onAuthenticate$: new Subject(),
  };

  const authenticate = actions.onAuthenticate$
    .pluck(0)
    .flatMap(e => {
      e.preventDefault();
      return [...e.target.elements];
    })
    .let(authenticateFormData);

  return Observable.merge(Observable::ofActions(actions), authenticate);
})
export default class Form extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    horizontal: PropTypes.bool,
    onAuthenticate: PropTypes.func.isRequired,
  };

  static defaultProps = {
    horizontal: false,
  };

  render() {
    const { horizontal, children, onAuthenticate } = this.props;
    const form = horizontal ? <Row> {children} </Row> : <Col> {children} </Col>;

    return (
      <FormStyles>
        <FlexGrid>
          <form id="form" onSubmit={onAuthenticate} noValidate>
            {form}
          </form>
        </FlexGrid>
      </FormStyles>
    );
  }
}
