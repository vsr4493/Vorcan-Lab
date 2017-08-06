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


var MenuItem = function MenuItem(_ref) {
	var href = _ref.href,
	    title = _ref.title,
	    activeItem = _ref.activeItem;
	return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: title, size: 'large', active: activeItem === title, __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_link2.default, { href: href, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'black', __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, title)));
};

var Navbar = function Navbar(_ref2) {
	var activeLink = _ref2.activeLink,
	    links = _ref2.links;
	return _react2.default.createElement(_semanticUiReact.Menu, { borderless: true, style: styles.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, links.map(function (link, index) {
		return _react2.default.createElement(MenuItem, { href: link.url, key: index, title: link.title, activeItem: link.title == activeLink, __source: {
				fileName: _jsxFileName,
				lineNumber: 18
			}
		});
	}));
};

exports.default = Navbar;