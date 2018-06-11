'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .flex-grid {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .col {\n    flex: 1;\n    flex-direction: column;\n    display: flex;\n  }\n\n  .row {\n    flex: 1;\n    flex-direction: row;\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  @media (max-width: 600px) {\n    .flex-grid {\n      flex-direction: column;\n    }\n\n    .row {\n      flex-direction: column;\n    }\n  }\n'], ['\n  .flex-grid {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .col {\n    flex: 1;\n    flex-direction: column;\n    display: flex;\n  }\n\n  .row {\n    flex: 1;\n    flex-direction: row;\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  @media (max-width: 600px) {\n    .flex-grid {\n      flex-direction: column;\n    }\n\n    .row {\n      flex-direction: column;\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GridStyles = _styledComponents2.default.div(_templateObject);

exports.default = GridStyles;