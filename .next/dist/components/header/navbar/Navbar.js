'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _styles = require('./styles');

var styles = _interopRequireWildcard(_styles);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('../common/index');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\navbar\\Navbar.js';


var PostLink = function PostLink(_ref) {
	var id = _ref.id,
	    title = _ref.title;
	return _react2.default.createElement(_link2.default, { href: '/post?id=' + id, __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: title, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}));
};

var MenuItem = function MenuItem(_ref2) {
	var href = _ref2.href,
	    title = _ref2.title,
	    activeItem = _ref2.activeItem;
	return _react2.default.createElement(_link2.default, { href: href, __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: title, active: activeItem === title, __source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, title));
};

var Navbar = function Navbar(_ref3) {
	var activeItem = _ref3.activeItem;
	return _react2.default.createElement(_semanticUiReact.Menu, { borderless: true, fluid: true, widths: 2, style: styles.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement(MenuItem, { href: '/', title: 'home', activeItem: activeItem, __source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}), _react2.default.createElement(PostLink, { id: 'WYDchioAAHuWrCAF', title: 'Hello World', __source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}));
};

exports.default = Navbar;