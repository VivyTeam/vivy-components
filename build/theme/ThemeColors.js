'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('./theme.style');

var _theme2 = _interopRequireDefault(_theme);

var _ColorBox = require('./ColorBox');

var _ColorBox2 = _interopRequireDefault(_ColorBox);

var _FlexGrid = require('../grid/FlexGrid');

var _FlexGrid2 = _interopRequireDefault(_FlexGrid);

var _Row = require('../grid/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('../grid/Col');

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeColors = function ThemeColors() {
  return _react2.default.createElement(
    _FlexGrid2.default,
    null,
    _react2.default.createElement(
      _theme2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: 'color-container' },
        _react2.default.createElement(
          _Col2.default,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Colors'
            ),
            _react2.default.createElement(
              _Row2.default,
              null,
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Brand color',
                color: '#04d4bf'
              }),
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Alt brand color',
                color: '#05e6c8'
              }),
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Actionable text',
                color: '#09cbb8'
              }),
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Alert',
                color: '#e94119'
              }),
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Background',
                color: '#f5f5f5',
                dark: true
              }),
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Primary',
                color: '#575756'
              }),
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Secondary',
                color: '#898988'
              }),
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Hint',
                color: '#bfbfbf'
              }),
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Divider',
                color: '#e0e0e0',
                dark: true
              })
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Gradient'
            ),
            _react2.default.createElement(
              _Row2.default,
              null,
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Positive',
                gradient: 'linear-gradient(180deg,#34de95,#14cfc1)'
              }),
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Neutral',
                gradient: 'linear-gradient(180deg,#ffe071,#ffa97c)'
              }),
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Negative',
                gradient: 'linear-gradient(180deg,#ff7676,#f54ea2)'
              }),
              _react2.default.createElement(_ColorBox2.default, {
                description: 'Inactive',
                gradient: 'linear-gradient(180deg,#cccbd0,#bcbbc1)'
              })
            )
          )
        )
      )
    )
  );
};

exports.default = ThemeColors;