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

var _AppRoutes = require('./AppRoutes');

Object.keys(_AppRoutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AppRoutes[key];
    }
  });
});