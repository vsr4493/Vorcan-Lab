
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Layout = __webpack_require__(886);

Object.keys(_Layout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Layout[key];
    }
  });
});

var _Post = __webpack_require__(888);

Object.keys(_Post).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Post[key];
    }
  });
});

var _Sidebar = __webpack_require__(889);

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

var _Facade = __webpack_require__(890);

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

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(658);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/pages/index.js?entry';


var Index = function Index() {
	return _react2.default.createElement(_index.AppLayout, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	});
};

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

/***/ 886:
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

var _link = __webpack_require__(657);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = __webpack_require__(577);

var _index = __webpack_require__(658);

var _index2 = __webpack_require__(897);

var _styles = __webpack_require__(887);

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

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = {
	backgroundColor: "#ecf0f1",
	marginTop: 0,
	marginBottom: 0
};
var sidebarSize = "250px";

exports.container = container;
exports.sidebarSize = sidebarSize;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/layout/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/layout/styles.js"); } } })();

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Post = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(577);

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

/***/ 889:
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

var _semanticUiReact = __webpack_require__(577);

var _link = __webpack_require__(657);

var _link2 = _interopRequireDefault(_link);

var _Logo = __webpack_require__(892);

var _Logo2 = _interopRequireDefault(_Logo);

var _index = __webpack_require__(659);

var _styles = __webpack_require__(894);

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/sidebar/Sidebar.js';


var MenuItem = function MenuItem(_ref) {
  var link = _ref.link,
      activePage = _ref.activePage,
      setActivePage = _ref.setActivePage;
  return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: link.title, size: 'large', active: activePage === link.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { href: link.url, onClick: function onClick() {
      return setActivePage(link.title);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_semanticUiReact.Button, { size: 'large', color: 'black', inverted: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_semanticUiReact.Icon, { circular: true, size: 'large', inverted: true, name: link.icon, color: 'black', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), link.title)));
};

var AppSidebar = function AppSidebar(_ref2) {
  var visible = _ref2.visible,
      links = _ref2.links,
      toggleSidebar = _ref2.toggleSidebar,
      activePage = _ref2.activePage,
      setActivePage = _ref2.setActivePage,
      propStyle = _ref2.propStyle;
  return _react2.default.createElement(_semanticUiReact.Sidebar, { as: 'div',
    animation: 'overlay', width: 'wide', visible: visible,
    style: (0, _assign2.default)({}, styles.sidebar, propStyle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_semanticUiReact.Menu, { icon: 'labeled', vertical: true, inverted: true, fluid: true, style: styles.menu, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_index.Facade, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement(_semanticUiReact.Menu.Item, { header: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_Logo2.default, { toggleSidebar: toggleSidebar, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })), links.map(function (link, index) {
    return _react2.default.createElement(MenuItem, { link: link, setActivePage: setActivePage, activePage: activePage, __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    });
  })));
};

exports.AppSidebar = AppSidebar;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/Sidebar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/Sidebar.js"); } } })();

/***/ }),

/***/ 890:
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

var _styles = __webpack_require__(891);

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

	console.log(styleOverride);
	return _react2.default.createElement('div', {
		style: (0, _assign2.default)({}, styles.inner, styleOverride), __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	});
};

var Facade = function Facade() {
	return _react2.default.createElement(Outer, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, (0, _from2.default)(Array(3).keys()).map(function (counter, index) {
		return _react2.default.createElement(Single, { key: index, styleOverride: {
				width: counter * 20 + '%',
				left: counter * 30 + '%'
			}, __source: {
				fileName: _jsxFileName,
				lineNumber: 23
			}
		});
	}));
};

exports.Facade = Facade;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/common/Facade.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/common/Facade.js"); } } })();

/***/ }),

/***/ 891:
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
	backgroundColor: "#555",
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

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(577);

var _styles = __webpack_require__(893);

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

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = {
	color: "#fff",
	fontSize: "24px",
	padding: "30px"
};

exports.container = container;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/logo/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/logo/styles.js"); } } })();

/***/ }),

/***/ 894:
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
	borderRadius: "0"
};

exports.menu = menu;
exports.sidebar = sidebar;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/styles.js"); } } })();

/***/ }),

/***/ 895:
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

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var AppRoutes = {
	links: [{
		url: "/",
		title: "Home"
	}, {
		url: "/about",
		title: "About"
	}],
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

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiConfig = __webpack_require__(895);

Object.keys(_ApiConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ApiConfig[key];
    }
  });
});

