'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlexGrid = require('../grid/FlexGrid');

var _FlexGrid2 = _interopRequireDefault(_FlexGrid);

var _Col = require('../grid/Col');

var _Col2 = _interopRequireDefault(_Col);

var _welcome = require('./welcome.style');

var _welcome2 = _interopRequireDefault(_welcome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WelcomePage = function WelcomePage() {
  return _react2.default.createElement(
    _welcome2.default,
    null,
    _react2.default.createElement(
      _FlexGrid2.default,
      null,
      _react2.default.createElement(
        _Col2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h1',
            null,
            'Vision & Ethos'
          ),
          _react2.default.createElement(
            'p',
            null,
            'This guide and component library aims to bring engineering and design together. These components will directly tie into our frontend infrastructure to empower a design first approach. With this philosophy we aim to have consistent and accessible design that unifies our features into a greater whole.'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h2',
            { id: 'alt' },
            'Eat more fish, its healthy!'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u2015DR. TAMARA RADAKOVIC'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h2',
            { id: 'alt' },
            'So we use 2px or 4px for corner radius?'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u2015PIOTR ZI\u0118BA'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h2',
            { id: 'alt' },
            'When in doubt, crash the app.'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u2015MOHAMED ELAWADI'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h2',
            { id: 'alt' },
            'Let the bugs stay there for a long time and they will become butterfly'
          ),
          _react2.default.createElement(
            'p',
            null,
            '\u2015JIUN WU'
          )
        )
      )
    )
  );
};

exports.default = WelcomePage;