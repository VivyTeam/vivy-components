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

var _header = require('../../public/images/header.png');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrinciplesPage = function PrinciplesPage() {
  return _react2.default.createElement(
    _welcome2.default,
    null,
    _react2.default.createElement('img', { src: _header2.default, alt: 'Vivy relax header', width: '100%' }),
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
            'Principles'
          ),
          _react2.default.createElement(
            'div',
            { className: 'box' },
            _react2.default.createElement(
              'h2',
              null,
              'Unified'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Each piece is part of a greater whole and should contribute positively to the system at scale. There should be no isolated features or outliers.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'box' },
            _react2.default.createElement(
              'h2',
              null,
              'Universal'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Vivy is used by a wide global community. Our products and visual language should be welcoming and accessible.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'box' },
            _react2.default.createElement(
              'h2',
              null,
              'Iconic'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We\u2019re focused when it comes to both design and functionality. Our work should speak boldly and clearly to this focus.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'box' },
            _react2.default.createElement(
              'h2',
              null,
              'Conversational'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Our use of motion breathes life into our products, and allows us to communicate with users in easily understood ways.'
            )
          )
        )
      )
    )
  );
};

exports.default = PrinciplesPage;