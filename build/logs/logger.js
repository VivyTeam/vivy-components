"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Console = console;

var logger = {
  record: function record(info) {
    Console.log(info);
  },
  error: function error(err) {
    Console.error(err);
  }
};

exports.default = logger;