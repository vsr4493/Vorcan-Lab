'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _styles = require('./styles');

var styles = _interopRequireWildcard(_styles);

var _index = require('../common/index');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/header/logo/Logo.js';


var Logo = function Logo(_ref) {
	var toggleSidebar = _ref.toggleSidebar;
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', style: styles.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_index.Facade, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}), _react2.default.createElement(_semanticUiReact.Header.Content, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(_semanticUiReact.Button, { icon: true, onClick: toggleSidebar, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement('sup', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', inverted: true, name: 'content', __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	})))), _react2.default.createElement(_semanticUiReact.Header.Content, { style: { marginLeft: "10px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, _react2.default.createElement('sup', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, 'Vorcan\'s'), _react2.default.createElement('sub', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, 'Lab'))));
};

exports.default = Logo;