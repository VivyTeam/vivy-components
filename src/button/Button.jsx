import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyles from './button.style';

const Button = props => (
  <ButtonStyles>
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={props.type}
    >
      {props.children}
    </button>
  </ButtonStyles>
);

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  type: 'primary',
  onClick: () => {},
  disabled: false,
};

export default Button;
