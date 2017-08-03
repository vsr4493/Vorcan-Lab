'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/header/Slogan.js';


console.log(_styles.sloganStyle);

var Slogan = function Slogan() {
	return _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', textAlign: 'center', __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_style2.default, {
		styleId: _styles.sloganStyle.__hash,
		css: _styles.sloganStyle
	}), _react2.default.createElement('div', { className: 'sloganContainer', __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('div', { className: 'sloganContainerBG', __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}), _react2.default.createElement('sup', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, 'Vorcan\'s'), _react2.default.createElement('sub', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, 'Lab')));
};

exports.default = Slogan;