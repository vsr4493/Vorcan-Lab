
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Layout = __webpack_require__(890);

Object.keys(_Layout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Layout[key];
    }
  });
});

var _Post = __webpack_require__(892);

Object.keys(_Post).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Post[key];
    }
  });
});

var _Sidebar = __webpack_require__(893);

Object.keys(_Sidebar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Sidebar[key];
    }
  });
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/index.js"); } } })();

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Facade = __webpack_require__(894);

Object.keys(_Facade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Facade[key];
    }
  });
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/common/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/common/index.js"); } } })();

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiConfig = __webpack_require__(900);

Object.keys(_ApiConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ApiConfig[key];
    }
  });
});

var _AppRoutes = __webpack_require__(901);

Object.keys(_AppRoutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AppRoutes[key];
    }
  });
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/config/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/config/index.js"); } } })();

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(658);

var _index2 = __webpack_require__(904);

var _isomorphicUnfetch = __webpack_require__(762);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _prismicJavascript = __webpack_require__(889);

var _prismicJavascript2 = _interopRequireDefault(_prismicJavascript);

var _index3 = __webpack_require__(660);

var _index4 = __webpack_require__(905);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppLayout = undefined;

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _link = __webpack_require__(595);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = __webpack_require__(556);

var _index = __webpack_require__(658);

var _index2 = __webpack_require__(660);

var _styles = __webpack_require__(891);

var styles = _interopRequireWildcard(_styles);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/layout/Layout.js';


var AppLayout = function (_React$Component) {
	(0, _inherits3.default)(AppLayout, _React$Component);

	function AppLayout(props) {
		(0, _classCallCheck3.default)(this, AppLayout);

		var _this = (0, _possibleConstructorReturn3.default)(this, (AppLayout.__proto__ || (0, _getPrototypeOf2.default)(AppLayout)).call(this, props));

		_this.state = {
			sidebarVisible: true,
			contentVisible: false
		};
		return _this;
	}

	(0, _createClass3.default)(AppLayout, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({
				contentVisible: true
			});
		}
	}, {
		key: 'toggleSidebar',
		value: function toggleSidebar() {
			this.setState({ sidebarVisible: !this.state.sidebarVisible });
		}
	}, {
		key: 'setActivePage',
		value: function setActivePage(page) {
			this.setState({ activePage: page });
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    sidebarVisible = _state.sidebarVisible,
			    minHeight = _state.minHeight,
			    contentVisible = _state.contentVisible;

			var showContent = contentVisible ? "block" : "none";
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement('title', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, 'Vorcan\'s Lab'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0 width=device-width', __source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css', __source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/style.css', __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			})), _react2.default.createElement(_semanticUiReact.Container, { fluid: true, style: styles.container, __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement(_semanticUiReact.Sidebar.Pushable, { as: 'div', __source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement(_index.AppSidebar, {
				propStyle: { width: styles.sidebarSize },
				links: _index2.AppRoutes.sidebarLinks,
				activePage: this.state.activePage,
				setActivePage: this.setActivePage.bind(this),
				toggleSidebar: this.toggleSidebar.bind(this),
				visible: sidebarVisible,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}), _react2.default.createElement(_semanticUiReact.Sidebar.Pusher, { style: { minHeight: "100vh", display: showContent }, __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement('div', { style: { marginLeft: styles.sidebarSize }, __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, this.props.children)))));
		}
	}]);

	return AppLayout;
}(_react2.default.Component);

exports.AppLayout = AppLayout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/layout/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/layout/Layout.js"); } } })();

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = {
	backgroundColor: "#ECECEC",
	marginTop: 0,
	marginBottom: 0
};
var sidebarSize = "200px";

exports.container = container;
exports.sidebarSize = sidebarSize;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/layout/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/layout/styles.js"); } } })();

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Post = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(556);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/vorcan/Vorcan/Vorcan.me/components/post/Post.js";


var PostHeader = function PostHeader(_ref) {
	var title = _ref.title;

	return _react2.default.createElement(_semanticUiReact.Header, { as: "h2", __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, title.text);
};
var PostBody = function PostBody(_ref2) {
	var content = _ref2.content;

	return _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, content.length > 0 ? content.map(function (data) {
		return _react2.default.createElement("article", {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 15
			}
		}, _react2.default.createElement("p", {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 16
			}
		}, " ", data.text, " "), _react2.default.createElement("br", {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 17
			}
		}));
	}) : _react2.default.createElement("p", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, "No post found"));
};

var Post = function Post(_ref3) {
	var post = _ref3.post;

	var result = post && post["results"] && post["results"] && post["results"].length > 0 && post["results"][0] || {};
	var content = result.data && result.data.content || [];
	var title = result.data && result["data"]["page_title"] && result["data"]["page_title"][0] || "";
	return _react2.default.createElement(_semanticUiReact.Container, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, _react2.default.createElement(PostHeader, { title: title, __source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}), _react2.default.createElement(PostBody, { content: content, __source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}));
};

exports.Post = Post;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/post/Post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/post/Post.js"); } } })();

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppSidebar = undefined;

