'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _copyToClipboard = require('copy-to-clipboard');

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorBox = function (_Component) {
  _inherits(ColorBox, _Component);

  function ColorBox(props) {
    _classCallCheck(this, ColorBox);

    var _this = _possibleConstructorReturn(this, (ColorBox.__proto__ || Object.getPrototypeOf(ColorBox)).call(this, props));

    _this.handleCopy = _this.handleCopy.bind(_this);
    return _this;
  }

  _createClass(ColorBox, [{
    key: 'handleCopy',
    value: function handleCopy() {
      var _props = this.props,
          gradient = _props.gradient,
          color = _props.color;

      var text = gradient || color;

      (0, _copyToClipboard2.default)(text, {
        debug: true,
        message: 'Copied'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          description = _props2.description,
          color = _props2.color,
          gradient = _props2.gradient,
          dark = _props2.dark;

      return _react2.default.createElement(
        'div',
        {
          className: 'color-box-container',
          style: { color: dark ? '#575756' : '#fff' }
        },
        _react2.default.createElement(
          'div',
          {
            tabIndex: '0',
            role: 'button',
            onClick: this.handleCopy,
            onKeyPress: function onKeyPress() {},
            className: 'color-box',
            style: gradient ? { backgroundImage: gradient } : { backgroundColor: color }
          },
          _react2.default.createElement(
            'small',
            null,
            description
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'small',
            null,
            gradient ? '' : color
          ),
          _react2.default.createElement(
            'h2',
            { id: 'copy' },
            'copy'
          )
        )
      );
    }
  }]);

  return ColorBox;
}(_react.Component);

exports.default = ColorBox;


ColorBox.propTypes = {
  description: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string,
  gradient: _propTypes2.default.string,
  dark: _propTypes2.default.bool
};

ColorBox.defaultProps = {
  color: '#fff',
  gradient: null,
  dark: false
};