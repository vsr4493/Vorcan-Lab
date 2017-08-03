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

var PostLink = function PostLink(_ref) {
	var id = _ref.id,
	    title = _ref.title;
	return _react2.default.createElement(_link2.default, { href: '/post?id=' + id, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: title, __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}));
};

var LinkMenu = function LinkMenu(_ref2) {
	var activeItem = _ref2.activeItem;
	return _react2.default.createElement(_semanticUiReact.Grid, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement(_semanticUiReact.Menu, { vertical: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement(_link2.default, { href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Home', active: activeItem === 'home', __source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	})), _react2.default.createElement(_link2.default, { href: '/about', __source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'About', active: activeItem === 'about', __source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	})), _react2.default.createElement(PostLink, { id: 'WYDchioAAHuWrCAF', title: 'Hello World', __source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement(_semanticUiReact.Menu, { vertical: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}))));
};

var AppHeader = function AppHeader(props) {
	return _react2.default.createElement(_semanticUiReact.Grid, { celled: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 7, __source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	}, _react2.default.createElement(Slogan, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 44
		}
	})), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 9, __source: {
			fileName: _jsxFileName,
			lineNumber: 46
		}
	}, _react2.default.createElement(LinkMenu, { activeIte: true,
		m: props.activeItem, __source: {
			fileName: _jsxFileName,
			lineNumber: 47
		}
	}))));
};

exports.AppHeader = AppHeader;