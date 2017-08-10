'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../components/index');

var _index2 = require('../scenes/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/pages/index.js?entry';


var links = [{
	subHeader: "A talk about some stuff",
	header: "Major title this",
	addedOn: "15 July 2017"
}];

var Index = function Index() {
	return _react2.default.createElement(_index.AppLayout, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement(_index2.Home, { links: links, __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}));
};

exports.default = Index;