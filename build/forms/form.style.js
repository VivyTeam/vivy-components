'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputStyles = exports.FormStyles = undefined;

var _templateObject = _taggedTemplateLiteral([' \n  .form-item {\n    padding: 25px;\n  }\n'], [' \n  .form-item {\n    padding: 25px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  label {\n    color: #575756;\n    font-size: 16px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    letter-spacing: 0.3px;\n    line-height: 2.5;\n  }\n\n  input {\n    width: 100%;\n    height: 48px;\n    border-radius: 2px;\n    background-color: #ffffff;\n    border: solid 1px #cdcdcd;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    color: #898988;\n    padding: 2px 16px;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  }\n\n  input:hover {\n    border-color: #04d4bf;\n    transition: border-color 0.2s ease;\n  }\n\n  input:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px rgba(4, 212, 191, .2);\n    border-color: #04d4bf;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  }\n\n  input::placeholder {\n    color: #bfbfbf;\n  }\n\n  #required {\n    font-size: 0.9em;\n    padding-left: 10px;\n    color: #e94119;\n  }\n'], ['\n  label {\n    color: #575756;\n    font-size: 16px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    letter-spacing: 0.3px;\n    line-height: 2.5;\n  }\n\n  input {\n    width: 100%;\n    height: 48px;\n    border-radius: 2px;\n    background-color: #ffffff;\n    border: solid 1px #cdcdcd;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    color: #898988;\n    padding: 2px 16px;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  }\n\n  input:hover {\n    border-color: #04d4bf;\n    transition: border-color 0.2s ease;\n  }\n\n  input:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px rgba(4, 212, 191, .2);\n    border-color: #04d4bf;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  }\n\n  input::placeholder {\n    color: #bfbfbf;\n  }\n\n  #required {\n    font-size: 0.9em;\n    padding-left: 10px;\n    color: #e94119;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormStyles = exports.FormStyles = _styledComponents2.default.div(_templateObject);

var InputStyles = exports.InputStyles = _styledComponents2.default.div(_templateObject2);