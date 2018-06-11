'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('./theme.style');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeFonts = function ThemeFonts() {
  return _react2.default.createElement(
    _theme2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'font-container' },
      _react2.default.createElement(
        'h1',
        null,
        'Typography'
      ),
      _react2.default.createElement(
        'p',
        { id: 'alt' },
        'We use TT Norms, giving text in Vivy a fun and friendly feel to match our illustrations.'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'h1',
        null,
        '<h1> Headline - 1.5em 600 bold'
      ),
      _react2.default.createElement(
        'h1',
        null,
        'The quick brown fox jumps over the lazy dog'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'h2',
        null,
        '<h2> Title - 1.25em 600 bold'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'The quick brown fox jumps over the lazy dog'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'h3',
        null,
        '<h3> Subheading - 1em 600 bold'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'The quick brown fox jumps over the lazy dog'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'h3',
        { id: 'alt' },
        '<h3> Subheading alt - 1em 100 regular'
      ),
      _react2.default.createElement(
        'h3',
        { id: 'alt' },
        'The quick brown fox jumps over the lazy dog'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'p',
        null,
        '<p> Body - 0.93em 600 bold'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The quick brown fox jumps over the lazy dog'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'p',
        { id: 'alt' },
        '<p> Body alt - 0.93em 100 regular'
      ),
      _react2.default.createElement(
        'p',
        { id: 'alt' },
        'The quick brown fox jumps over the lazy dog'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'p',
        { className: 'caption' },
        '<p> Caption - 0.81em 400 medium'
      ),
      _react2.default.createElement(
        'p',
        { className: 'caption' },
        'The quick brown fox jumps over the lazy dog'
      )
    )
  );
};

exports.default = ThemeFonts;