var _AppRoutes = __webpack_require__(896);

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

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(753);


/***/ })

},[981]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanM/YjY0Zjk5NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvY29tbW9uL2luZGV4LmpzP2I2NGY5OTUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/YjY0Zjk5NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanM/YjY0Zjk5NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zdHlsZXMuanM/YjY0Zjk5NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvUG9zdC5qcz9iNjRmOTk1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyLmpzP2I2NGY5OTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyL2NvbW1vbi9GYWNhZGUuanM/YjY0Zjk5NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvY29tbW9uL3N0eWxlcy5qcz9iNjRmOTk1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lkZWJhci9sb2dvL0xvZ28uanM/YjY0Zjk5NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvbG9nby9zdHlsZXMuanM/YjY0Zjk5NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvc3R5bGVzLmpzP2I2NGY5OTUiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL0FwaUNvbmZpZy5qcz8yZGQzZjQ0Iiwid2VicGFjazovLy8uL2NvbmZpZy9BcHBSb3V0ZXMuanM/MmRkM2Y0NCIsIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanM/MmRkM2Y0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2xheW91dC9MYXlvdXQnO1xuZXhwb3J0ICogZnJvbSAnLi9wb3N0L1Bvc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9zaWRlYmFyL1NpZGViYXInO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2luZGV4LmpzIiwiZXhwb3J0ICogZnJvbSBcIi4vRmFjYWRlXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zaWRlYmFyL2NvbW1vbi9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FwcExheW91dH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleCc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuXHQ8QXBwTGF5b3V0PlxuXHQ8L0FwcExheW91dD5cbilcblx0XG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge0NvbnRhaW5lcixTaWRlYmFyLCBTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7QXBwU2lkZWJhcn0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtBcHBSb3V0ZXN9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQXBwTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaWRlYmFyVmlzaWJsZTp0cnVlLFxuXHRcdFx0Y29udGVudFZpc2libGU6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y29udGVudFZpc2libGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXHR0b2dnbGVTaWRlYmFyKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2lkZWJhclZpc2libGU6ICF0aGlzLnN0YXRlLnNpZGViYXJWaXNpYmxlfSk7XG5cdH1cblx0c2V0QWN0aXZlUGFnZShwYWdlKXtcblx0XHR0aGlzLnNldFN0YXRlKHthY3RpdmVQYWdlOiBwYWdlfSk7XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3Qge3NpZGViYXJWaXNpYmxlLCBtaW5IZWlnaHQsIGNvbnRlbnRWaXNpYmxlfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3Qgc2hvd0NvbnRlbnQgPSBjb250ZW50VmlzaWJsZT9cImJsb2NrXCI6XCJub25lXCI7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5Wb3JjYW4ncyBMYWI8L3RpdGxlPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMTEvc2VtYW50aWMubWluLmNzc1wiPjwvbGluaz5cblx0XHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvc3R5bGUuY3NzXCI+PC9saW5rPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxDb250YWluZXIgZmx1aWQgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0XHRcdDxTaWRlYmFyLlB1c2hhYmxlIGFzPVwiZGl2XCI+XG5cdFx0XHRcdFx0XHQ8QXBwU2lkZWJhclxuXHRcdFx0XHRcdFx0XHRwcm9wU3R5bGU9e3t3aWR0aDogc3R5bGVzLnNpZGViYXJTaXplfX0gXG5cdFx0XHRcdFx0XHRcdGxpbmtzPXtBcHBSb3V0ZXMuc2lkZWJhckxpbmtzfSBcblx0XHRcdFx0XHRcdFx0YWN0aXZlUGFnZT17dGhpcy5zdGF0ZS5hY3RpdmVQYWdlfSBcblx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlUGFnZT17dGhpcy5zZXRBY3RpdmVQYWdlLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0XHR0b2dnbGVTaWRlYmFyPXt0aGlzLnRvZ2dsZVNpZGViYXIuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0dmlzaWJsZT17c2lkZWJhclZpc2libGV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFNpZGViYXIuUHVzaGVyIHN0eWxlPXt7bWluSGVpZ2h0OlwiMTAwdmhcIiwgZGlzcGxheTpzaG93Q29udGVudH19PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpzdHlsZXMuc2lkZWJhclNpemV9fT5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L1NpZGViYXIuUHVzaGVyPlxuXHRcdFx0XHRcdDwvU2lkZWJhci5QdXNoYWJsZT5cblx0XHRcdFx0PC9Db250YWluZXI+XHRcblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cdFxuXG5leHBvcnQge0FwcExheW91dH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiY29uc3QgY29udGFpbmVyID0gIHtcblx0YmFja2dyb3VuZENvbG9yOiBcIiNlY2YwZjFcIixcblx0bWFyZ2luVG9wOjAsXG5cdG1hcmdpbkJvdHRvbTowXG59XG5jb25zdCBzaWRlYmFyU2l6ZSA9IFwiMjUwcHhcIiBcblxuXG5leHBvcnQge2NvbnRhaW5lciwgc2lkZWJhclNpemV9O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9zdHlsZXMuanMiLCJpbXBvcnQge0hlYWRlciwgQ29udGFpbmVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmNvbnN0IFBvc3RIZWFkZXIgPSAoe3RpdGxlfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxIZWFkZXIgYXM9XCJoMlwiPnt0aXRsZS50ZXh0fTwvSGVhZGVyPlxuXHQpO1xufVxuY29uc3QgUG9zdEJvZHkgPSAoe2NvbnRlbnR9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdHtcblx0XHRcdFx0Y29udGVudC5sZW5ndGg+MD9cblx0XHRcdFx0XHRjb250ZW50Lm1hcCggXG5cdFx0XHRcdFx0XHRkYXRhID0+IChcblx0XHRcdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XHR7ZGF0YS50ZXh0fSA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGJyLz5cblx0XHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0PHA+Tm8gcG9zdCBmb3VuZDwvcD5cblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcblx0bGV0IHJlc3VsdCA9IHBvc3QgJiYgcG9zdFtcInJlc3VsdHNcIl0gJiYgcG9zdFtcInJlc3VsdHNcIl0gJiYgcG9zdFtcInJlc3VsdHNcIl0ubGVuZ3RoPjAgJiYgcG9zdFtcInJlc3VsdHNcIl1bMF0gfHwge307XG5cdGxldCBjb250ZW50ID0gcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuY29udGVudCB8fCBbXTtcblx0bGV0IHRpdGxlID0gcmVzdWx0LmRhdGEgJiYgcmVzdWx0W1wiZGF0YVwiXVtcInBhZ2VfdGl0bGVcIl0gJiYgcmVzdWx0W1wiZGF0YVwiXVtcInBhZ2VfdGl0bGVcIl1bMF0gfHwgXCJcIjtcblx0cmV0dXJuIChcblx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0PFBvc3RIZWFkZXIgdGl0bGU9e3RpdGxlfSAvPlxuXHRcdFx0PFBvc3RCb2R5IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG5cdFx0PC9Db250YWluZXI+XG5cdCk7XG59XG5cbmV4cG9ydCB7UG9zdH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wb3N0L1Bvc3QuanMiLCJpbXBvcnQgeyBTaWRlYmFyLCBTZWdtZW50LCBCdXR0b24sIE1lbnUsIEltYWdlLCBJY29uLCBIZWFkZXIsIERpdmlkZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28vTG9nbyc7IFxuaW1wb3J0IHtGYWNhZGV9IGZyb20gJy4vY29tbW9uL2luZGV4JztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7IFxuXG5jb25zdCBNZW51SXRlbSA9ICh7bGluayxhY3RpdmVQYWdlLCBzZXRBY3RpdmVQYWdlfSkgPT4gKFxuICAgIDxNZW51Lkl0ZW0gbmFtZT17bGluay50aXRsZX0gc2l6ZT1cImxhcmdlXCIgYWN0aXZlPXthY3RpdmVQYWdlID09PSBsaW5rLnRpdGxlfT5cbiAgICAgIDxMaW5rIGhyZWY9e2xpbmsudXJsfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVQYWdlKGxpbmsudGl0bGUpfT5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cImJsYWNrXCIgaW52ZXJ0ZWQgPlxuICAgICAgICAgIDxJY29uIGNpcmN1bGFyIHNpemU9XCJsYXJnZVwiIGludmVydGVkIG5hbWU9e2xpbmsuaWNvbn0gY29sb3I9XCJibGFja1wiLz5cbiAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0xpbms+XG4gICAgPC9NZW51Lkl0ZW0+XG4pO1xuXG5cbmNvbnN0IEFwcFNpZGViYXIgPSAoe3Zpc2libGUsbGlua3MsdG9nZ2xlU2lkZWJhcixhY3RpdmVQYWdlLCBzZXRBY3RpdmVQYWdlLCBwcm9wU3R5bGV9KSA9PiAoXG4gIDxTaWRlYmFyIGFzPVwiZGl2XCIgXG4gICAgYW5pbWF0aW9uPSdvdmVybGF5JyB3aWR0aD0nd2lkZScgdmlzaWJsZT17dmlzaWJsZX0gXG4gICAgc3R5bGU9e09iamVjdC5hc3NpZ24oe30sc3R5bGVzLnNpZGViYXIscHJvcFN0eWxlKX1cbiAgPlxuICAgIDxNZW51ICBpY29uPSdsYWJlbGVkJyB2ZXJ0aWNhbCBpbnZlcnRlZCBmbHVpZCBzdHlsZT17c3R5bGVzLm1lbnV9PlxuICAgICAgPEZhY2FkZSAvPlxuICAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyPlxuICAgICAgICA8TG9nbyB0b2dnbGVTaWRlYmFyPXt0b2dnbGVTaWRlYmFyfS8+XG4gICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICB7XG4gICAgICAgIGxpbmtzLm1hcCgobGluayxpbmRleCkgPT4gPE1lbnVJdGVtIGxpbms9e2xpbmt9IHNldEFjdGl2ZVBhZ2U9e3NldEFjdGl2ZVBhZ2V9IGFjdGl2ZVBhZ2U9e2FjdGl2ZVBhZ2V9Lz4pXG4gICAgICB9XG4gICAgPC9NZW51PlxuICA8L1NpZGViYXI+XG4pO1xuXG5leHBvcnQge0FwcFNpZGViYXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyLmpzIiwiaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgT3V0ZXIgPSAocHJvcHMpID0+ICg8ZGl2IHN0eWxlPXtzdHlsZXMub3V0ZXJ9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj4pXG5cbmNvbnN0IFNpbmdsZSA9ICh7c3R5bGVPdmVycmlkZX0pID0+IHtcblx0Y29uc29sZS5sb2coc3R5bGVPdmVycmlkZSk7XG5cdHJldHVybihcblx0XHQ8ZGl2IFxuXHRcdFx0c3R5bGU9e1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHR7fSxcblx0XHRcdFx0XHRcdHN0eWxlcy5pbm5lcixcblx0XHRcdFx0XHRcdHN0eWxlT3ZlcnJpZGVcblx0XHRcdFx0XHQpfT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuY29uc3QgRmFjYWRlID0gKCkgPT4gKFxuXG5cdDxPdXRlcj5cblx0XHR7XG5cdFx0XHRBcnJheS5mcm9tKEFycmF5KDMpLmtleXMoKSkubWFwKChjb3VudGVyLGluZGV4KSA9PiA8U2luZ2xlIGtleT17aW5kZXh9IHN0eWxlT3ZlcnJpZGU9e3tcblx0XHRcdFx0d2lkdGg6YCR7Y291bnRlcioyMH0lYCxcblx0XHRcdFx0bGVmdDogYCR7Y291bnRlciozMH0lYFxuXHRcdFx0fX0vPilcblx0XHR9XG5cdDwvT3V0ZXI+XG4pXG5cblxuXG5leHBvcnQge0ZhY2FkZX07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zaWRlYmFyL2NvbW1vbi9GYWNhZGUuanMiLCJjb25zdCBvdXRlciA9IHtcblx0cG9zaXRpb246XCJhYnNvbHV0ZVwiLFxuXHRkaXNwbGF5OlwiYmxvY2tcIixcblx0d2lkdGg6XCIxMDAlXCIsXG5cdGhlaWdodDpcIjEwMCVcIixcblx0dG9wOlwiMHB4XCIsXG5cdGxlZnQ6XCIwcHhcIixcblx0b3ZlcmZsb3c6XCJoaWRkZW5cIixcbn1cbmNvbnN0IGlubmVyID0ge1xuXHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzU1NVwiLCBcblx0aGVpZ2h0OlwiMTAwJVwiLFxuXHRwb3NpdGlvbjpcImFic29sdXRlXCIsXG5cdGJvdHRvbTpcIjAlXCIsXG5cdHRyYW5zZm9ybTpcInNrZXdYKDIwZGVnKVwiLFxuXHR0cmFuc2Zvcm1PcmlnaW46IFwiYm90dG9tIGxlZnRcIixcbn1cblxuZXhwb3J0IHtvdXRlciwgaW5uZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2lkZWJhci9jb21tb24vc3R5bGVzLmpzIiwiaW1wb3J0IHtIZWFkZXIsSWNvbixCdXR0b24sRGl2aWRlcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7RmFjYWRlfSBmcm9tICcuLi9jb21tb24vaW5kZXgnOyBcblxuY29uc3QgTG9nbyA9ICh7dG9nZ2xlU2lkZWJhcn0pID0+IChcblx0PGRpdj5cblx0PEhlYWRlciBhcz0naDEnIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfSA+XG5cdFx0PEhlYWRlci5Db250ZW50IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIn19PlxuXHRcdFx0XHQ8c3VwPlZvcmNhbidzPC9zdXA+XG5cdFx0XHRcdDxzdWI+TGFiPC9zdWI+XG5cdFx0PC9IZWFkZXIuQ29udGVudD5cblx0PC9IZWFkZXI+XG5cdDwvZGl2PlxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2lkZWJhci9sb2dvL0xvZ28uanMiLCJjb25zdCBjb250YWluZXIgPSB7XG5cdGNvbG9yOiBcIiNmZmZcIixcblx0Zm9udFNpemU6IFwiMjRweFwiLFxuXHRwYWRkaW5nOiBcIjMwcHhcIixcbn1cblxuZXhwb3J0IHtjb250YWluZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2lkZWJhci9sb2dvL3N0eWxlcy5qcyIsImNvbnN0IHNpZGViYXIgPSB7XG5cdGJvcmRlclJhZGl1czpcIjBcIlxufVxuXG5jb25zdCBtZW51ID0gIHtcblx0bWluSGVpZ2h0OlwiMTAwJVwiLFxuXHRib3JkZXJSYWRpdXM6XCIwXCIsXG59XG5cbmV4cG9ydCB7bWVudSwgc2lkZWJhcn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2lkZWJhci9zdHlsZXMuanMiLCJjb25zdCBBcGlDb25maWcgPSB7XG5cdGVuZFBvaW50OiBcImh0dHBzOi8vdm9yY2FuLnByaXNtaWMuaW8vYXBpL3YyXCJcbn1cblxuZXhwb3J0IHtBcGlDb25maWd9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL0FwaUNvbmZpZy5qcyIsImNvbnN0IEFwcFJvdXRlcyA9IHtcblx0bGlua3M6IFtcblx0XHR7XG5cdFx0XHR1cmw6IFwiL1wiLFxuXHRcdFx0dGl0bGU6IFwiSG9tZVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR1cmw6IFwiL2Fib3V0XCIsXG5cdFx0XHR0aXRsZTogXCJBYm91dFwiXG5cdFx0fVxuXHRdLFxuXHRzaWRlYmFyTGlua3M6IFtcblx0XHR7XG5cdFx0XHR1cmw6IFwiL1wiLFxuXHRcdFx0dGl0bGU6IFwiSG9tZVwiLFxuXHRcdFx0aWNvbjpcImhvbWVcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dXJsOiBcIi9hYm91dFwiLFxuXHRcdFx0dGl0bGU6IFwiQWJvdXRcIixcblx0XHRcdGljb246XCJ1c2VyXCJcblx0XHR9XG5cdF1cbn1cblxuZXhwb3J0IHtBcHBSb3V0ZXN9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9BcHBSb3V0ZXMuanMiLCJleHBvcnQgKiBmcm9tICcuL0FwaUNvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL0FwcFJvdXRlcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFHQTs7Ozs7QUFFQTtBQUFBO0FBR0E7QUFGQTs7OztBQUlBO0FBQUE7Ozs7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTkE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQTFDQTtBQUNBO0FBbURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBS0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTs7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQWRBO0FBQ0E7QUFtQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTs7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUxBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFJQTtBQUZBO0FBU0E7QUFUQTtBQUNBO0FBSkE7QUFDQTtBQWFBO0FBRUE7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFSQTtBQUNBO0FBT0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0FBSUE7QUFBQTtBQURBO0FBS0E7QUFHQTtBQUpBOztBQU9BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUtBO0FBUEE7QUFqQkE7QUFDQTtBQXVCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        