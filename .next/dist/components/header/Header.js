'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppHeader = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\Header.js';


var Slogan = function Slogan() {
	return _react2.default.createElement(_semanticUiReact.Header, { style: gridStyles, as: 'h1', textAlign: 'center', __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, 'Vorcan\'s Labratory');
};

var gridStyles = {
	padding: "20px 10px"
};

var LinkMenu = function LinkMenu(_ref) {
	var activeItem = _ref.activeItem;
	return _react2.default.createElement(_semanticUiReact.Grid, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement(_semanticUiReact.Menu, { vertical: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, _react2.default.createElement(_link2.default, { href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Home', active: activeItem === 'home', __source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	})), _react2.default.createElement(_link2.default, { href: '/about', __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'About', active: activeItem === 'about', __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	})))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement(_semanticUiReact.Menu, { vertical: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}))));
};

var AppHeader = function AppHeader(props) {
	return _react2.default.createElement(_semanticUiReact.Grid, { celled: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 7, __source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	}, _react2.default.createElement(Slogan, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	})), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 9, __source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, _react2.default.createElement(LinkMenu, { activeIte: true,
		m: props.activeItem, __source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}))));
};

exports.AppHeader = AppHeader;