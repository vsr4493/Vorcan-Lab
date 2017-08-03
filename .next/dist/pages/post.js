'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _prismicJavascript = require('prismic-javascript');

var _prismicJavascript2 = _interopRequireDefault(_prismicJavascript);

var _index = require('../config/index');

var _index2 = require('../utils/index');

var _index3 = require('../components/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\pages\\post.js?entry';


var Post = function Post(_ref) {
	var post = _ref.post;

	return _react2.default.createElement(_index3.Post, { post: post, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	});
};

Post.getInitialProps = function () {
	var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
		var id, endPoint, api, queryResult;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						id = context.query.id;
						_context.prev = 1;
						endPoint = _index.ApiConfig.endPoint;
						_context.next = 5;
						return _prismicJavascript2.default.getApi(endPoint).catch((0, _index2.translateError)("No Api found"));

					case 5:
						api = _context.sent;
						_context.next = 8;
						return api.query(_prismicJavascript2.default.Predicates.at('document.id', id)).catch((0, _index2.translateError)("No Posts found"));

					case 8:
						queryResult = _context.sent;

						console.log(queryResult);
						return _context.abrupt('return', {
							post: queryResult
						});

					case 13:
						_context.prev = 13;
						_context.t0 = _context['catch'](1);

						console.log(_context.t0);
						return _context.abrupt('return', {
							post: undefined
						});

					case 17:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[1, 13]]);
	}));

	return function (_x) {
		return _ref2.apply(this, arguments);
	};
}();

exports.default = Post;