var _assign = __webpack_require__(93);

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(556);

var _Logo = __webpack_require__(896);

var _Logo2 = _interopRequireDefault(_Logo);

var _MenuItem = __webpack_require__(898);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _index = __webpack_require__(659);

var _styles = __webpack_require__(899);

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/sidebar/Sidebar.js';


var AppSidebar = function AppSidebar(_ref) {
  var visible = _ref.visible,
      links = _ref.links,
      toggleSidebar = _ref.toggleSidebar,
      activePage = _ref.activePage,
      setActivePage = _ref.setActivePage,
      propStyle = _ref.propStyle;
  return _react2.default.createElement(_semanticUiReact.Sidebar, { as: 'div',
    animation: 'overlay', width: 'wide', visible: visible,
    style: (0, _assign2.default)({}, styles.sidebar, propStyle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_semanticUiReact.Menu, { icon: 'labeled', vertical: true, inverted: true, fluid: true, style: styles.menu, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_index.Facade, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_semanticUiReact.Menu.Item, { header: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_Logo2.default, { toggleSidebar: toggleSidebar, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), links.map(function (link, index) {
    return _react2.default.createElement(_MenuItem2.default, { key: index, link: link, setActivePage: setActivePage, activePage: activePage, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    });
  })));
};

exports.AppSidebar = AppSidebar;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/Sidebar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/Sidebar.js"); } } })();

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Facade = undefined;

var _from = __webpack_require__(144);

var _from2 = _interopRequireDefault(_from);

var _assign = __webpack_require__(93);

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(895);

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/sidebar/common/Facade.js';


var Outer = function Outer(props) {
	return _react2.default.createElement('div', { style: styles.outer, __source: {
			fileName: _jsxFileName,
			lineNumber: 3
		}
	}, props.children);
};

var Single = function Single(_ref) {
	var styleOverride = _ref.styleOverride;

	return _react2.default.createElement('div', {
		style: (0, _assign2.default)({}, styles.inner, styleOverride), __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	});
};

var Facade = function Facade() {
	return _react2.default.createElement(Outer, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, (0, _from2.default)(Array(3).keys()).map(function (counter, index) {
		return _react2.default.createElement(Single, { key: index, styleOverride: {
				width: counter * 20 + '%',
				left: 40 + counter * 25 + '%'
			}, __source: {
				fileName: _jsxFileName,
				lineNumber: 22
			}
		});
	}));
};

exports.Facade = Facade;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/common/Facade.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/common/Facade.js"); } } })();

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var outer = {
	position: "absolute",
	display: "block",
	width: "100%",
	height: "100%",
	top: "0px",
	left: "0px",
	overflow: "hidden"
};
var inner = {
	backgroundColor: "#934141",
	height: "100%",
	position: "absolute",
	bottom: "0%",
	transform: "skewX(20deg)",
	transformOrigin: "bottom left"
};

exports.outer = outer;
exports.inner = inner;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/common/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/common/styles.js"); } } })();

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(556);

var _styles = __webpack_require__(897);

var styles = _interopRequireWildcard(_styles);

var _index = __webpack_require__(659);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/sidebar/logo/Logo.js';


var Logo = function Logo(_ref) {
	var toggleSidebar = _ref.toggleSidebar;
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', style: styles.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_semanticUiReact.Header.Content, { style: { marginLeft: "10px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement('sup', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, 'Vorcan\'s'), _react2.default.createElement('sub', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, 'Lab'))));
};

exports.default = Logo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/logo/Logo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/logo/Logo.js"); } } })();

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = {
	color: "#fff",
	fontSize: "24px",
	padding: "10px"
};

exports.container = container;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/logo/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/logo/styles.js"); } } })();

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(556);

var _link = __webpack_require__(595);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/sidebar/menuItem/MenuItem.js';


