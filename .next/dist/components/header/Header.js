'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppHeader = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Logo = require('./logo/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Navbar = require('./navbar/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _styles = require('./styles');

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\Header.js';


var AppHeader = function AppHeader(props) {
	return _react2.default.createElement(_semanticUiReact.Grid, { stretched: true, style: styles.container.grid, __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, { stretched: true, style: styles.container.row, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(_Logo2.default, { toggleSidebar: props.toggleSidebar, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	})), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(_Navbar2.default, { links: props.links, activeLink: props.activeLink, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}))));
};

exports.AppHeader = AppHeader;