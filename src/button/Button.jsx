import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyles from './button.style';

export default function Button(props) {
  return (
    <ButtonStyles>
      <button
        disabled={props.disabled}
        onClick={props.onClick}
        className={props.type}
        type={props.htmlType}
        style={props.styles}
      >
        {props.children}
      </button>
    </ButtonStyles>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  htmlType: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  styles: PropTypes.shape({}),
};

Button.defaultProps = {
  children: '',
  type: 'primary',
  htmlType: '',
  onClick: () => {},
  disabled: false,
  styles: {},
};
