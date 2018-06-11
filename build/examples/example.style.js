'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: \'Norms\', sans-serif;\n  }\n'], ['\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: \'Norms\', sans-serif;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  .example-container {\n    margin: 10px;\n    padding: 10px;\n    background-color: #f5f5f5;\n    text-align: center;\n  }\n\n  .example {\n    display: flex;\n    flex: 1;\n    background-color: #e0e0e0;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 10px;\n  }\n\n  .example-column {\n    display: flex;\n    flex: 1;\n    background-color: #e0e0e0;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .example-box {\n    display: flex;\n    background-color: #575756;\n    color: #fff;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n    padding: 30px;\n    height: 50px;\n    width: 50px;\n    border-radius: .25rem;\n  }\n\n  @media (max-width: 150px) {\n    .example-box {\n      height: 5px;\n      width: 5px;\n    }\n  }\n'], ['\n  .example-container {\n    margin: 10px;\n    padding: 10px;\n    background-color: #f5f5f5;\n    text-align: center;\n  }\n\n  .example {\n    display: flex;\n    flex: 1;\n    background-color: #e0e0e0;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 10px;\n  }\n\n  .example-column {\n    display: flex;\n    flex: 1;\n    background-color: #e0e0e0;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .example-box {\n    display: flex;\n    background-color: #575756;\n    color: #fff;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n    padding: 30px;\n    height: 50px;\n    width: 50px;\n    border-radius: .25rem;\n  }\n\n  @media (max-width: 150px) {\n    .example-box {\n      height: 5px;\n      width: 5px;\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// eslint-disable-next-line
(0, _styledComponents.injectGlobal)(_templateObject);

var ExampleStyles = _styledComponents2.default.div(_templateObject2);

exports.default = ExampleStyles;