var MenuItem = function MenuItem(_ref) {
  var link = _ref.link,
      activePage = _ref.activePage,
      setActivePage = _ref.setActivePage;
  return _react2.default.createElement(_semanticUiReact.Menu.Item, { className: 'custom', fitted: 'vertical', name: link.title, size: 'large', active: activePage === link.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { href: link.url, onClick: function onClick() {
      return setActivePage(link.title);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_semanticUiReact.Button, { className: 'button', fluid: true, basic: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_semanticUiReact.Icon, { circular: true, size: 'large', inverted: true, name: link.icon, color: 'teal', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('span', { className: 'ui sub header', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, link.title))), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, '\n      \t.ui.basic.button{\n      \t\tborder-radius:0 !important;\n      \t}\n      \t.ui.basic.button:hover{\n      \t \tbackground-color:#ECECEC !important;\t\n      \t}\n      \t.ui.basic.button:hover .ui.sub.header{\n      \t\tcolor:#823030; \n      \t}\n      \t.ui.basic.button .ui.sub.header{\n      \t\tcolor:#fff;\n      \t}\n      \t\n      '));
};

exports.default = MenuItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/menuItem/MenuItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/menuItem/MenuItem.js"); } } })();

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var sidebar = {
	borderRadius: "0"
};

var menu = {
	minHeight: "100%",
	borderRadius: "0",
	backgroundColor: "#823030"
};

var menuItem = {
	backgroundColor: "#FEFAE0"
};

exports.menu = menu;
exports.sidebar = sidebar;
exports.menuItem = menuItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/styles.js"); } } })();

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var ApiConfig = {
	endPoint: "https://vorcan.prismic.io/api/v2"
};

exports.ApiConfig = ApiConfig;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/config/ApiConfig.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/config/ApiConfig.js"); } } })();

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var AppRoutes = {
	sidebarLinks: [{
		url: "/",
		title: "Home",
		icon: "home"
	}, {
		url: "/about",
		title: "About",
		icon: "user"
	}]
};

exports.AppRoutes = AppRoutes;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/config/AppRoutes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/config/AppRoutes.js"); } } })();

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Home = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(556);

var _link = __webpack_require__(595);

var _link2 = _interopRequireDefault(_link);

var _styles = __webpack_require__(903);

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/scenes/home/Home.js';


var PostLink = function PostLink(_ref) {
	var link = _ref.link,
	    renderPost = _ref.renderPost;

	return _react2.default.createElement(_semanticUiReact.Grid, { centered: true, columns: 1, __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_semanticUiReact.Segment, { style: styles.postLink, __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(_semanticUiReact.Label, { color: 'blue', size: 'mini', ribbon: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, link.addedOn), _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', style: { marginLeft: "20px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement(_semanticUiReact.Header.Content, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement('a', { style: { cursor: "pointer" }, onClick: function onClick() {
			return renderPost(link.id);
		}, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, link.header)), _react2.default.createElement(_semanticUiReact.Header.Subheader, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, link.subHeader)))));
};

var Home = function Home(_ref2) {
	var links = _ref2.links,
	    renderPost = _ref2.renderPost;

	return _react2.default.createElement(_semanticUiReact.Container, { style: styles.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, links.map(function (link, index) {
		return _react2.default.createElement(PostLink, { key: index, link: link, renderPost: renderPost, __source: {
				fileName: _jsxFileName,
				lineNumber: 30
			}
		});
	}));
};

exports.Home = Home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/scenes/home/Home.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/scenes/home/Home.js"); } } })();

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = {
	minHeight: "100vh",
	padding: "20px 40px"
};

var postLink = {
	backgroundColor: "#F5F5F5",
	borderTop: "2px solid #263238",
	borderRadius: 0
};

exports.container = container;
exports.postLink = postLink;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/scenes/home/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/scenes/home/styles.js"); } } })();

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(902);

Object.keys(_Home).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Home[key];
    }
  });
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/scenes/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/scenes/index.js"); } } })();

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _translateError = __webpack_require__(906);

Object.keys(_translateError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _translateError[key];
    }
  });
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/utils/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/utils/index.js"); } } })();

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var translateError = function translateError(msg) {
  var newErr = new Error(msg);
  return function (e) {
    newErr.originalError = e;
    throw newErr;
  };
};

exports.translateError = translateError;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/utils/translateError.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/utils/translateError.js"); } } })();

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(754);


