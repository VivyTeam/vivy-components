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

  const validateField = (field, message) => {
    const label = field.parentNode.querySelector('.error-feedback');

    if (field.validity.valid) {
      field.classList.remove('invalid');
      label.textContent = '';
    } else {
      field.classList.add('invalid');
      label.textContent = message;
    }
  };

  const authenticate = actions.onAuthenticate$
    .pluck(0)
    .map(e => {
      e.preventDefault();
      const fields = [...e.target.elements];
      return fields.filter(field => field.nodeName.toLowerCase() !== 'button');
    })
    .map(fields => {
      fields.forEach(field => {
        const { dataset, validationMessage } = field;
        const message = dataset.validationmessage || validationMessage;

        validateField(field, message);
      });
      return Observable.empty();
    });

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
          <form onSubmit={onAuthenticate} noValidate>
            {form}
          </form>
        </FlexGrid>
      </FormStyles>
    );
  }
}
