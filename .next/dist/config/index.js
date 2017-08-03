'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiConfig = require('./ApiConfig');

Object.keys(_ApiConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ApiConfig[key];
    }
  });
});