'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../components/index');

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\pages\\about.js?entry';


var InfoCard = function InfoCard() {
	return _react2.default.createElement(_semanticUiReact.Card, { style: { margin: "auto" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement(_semanticUiReact.Card.Content, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement(_semanticUiReact.Card.Header, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, 'Vardhman Singh'), _react2.default.createElement(_semanticUiReact.Card.Meta, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, 'is still wondering what to write here..'), _react2.default.createElement(_semanticUiReact.Card.Description, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, 'Scala/Java/Javascript developer by day, much the same by night.', _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}), ' Currently obsessed with functional programming!')));
};

var About = function About() {
	return _react2.default.createElement(_index.AppLayout, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement(_semanticUiReact.Container, { textAlign: 'center', __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement('br', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}), _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', __source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, _react2.default.createElement(_semanticUiReact.Header.Content, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement(_semanticUiReact.Header.Subheader, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}))), _react2.default.createElement(InfoCard, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	})));
};

exports.default = About;