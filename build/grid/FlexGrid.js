'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _grid = require('./grid.style');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexGrid = function FlexGrid(props) {
  return _react2.default.createElement(
    _grid2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'flex-grid' },
      props.children
    )
  );
};

FlexGrid.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = FlexGrid;