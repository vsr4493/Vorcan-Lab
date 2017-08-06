'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Facade = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/header/common/Facade.js';


var Facade = function Facade() {
	return _react2.default.createElement('div', { style: styles.outer, __source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement('div', { style: (0, _assign2.default)({}, styles.inner, styles.transform), __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}));
};

exports.Facade = Facade;