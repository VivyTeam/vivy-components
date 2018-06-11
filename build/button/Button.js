'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('./button.style');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Current Types
 * primary
 * primary-dark
 * alt
 * danger
 */

var Button = function Button(props) {
  return _react2.default.createElement(
    _button2.default,
    null,
    _react2.default.createElement(
      'button',
      {
        disabled: props.disabled,
        onClick: props.onClick,
        className: props.type
      },
      props.children
    )
  );
};

Button.propTypes = {
  children: _propTypes2.default.string,
  type: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  disabled: _propTypes2.default.bool
};

Button.defaultProps = {
  children: '',
  type: 'primary',
  onClick: function onClick() {},
  disabled: false
};

exports.default = Button;