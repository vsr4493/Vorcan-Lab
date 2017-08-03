'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _translateError = require('./translateError');

Object.keys(_translateError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _translateError[key];
    }
  });
});