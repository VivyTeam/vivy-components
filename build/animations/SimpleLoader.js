'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _loading = require('../../public/animations/loading.gif');

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleLoader = function SimpleLoader(props) {
  return _react2.default.createElement('img', {
    src: _loading2.default,
    alt: 'Loading...',
    width: props.width,
    height: props.height
  });
};

SimpleLoader.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number
};

SimpleLoader.defaultProps = {
  width: 50,
  height: 50
};

exports.default = SimpleLoader;