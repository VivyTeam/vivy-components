'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  h1 {\n    color: #575756;\n    font-size: 1.5em;\n  }\n\n  h2 {\n    color: #575756;\n    font-size: 1.25em;\n  }\n\n  h3 {\n    color: #575756;\n    font-size: 1em;\n  }\n\n  p {\n    color: #575756;\n    font-size: 0.93em;\n    font-weight: 100;\n  }\n\n  #alt {\n    font-weight: 600;\n  }\n\n  img {\n    position: relative;\n  }\n\n  .caption {\n    font-size: 0.81em;\n    font-weight: 400;\n  }\n  \n  .container {\n    background-color: #fff;\n    width: 50%;\n    margin: 0 auto;\n  }\n\n  .box {\n    margin: 60px 10px;\n  }\n'], ['\n  h1 {\n    color: #575756;\n    font-size: 1.5em;\n  }\n\n  h2 {\n    color: #575756;\n    font-size: 1.25em;\n  }\n\n  h3 {\n    color: #575756;\n    font-size: 1em;\n  }\n\n  p {\n    color: #575756;\n    font-size: 0.93em;\n    font-weight: 100;\n  }\n\n  #alt {\n    font-weight: 600;\n  }\n\n  img {\n    position: relative;\n  }\n\n  .caption {\n    font-size: 0.81em;\n    font-weight: 400;\n  }\n  \n  .container {\n    background-color: #fff;\n    width: 50%;\n    margin: 0 auto;\n  }\n\n  .box {\n    margin: 60px 10px;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WelcomeStyles = _styledComponents2.default.div(_templateObject);

exports.default = WelcomeStyles;