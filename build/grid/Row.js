'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(props) {
  return _react2.default.createElement(
    'div',
    { className: 'row' },
    props.children
  );
};

Row.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = Row;