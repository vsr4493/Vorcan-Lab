"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var translateError = function translateError(msg) {
  var newErr = new Error(msg);
  return function (e) {
    newErr.originalError = e;
    throw newErr;
  };
};

exports.translateError = translateError;