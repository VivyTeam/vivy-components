'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('./theme.style');

var _theme2 = _interopRequireDefault(_theme);

var _FlexGrid = require('../grid/FlexGrid');

var _FlexGrid2 = _interopRequireDefault(_FlexGrid);

var _Col = require('../grid/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('../grid/Row');

var _Row2 = _interopRequireDefault(_Row);

var _logo_ = require('../../public/images/vivy_logo/logo/logo_2.svg');

var _logo_2 = _interopRequireDefault(_logo_);

var _letter_head = require('../../public/images/vivy_logo/logo_letter_head/letter_head.svg');

var _letter_head2 = _interopRequireDefault(_letter_head);

var _logoComplete = require('../../public/images/vivy_logo/logo-complete/logo-complete.svg');

var _logoComplete2 = _interopRequireDefault(_logoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeLogos = function ThemeLogos() {
  return _react2.default.createElement(
    _theme2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'logo-container' },
      _react2.default.createElement(
        _FlexGrid2.default,
        null,
        _react2.default.createElement(
          _Col2.default,
          null,
          _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'logo-box' },
              _react2.default.createElement('img', { src: _logo_2.default, alt: 'Vivy logo' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'logo-box' },
              _react2.default.createElement('img', {
                src: _letter_head2.default,
                alt: 'Vivy logo letterhead',
                width: '130'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'logo-box' },
              _react2.default.createElement('img', {
                src: _logoComplete2.default,
                alt: 'Vivy complete logo',
                width: '80'
              })
            )
          )
        )
      )
    )
  );
};

exports.default = ThemeLogos;