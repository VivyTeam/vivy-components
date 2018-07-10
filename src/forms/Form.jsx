import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { rxConnect, ofActions } from 'rx-connect';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import FlexGrid from '../grid/FlexGrid';
import Row from '../grid/Row';
import Col from '../grid/Col';
import { FormStyles } from './form.style';

@rxConnect(() => {
  const actions = {
    onAuthenticate$: new Subject(),
  };

  const getInputsToValidate = actions.onAuthenticate$
    .pluck(0)
    .do(e => {
      e.preventDefault();
    })
    .flatMap(e => [...e.target.elements])
    .filter(fields => fields.nodeName.toLowerCase() !== 'button');

  const validate = getInputsToValidate
    .filter(input => input.validity.valid)
    .do(input => {
      const label = input.parentNode.querySelector('.error-feedback');

      input.classList.remove('invalid');
      label.textContent = '';
    });

  const invalidate = getInputsToValidate
    .filter(input => !input.validity.valid)
    .do(input => {
      const { dataset, validationMessage } = input;
      const label = input.parentNode.querySelector('.error-feedback');
      const message = dataset.validationmessage || validationMessage;

      input.classList.add('invalid');
      label.textContent = message;
    });

  const authenticate = getInputsToValidate.merge(validate, invalidate);

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
