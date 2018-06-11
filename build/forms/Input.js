'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _form = require('./form.style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(props) {
  return _react2.default.createElement(
    _form.InputStyles,
    null,
    _react2.default.createElement(
      'label',
      { htmlFor: props.id },
      _react2.default.createElement(
        'span',
        null,
        props.label,
        props.isRequired ? _react2.default.createElement(
          'span',
          { id: 'required' },
          '(required)'
        ) : null
      ),
      _react2.default.createElement('input', {
        id: props.id,
        name: props.id,
        type: props.type,
        placeholder: props.placeholder
      })
    )
  );
};

Input.propTypes = {
  id: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  label: _propTypes2.default.string,
  isRequired: _propTypes2.default.bool
};

Input.defaultProps = {
  type: '',
  placeholder: '',
  label: '',
  isRequired: false
};

exports.default = Input;