/***/ })

},[991]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanM/YzA3YzVhYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvY29tbW9uL2luZGV4LmpzP2MwN2M1YWEiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2luZGV4LmpzP2MwN2M1YWEiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/YzA3YzVhYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanM/YzA3YzVhYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zdHlsZXMuanM/YzA3YzVhYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvUG9zdC5qcz9jMDdjNWFhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyLmpzPzYxZjFhZDAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyL2NvbW1vbi9GYWNhZGUuanM/NjFmMWFkMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvY29tbW9uL3N0eWxlcy5qcz82MWYxYWQwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lkZWJhci9sb2dvL0xvZ28uanM/NjFmMWFkMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvbG9nby9zdHlsZXMuanM/NjFmMWFkMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvbWVudUl0ZW0vTWVudUl0ZW0uanM/NjFmMWFkMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvc3R5bGVzLmpzPzYxZjFhZDAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL0FwaUNvbmZpZy5qcz82MWYxYWQwIiwid2VicGFjazovLy8uL2NvbmZpZy9BcHBSb3V0ZXMuanM/NjFmMWFkMCIsIndlYnBhY2s6Ly8vLi9zY2VuZXMvaG9tZS9Ib21lLmpzPzYxZjFhZDAiLCJ3ZWJwYWNrOi8vLy4vc2NlbmVzL2hvbWUvc3R5bGVzLmpzPzYxZjFhZDAiLCJ3ZWJwYWNrOi8vLy4vc2NlbmVzL2luZGV4LmpzPzYxZjFhZDAiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaW5kZXguanM/NjFmMWFkMCIsIndlYnBhY2s6Ly8vLi91dGlscy90cmFuc2xhdGVFcnJvci5qcz82MWYxYWQwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vbGF5b3V0L0xheW91dCc7XG5leHBvcnQgKiBmcm9tICcuL3Bvc3QvUG9zdCc7XG5leHBvcnQgKiBmcm9tICcuL3NpZGViYXIvU2lkZWJhcic7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5kZXguanMiLCJleHBvcnQgKiBmcm9tIFwiLi9GYWNhZGVcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NpZGViYXIvY29tbW9uL2luZGV4LmpzIiwiZXhwb3J0ICogZnJvbSAnLi9BcGlDb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9BcHBSb3V0ZXMnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FwcExheW91dCxQb3N0fSBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7SG9tZX0gZnJvbSAnLi4vc2NlbmVzL2luZGV4JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IFByaXNtaWMgZnJvbSAncHJpc21pYy1qYXZhc2NyaXB0JztcbmltcG9ydCB7QXBpQ29uZmlnfSBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHt0cmFuc2xhdGVFcnJvcn0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnO1xuXG5jb25zdCBwYXJzZVBvc3RMaW5rcyA9IChwb3N0cz17fSkgPT57XG5cdGlmKHBvc3RzLnJlc3VsdHMgJiYgcG9zdHMucmVzdWx0cy5sZW5ndGg+MCl7XG5cdFx0bGV0IHJlc3VsdHMgPSBwb3N0cy5yZXN1bHRzO1xuXHRcdHJldHVybiByZXN1bHRzLm1hcCgoeCkgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aWQ6IHguaWQsXG5cdFx0XHRcdGhlYWRlcjogeC5kYXRhLmJsb2dfdGl0bGUubWFwKHkgPT4geS50ZXh0KS5qb2luKFwiXFxuXCIpLFxuXHRcdFx0XHRzdWJIZWFkZXI6IFwiTG9yZW0gSXBzdW1cIixcblx0XHRcdFx0YWRkZWRPbjogeC5maXJzdF9wdWJsaWNhdGlvbl9kYXRlLnN1YnN0cmluZygwLCB4LmZpcnN0X3B1YmxpY2F0aW9uX2RhdGUuaW5kZXhPZignVCcpKVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBbXTtcbn1cblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtwb3N0czogW10sIGN1cnJlbnRQb3N0OiB1bmRlZmluZWR9O1xuXHR9XG5cdHJlbmRlclBvc3QoaWQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQb3N0OmlkfSk7XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgY3VycmVudFBvc3RJRCA9IHRoaXMuc3RhdGUuY3VycmVudFBvc3Q7XG5cdFx0Y29uc3Qge3Bvc3RzfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgbGlua3MgPSBwYXJzZVBvc3RMaW5rcyhwb3N0cyk7IFxuXHRcdHJldHVybihcblx0XHRcdDxBcHBMYXlvdXQ+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodHlwZW9mIGN1cnJlbnRQb3N0SUQhPVwidW5kZWZpbmVkXCIpP1xuXHRcdFx0XHRcdFx0PGRpdj5QbGFjZWhvbGRlciBmb3IgYSBwb3N0PC9kaXY+XG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdDxIb21lIGxpbmtzPXtsaW5rc30gcmVuZGVyUG9zdCA9IHt0aGlzLnJlbmRlclBvc3QuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L0FwcExheW91dD5cblx0XHQpO1xuXHR9XG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpe1xuXHR0cnl7XG5cdFx0bGV0IGVuZFBvaW50ID0gQXBpQ29uZmlnLmVuZFBvaW50O1xuXHRcdGxldCBhcGkgPSBhd2FpdCBQcmlzbWljLmdldEFwaShlbmRQb2ludCkuY2F0Y2godHJhbnNsYXRlRXJyb3IoXCJObyBBcGkgZm91bmRcIikpO1xuXHRcdGxldCBxdWVyeVJlc3VsdCA9IGF3YWl0IGFwaS5xdWVyeShcblx0XHRcdFx0UHJpc21pYy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ2Jsb2dfcG9zdCcpXG5cdFx0XHQpLmNhdGNoKHRyYW5zbGF0ZUVycm9yKFwiTm8gUG9zdHMgZm91bmRcIikpO1xuXHRcdGNvbnNvbGUubG9nKHF1ZXJ5UmVzdWx0KTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cG9zdHM6cXVlcnlSZXN1bHRcblx0XHR9O1xuXHR9Y2F0Y2goZXJyKXtcblx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRwb3N0czpbXVxuXHRcdH07XG5cdH1cbn1cblx0XG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge0NvbnRhaW5lcixTaWRlYmFyLCBTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7QXBwU2lkZWJhcn0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtBcHBSb3V0ZXN9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQXBwTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaWRlYmFyVmlzaWJsZTp0cnVlLFxuXHRcdFx0Y29udGVudFZpc2libGU6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y29udGVudFZpc2libGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXHR0b2dnbGVTaWRlYmFyKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2lkZWJhclZpc2libGU6ICF0aGlzLnN0YXRlLnNpZGViYXJWaXNpYmxlfSk7XG5cdH1cblx0c2V0QWN0aXZlUGFnZShwYWdlKXtcblx0XHR0aGlzLnNldFN0YXRlKHthY3RpdmVQYWdlOiBwYWdlfSk7XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3Qge3NpZGViYXJWaXNpYmxlLCBtaW5IZWlnaHQsIGNvbnRlbnRWaXNpYmxlfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3Qgc2hvd0NvbnRlbnQgPSBjb250ZW50VmlzaWJsZT9cImJsb2NrXCI6XCJub25lXCI7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5Wb3JjYW4ncyBMYWI8L3RpdGxlPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMTEvc2VtYW50aWMubWluLmNzc1wiPjwvbGluaz5cblx0XHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvc3R5bGUuY3NzXCI+PC9saW5rPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxDb250YWluZXIgZmx1aWQgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0XHRcdDxTaWRlYmFyLlB1c2hhYmxlIGFzPVwiZGl2XCI+XG5cdFx0XHRcdFx0XHQ8QXBwU2lkZWJhclxuXHRcdFx0XHRcdFx0XHRwcm9wU3R5bGU9e3t3aWR0aDogc3R5bGVzLnNpZGViYXJTaXplfX0gXG5cdFx0XHRcdFx0XHRcdGxpbmtzPXtBcHBSb3V0ZXMuc2lkZWJhckxpbmtzfSBcblx0XHRcdFx0XHRcdFx0YWN0aXZlUGFnZT17dGhpcy5zdGF0ZS5hY3RpdmVQYWdlfSBcblx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlUGFnZT17dGhpcy5zZXRBY3RpdmVQYWdlLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0XHR0b2dnbGVTaWRlYmFyPXt0aGlzLnRvZ2dsZVNpZGViYXIuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0dmlzaWJsZT17c2lkZWJhclZpc2libGV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFNpZGViYXIuUHVzaGVyIHN0eWxlPXt7bWluSGVpZ2h0OlwiMTAwdmhcIiwgZGlzcGxheTpzaG93Q29udGVudH19PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpzdHlsZXMuc2lkZWJhclNpemV9fT5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L1NpZGViYXIuUHVzaGVyPlxuXHRcdFx0XHRcdDwvU2lkZWJhci5QdXNoYWJsZT5cblx0XHRcdFx0PC9Db250YWluZXI+XHRcblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cdFxuXG5leHBvcnQge0FwcExheW91dH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiY29uc3QgY29udGFpbmVyID0gIHtcblx0YmFja2dyb3VuZENvbG9yOiBcIiNFQ0VDRUNcIixcblx0bWFyZ2luVG9wOjAsXG5cdG1hcmdpbkJvdHRvbTowXG59XG5jb25zdCBzaWRlYmFyU2l6ZSA9IFwiMjAwcHhcIiBcblxuXG5leHBvcnQge2NvbnRhaW5lciwgc2lkZWJhclNpemV9O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9zdHlsZXMuanMiLCJpbXBvcnQge0hlYWRlciwgQ29udGFpbmVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmNvbnN0IFBvc3RIZWFkZXIgPSAoe3RpdGxlfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxIZWFkZXIgYXM9XCJoMlwiPnt0aXRsZS50ZXh0fTwvSGVhZGVyPlxuXHQpO1xufVxuY29uc3QgUG9zdEJvZHkgPSAoe2NvbnRlbnR9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdHtcblx0XHRcdFx0Y29udGVudC5sZW5ndGg+MD9cblx0XHRcdFx0XHRjb250ZW50Lm1hcCggXG5cdFx0XHRcdFx0XHRkYXRhID0+IChcblx0XHRcdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XHR7ZGF0YS50ZXh0fSA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGJyLz5cblx0XHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0PHA+Tm8gcG9zdCBmb3VuZDwvcD5cblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcblx0bGV0IHJlc3VsdCA9IHBvc3QgJiYgcG9zdFtcInJlc3VsdHNcIl0gJiYgcG9zdFtcInJlc3VsdHNcIl0gJiYgcG9zdFtcInJlc3VsdHNcIl0ubGVuZ3RoPjAgJiYgcG9zdFtcInJlc3VsdHNcIl1bMF0gfHwge307XG5cdGxldCBjb250ZW50ID0gcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuY29udGVudCB8fCBbXTtcblx0bGV0IHRpdGxlID0gcmVzdWx0LmRhdGEgJiYgcmVzdWx0W1wiZGF0YVwiXVtcInBhZ2VfdGl0bGVcIl0gJiYgcmVzdWx0W1wiZGF0YVwiXVtcInBhZ2VfdGl0bGVcIl1bMF0gfHwgXCJcIjtcblx0cmV0dXJuIChcblx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0PFBvc3RIZWFkZXIgdGl0bGU9e3RpdGxlfSAvPlxuXHRcdFx0PFBvc3RCb2R5IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG5cdFx0PC9Db250YWluZXI+XG5cdCk7XG59XG5cbmV4cG9ydCB7UG9zdH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wb3N0L1Bvc3QuanMiLCJpbXBvcnQgeyBTaWRlYmFyLCBTZWdtZW50LCBNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28vTG9nbyc7IFxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vbWVudUl0ZW0vTWVudUl0ZW0nO1xuaW1wb3J0IHtGYWNhZGV9IGZyb20gJy4vY29tbW9uL2luZGV4JztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cblxuY29uc3QgQXBwU2lkZWJhciA9ICh7dmlzaWJsZSxsaW5rcyx0b2dnbGVTaWRlYmFyLGFjdGl2ZVBhZ2UsIHNldEFjdGl2ZVBhZ2UsIHByb3BTdHlsZX0pID0+IChcbiAgPFNpZGViYXIgYXM9XCJkaXZcIiBcbiAgICBhbmltYXRpb249J292ZXJsYXknIHdpZHRoPSd3aWRlJyB2aXNpYmxlPXt2aXNpYmxlfSBcbiAgICBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSxzdHlsZXMuc2lkZWJhcixwcm9wU3R5bGUpfVxuICA+XG4gICAgPE1lbnUgIGljb249J2xhYmVsZWQnIHZlcnRpY2FsIGludmVydGVkIGZsdWlkIHN0eWxlPXtzdHlsZXMubWVudX0+XG4gICAgICA8RmFjYWRlIC8+XG4gICAgICAgPE1lbnUuSXRlbSBoZWFkZXI+XG4gICAgICAgIDxMb2dvIHRvZ2dsZVNpZGViYXI9e3RvZ2dsZVNpZGViYXJ9Lz5cbiAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgIHtcbiAgICAgICAgbGlua3MubWFwKChsaW5rLGluZGV4KSA9PiBcbiAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpbmRleH0gbGluaz17bGlua30gc2V0QWN0aXZlUGFnZT17c2V0QWN0aXZlUGFnZX0gYWN0aXZlUGFnZT17YWN0aXZlUGFnZX0vPilcbiAgICAgIH1cbiAgICA8L01lbnU+XG4gIDwvU2lkZWJhcj5cbik7XG5cbmV4cG9ydCB7QXBwU2lkZWJhcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXIuanMiLCJpbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBPdXRlciA9IChwcm9wcykgPT4gKDxkaXYgc3R5bGU9e3N0eWxlcy5vdXRlcn0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PilcblxuY29uc3QgU2luZ2xlID0gKHtzdHlsZU92ZXJyaWRlfSkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGRpdiBcblx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0e30sXG5cdFx0XHRcdFx0XHRzdHlsZXMuaW5uZXIsXG5cdFx0XHRcdFx0XHRzdHlsZU92ZXJyaWRlXG5cdFx0XHRcdFx0KX0+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmNvbnN0IEZhY2FkZSA9ICgpID0+IChcblxuXHQ8T3V0ZXI+XG5cdFx0e1xuXHRcdFx0QXJyYXkuZnJvbShBcnJheSgzKS5rZXlzKCkpLm1hcCgoY291bnRlcixpbmRleCkgPT4gPFNpbmdsZSBrZXk9e2luZGV4fSBzdHlsZU92ZXJyaWRlPXt7XG5cdFx0XHRcdHdpZHRoOmAke2NvdW50ZXIqMjB9JWAsXG5cdFx0XHRcdGxlZnQ6IGAkezQwK2NvdW50ZXIqMjV9JWBcblx0XHRcdH19Lz4pXG5cdFx0fVxuXHQ8L091dGVyPlxuKVxuXG5cblxuZXhwb3J0IHtGYWNhZGV9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2lkZWJhci9jb21tb24vRmFjYWRlLmpzIiwiY29uc3Qgb3V0ZXIgPSB7XG5cdHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcblx0ZGlzcGxheTpcImJsb2NrXCIsXG5cdHdpZHRoOlwiMTAwJVwiLFxuXHRoZWlnaHQ6XCIxMDAlXCIsXG5cdHRvcDpcIjBweFwiLFxuXHRsZWZ0OlwiMHB4XCIsXG5cdG92ZXJmbG93OlwiaGlkZGVuXCIsXG59XG5jb25zdCBpbm5lciA9IHtcblx0YmFja2dyb3VuZENvbG9yOiBcIiM5MzQxNDFcIiwgXG5cdGhlaWdodDpcIjEwMCVcIixcblx0cG9zaXRpb246XCJhYnNvbHV0ZVwiLFxuXHRib3R0b206XCIwJVwiLFxuXHR0cmFuc2Zvcm06XCJza2V3WCgyMGRlZylcIixcblx0dHJhbnNmb3JtT3JpZ2luOiBcImJvdHRvbSBsZWZ0XCIsXG59XG5cbmV4cG9ydCB7b3V0ZXIsIGlubmVyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NpZGViYXIvY29tbW9uL3N0eWxlcy5qcyIsImltcG9ydCB7SGVhZGVyLEljb24sQnV0dG9uLERpdmlkZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQge0ZhY2FkZX0gZnJvbSAnLi4vY29tbW9uL2luZGV4JzsgXG5cbmNvbnN0IExvZ28gPSAoe3RvZ2dsZVNpZGViYXJ9KSA9PiAoXG5cdDxkaXY+XG5cdDxIZWFkZXIgYXM9J2gxJyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxuXHRcdDxIZWFkZXIuQ29udGVudCBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCJ9fT5cblx0XHRcdFx0PHN1cD5Wb3JjYW4nczwvc3VwPlxuXHRcdFx0XHQ8c3ViPkxhYjwvc3ViPlxuXHRcdDwvSGVhZGVyLkNvbnRlbnQ+XG5cdDwvSGVhZGVyPlxuXHQ8L2Rpdj5cbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NpZGViYXIvbG9nby9Mb2dvLmpzIiwiY29uc3QgY29udGFpbmVyID0ge1xuXHRjb2xvcjogXCIjZmZmXCIsXG5cdGZvbnRTaXplOiBcIjI0cHhcIixcblx0cGFkZGluZzogXCIxMHB4XCJcbn1cblxuZXhwb3J0IHtjb250YWluZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2lkZWJhci9sb2dvL3N0eWxlcy5qcyIsImltcG9ydCB7IEJ1dHRvbiwgTWVudSwgSW1hZ2UsIEljb24sIEhlYWRlcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTWVudUl0ZW0gPSAoe2xpbmssYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZX0pID0+IChcbiAgICA8TWVudS5JdGVtIGNsYXNzTmFtZT1cImN1c3RvbVwiIGZpdHRlZD1cInZlcnRpY2FsXCIgbmFtZT17bGluay50aXRsZX0gc2l6ZT1cImxhcmdlXCIgYWN0aXZlPXthY3RpdmVQYWdlID09PSBsaW5rLnRpdGxlfT5cbiAgICAgIDxMaW5rIGhyZWY9e2xpbmsudXJsfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVQYWdlKGxpbmsudGl0bGUpfT5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBmbHVpZCBiYXNpYyAgPlxuICAgICAgICAgIDxJY29uIGNpcmN1bGFyIHNpemU9XCJsYXJnZVwiIGludmVydGVkIG5hbWU9e2xpbmsuaWNvbn0gY29sb3I9XCJ0ZWFsXCIvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVpIHN1YiBoZWFkZXJcIj57bGluay50aXRsZX08L3NwYW4+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHN0eWxlPlxuICAgICAge2BcbiAgICAgIFx0LnVpLmJhc2ljLmJ1dHRvbntcbiAgICAgIFx0XHRib3JkZXItcmFkaXVzOjAgIWltcG9ydGFudDtcbiAgICAgIFx0fVxuICAgICAgXHQudWkuYmFzaWMuYnV0dG9uOmhvdmVye1xuICAgICAgXHQgXHRiYWNrZ3JvdW5kLWNvbG9yOiNFQ0VDRUMgIWltcG9ydGFudDtcdFxuICAgICAgXHR9XG4gICAgICBcdC51aS5iYXNpYy5idXR0b246aG92ZXIgLnVpLnN1Yi5oZWFkZXJ7XG4gICAgICBcdFx0Y29sb3I6IzgyMzAzMDsgXG4gICAgICBcdH1cbiAgICAgIFx0LnVpLmJhc2ljLmJ1dHRvbiAudWkuc3ViLmhlYWRlcntcbiAgICAgIFx0XHRjb2xvcjojZmZmO1xuICAgICAgXHR9XG4gICAgICBcdFxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9NZW51Lkl0ZW0+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51SXRlbTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NpZGViYXIvbWVudUl0ZW0vTWVudUl0ZW0uanMiLCJjb25zdCBzaWRlYmFyID0ge1xuXHRib3JkZXJSYWRpdXM6XCIwXCIsXG59XG5cbmNvbnN0IG1lbnUgPSAge1xuXHRtaW5IZWlnaHQ6XCIxMDAlXCIsXG5cdGJvcmRlclJhZGl1czpcIjBcIixcblx0YmFja2dyb3VuZENvbG9yOlwiIzgyMzAzMFwiXG59XG5cbmNvbnN0IG1lbnVJdGVtID0ge1xuXHRiYWNrZ3JvdW5kQ29sb3I6XCIjRkVGQUUwXCIsXG59XG5cbmV4cG9ydCB7bWVudSwgc2lkZWJhciwgbWVudUl0ZW19O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NpZGViYXIvc3R5bGVzLmpzIiwiY29uc3QgQXBpQ29uZmlnID0ge1xuXHRlbmRQb2ludDogXCJodHRwczovL3ZvcmNhbi5wcmlzbWljLmlvL2FwaS92MlwiXG59XG5cbmV4cG9ydCB7QXBpQ29uZmlnfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9BcGlDb25maWcuanMiLCJjb25zdCBBcHBSb3V0ZXMgPSB7XG5cdHNpZGViYXJMaW5rczogW1xuXHRcdHtcblx0XHRcdHVybDogXCIvXCIsXG5cdFx0XHR0aXRsZTogXCJIb21lXCIsXG5cdFx0XHRpY29uOlwiaG9tZVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR1cmw6IFwiL2Fib3V0XCIsXG5cdFx0XHR0aXRsZTogXCJBYm91dFwiLFxuXHRcdFx0aWNvbjpcInVzZXJcIlxuXHRcdH1cblx0XVxufVxuXG5leHBvcnQge0FwcFJvdXRlc307XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL0FwcFJvdXRlcy5qcyIsImltcG9ydCB7RGl2aWRlciwgSGVhZGVyLCBSYWlsLEJ1dHRvbiwgQ29udGFpbmVyLCBTZWdtZW50LCBMYWJlbCxJY29uLCBHcmlkfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgUG9zdExpbmsgPSAoe2xpbmssIHJlbmRlclBvc3R9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PEdyaWQgY2VudGVyZWQgY29sdW1ucz17MX0+XG5cdFx0ICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEyfT5cblx0XHQgICBcdDxTZWdtZW50IHN0eWxlPXtzdHlsZXMucG9zdExpbmt9PlxuXHRcdFx0XHRcdDxMYWJlbCBjb2xvcj0nYmx1ZScgc2l6ZT1cIm1pbmlcIiByaWJib24+e2xpbmsuYWRkZWRPbn08L0xhYmVsPlxuXHRcdFx0XHRcdDxIZWFkZXIgYXM9XCJoMlwiIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjIwcHhcIn19PlxuXHRcdFx0XHRcdFx0PEhlYWRlci5Db250ZW50PlxuXHRcdFx0XHRcdFx0XHQ8YSBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IG9uQ2xpY2s9eygpID0+IHJlbmRlclBvc3QobGluay5pZCl9PlxuXHRcdFx0XHRcdFx0XHRcdHtsaW5rLmhlYWRlcn1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9IZWFkZXIuQ29udGVudD5cblx0XHRcdFx0XHRcdDxIZWFkZXIuU3ViaGVhZGVyPlxuXHRcdFx0XHRcdFx0XHR7bGluay5zdWJIZWFkZXJ9XG5cdFx0XHRcdFx0XHQ8L0hlYWRlci5TdWJoZWFkZXI+XG5cdFx0XHRcdFx0PC9IZWFkZXI+XG5cdFx0XHRcdDwvU2VnbWVudD5cblx0XHRcdDwvR3JpZC5Db2x1bW4+XG5cdFx0PC9HcmlkPlxuXHQpO1xufVxuXG5jb25zdCBIb21lID0gKHtsaW5rcyxyZW5kZXJQb3N0fSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxDb250YWluZXIgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0e2xpbmtzLm1hcCgobGluayxpbmRleCkgPT4gPFBvc3RMaW5rIGtleT17aW5kZXh9IGxpbms9e2xpbmt9IHJlbmRlclBvc3Q9e3JlbmRlclBvc3R9IC8+KX1cblx0XHQ8L0NvbnRhaW5lcj5cblx0KTtcbn1cblxuZXhwb3J0IHtIb21lfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY2VuZXMvaG9tZS9Ib21lLmpzIiwiY29uc3QgY29udGFpbmVyID0ge1xuXHRtaW5IZWlnaHQ6XCIxMDB2aFwiLFxuXHRwYWRkaW5nOlwiMjBweCA0MHB4XCJcbn07XG5cbmNvbnN0IHBvc3RMaW5rID0ge1xuXHRiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y1RjVGNVwiLFxuXHRib3JkZXJUb3A6IFwiMnB4IHNvbGlkICMyNjMyMzhcIixcblx0Ym9yZGVyUmFkaXVzOjBcbn1cblxuZXhwb3J0IHtjb250YWluZXIscG9zdExpbmt9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjZW5lcy9ob21lL3N0eWxlcy5qcyIsImV4cG9ydCAqIGZyb20gJy4vaG9tZS9Ib21lJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY2VuZXMvaW5kZXguanMiLCJleHBvcnQgKiBmcm9tICcuL3RyYW5zbGF0ZUVycm9yJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9pbmRleC5qcyIsImNvbnN0IHRyYW5zbGF0ZUVycm9yID0gKG1zZykgPT4ge1xuICB2YXIgbmV3RXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIHJldHVybiBlID0+IHsgXG4gICAgbmV3RXJyLm9yaWdpbmFsRXJyb3IgPSBlO1xuICAgIHRocm93IG5ld0VycjtcbiAgfVxufVxuXG5leHBvcnQge3RyYW5zbGF0ZUVycm9yfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy90cmFuc2xhdGVFcnJvci5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBYkE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBSkE7QUFBQTs7Ozs7QUFsQkE7QUFDQTtBQXdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUNBO0FBTUE7O0FBRUE7QUFBQTtBQUNBO0FBVkE7QUFBQTtBQVlBO0FBQ0E7QUFEQTs7QUFFQTtBQUFBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFHQTs7Ozs7QUFFQTtBQUFBO0FBR0E7QUFGQTs7OztBQUlBO0FBQUE7Ozs7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTkE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQTFDQTtBQUNBO0FBbURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBS0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTs7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQWRBO0FBQ0E7QUFtQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTs7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUdBO0FBRkE7QUFTQTtBQVRBO0FBQ0E7QUFIQTtBQUNBO0FBWUE7QUFFQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVJBO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFJQTtBQUhBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0FBSUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBS0E7QUFQQTtBQVBBO0FBQ0E7QUFhQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFaQTtBQUNBO0FBcUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUNBO0FBSUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        