import React from 'react';
import PropTypes from 'prop-types';
import { InputStyles } from './form.style';

const Input = props => (
  <InputStyles>
    <label htmlFor={props.id} className="form-control">
      <span>
        {props.label}
        {props.isRequired ? <span id="required">*</span> : null}
      </span>
      <input
        id={props.id}
        name={props.id}
        type={props.type}
        data-validationmessage={props.validationmessage}
        placeholder={props.placeholder}
        required={props.isRequired}
      />
      <span className="error-feedback" />
    </label>
  </InputStyles>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  validationmessage: PropTypes.string,
  isRequired: PropTypes.bool,
};

Input.defaultProps = {
  type: '',
  placeholder: '',
  label: '',
  validationmessage: '',
  isRequired: false,
};

export default Input;
