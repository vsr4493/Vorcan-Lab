'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../components/index');

var _index2 = require('../scenes/index');

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _prismicJavascript = require('prismic-javascript');

var _prismicJavascript2 = _interopRequireDefault(_prismicJavascript);

var _index3 = require('../config/index');

var _index4 = require('../utils/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/pages/index.js?entry';


var parsePostLinks = function parsePostLinks() {
	var posts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	if (posts.results && posts.results.length > 0) {
		var results = posts.results;
		return results.map(function (x) {
			return {
				id: x.id,
				header: x.data.blog_title.map(function (y) {
					return y.text;
				}).join("\n"),
				subHeader: "Lorem Ipsum",
				addedOn: x.first_publication_date.substring(0, x.first_publication_date.indexOf('T'))
			};
		});
	}
	return [];
};

var Index = function (_React$Component) {
	(0, _inherits3.default)(Index, _React$Component);

	function Index(props) {
		(0, _classCallCheck3.default)(this, Index);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

		_this.state = { posts: [], currentPost: undefined };
		return _this;
	}

	(0, _createClass3.default)(Index, [{
		key: 'renderPost',
		value: function renderPost(id) {
			this.setState({ currentPost: id });
		}
	}, {
		key: 'render',
		value: function render() {
			var currentPostID = this.state.currentPost;
			var posts = this.props.posts;

			var links = parsePostLinks(posts);
			return _react2.default.createElement(_index.AppLayout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, typeof currentPostID != "undefined" ? _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, 'Placeholder for a post') : _react2.default.createElement(_index2.Home, { links: links, renderPost: this.renderPost.bind(this), __source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}));
		}
	}]);

	return Index;
}(_react2.default.Component);

Index.getInitialProps = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
		var endPoint, api, queryResult;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						endPoint = _index3.ApiConfig.endPoint;
						_context.next = 4;
						return _prismicJavascript2.default.getApi(endPoint).catch((0, _index4.translateError)("No Api found"));

					case 4:
						api = _context.sent;
						_context.next = 7;
						return api.query(_prismicJavascript2.default.Predicates.at('document.type', 'blog_post')).catch((0, _index4.translateError)("No Posts found"));

					case 7:
						queryResult = _context.sent;

						console.log(queryResult);
						return _context.abrupt('return', {
							posts: queryResult
						});

					case 12:
						_context.prev = 12;
						_context.t0 = _context['catch'](0);

						console.log(_context.t0);
						return _context.abrupt('return', {
							posts: []
						});

					case 16:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[0, 12]]);
	}));

	return function (_x2) {
		return _ref.apply(this, arguments);
	};
}();

exports.default = Index;