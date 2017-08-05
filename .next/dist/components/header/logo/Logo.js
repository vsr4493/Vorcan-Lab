'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _styles = require('./styles');

var style = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/header/logo/Logo.js';


var Facade = function Facade() {
	return _react2.default.createElement('div', { style: style.facadeOuter, __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement('div', { style: style.facadeInner, __source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}));
};

var Logo = function Logo() {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', textAlign: 'center', style: style.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(Facade, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}), _react2.default.createElement(_semanticUiReact.Header.Content, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement('sup', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, 'Vorcan\'s'), _react2.default.createElement('sub', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, 'Lab'))));
};

exports.default = Logo;