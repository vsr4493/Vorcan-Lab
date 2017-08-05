
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Facade = __webpack_require__(887);

Object.keys(_Facade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Facade[key];
    }
  });
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\common\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\common\\index.js"); } } })();

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(886);

Object.keys(_Header).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Header[key];
    }
  });
});

var _Layout = __webpack_require__(894);

Object.keys(_Layout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Layout[key];
    }
  });
});

var _Post = __webpack_require__(895);

Object.keys(_Post).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Post[key];
    }
  });
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\index.js"); } } })();

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

var _index = __webpack_require__(659);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\pages\\index.js?entry';


var Index = function Index() {
	return _react2.default.createElement(_index.AppLayout, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	});
};

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\pages\\index.js"); } } })();
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
exports.AppHeader = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(559);

var _Logo = __webpack_require__(889);

var _Logo2 = _interopRequireDefault(_Logo);

var _Navbar = __webpack_require__(891);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _styles = __webpack_require__(893);

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\Header.js';


var AppHeader = function AppHeader(props) {
	return _react2.default.createElement(_semanticUiReact.Grid, { stretched: true, style: styles.container.grid, __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, { stretched: true, style: styles.container.row, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(_Logo2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	})), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(_Navbar2.default, { activeItem: props.activeItem, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}))));
};

exports.AppHeader = AppHeader;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\Header.js"); } } })();

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Facade = undefined;

var _assign = __webpack_require__(93);

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(888);

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\common\\Facade.js';


var Facade = function Facade() {
	return _react2.default.createElement('div', { style: styles.outer, __source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement('div', { style: (0, _assign2.default)({}, styles.inner, styles.transform), __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}), _react2.default.createElement('div', { style: styles.triangleRight, __source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}));
};

exports.Facade = Facade;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\common\\Facade.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\common\\Facade.js"); } } })();

/***/ }),

/***/ 888:
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
	backgroundColor: "#191919",
	width: "80%",
	height: "100%",
	position: "absolute"
};
var transform = {
	left: "20%",
	bottom: "0px",
	transform: "skewX(20deg)",
	transformOrigin: "bottom left"
};

var triangleRight = {
	position: "absolute",
	top: 2,
	left: "20%",
	width: 0,
	height: 0,
	borderTop: "85px solid transparent",
	borderRight: "172px solid #888",
	borderBottom: "0px solid transparent"
};

exports.outer = outer;
exports.inner = inner;
exports.triangleRight = triangleRight;
exports.transform = transform;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\common\\styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\common\\styles.js"); } } })();

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(559);

var _styles = __webpack_require__(890);

var styles = _interopRequireWildcard(_styles);

var _index = __webpack_require__(658);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\logo\\Logo.js';


var Logo = function Logo() {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', textAlign: 'center', style: styles.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_index.Facade, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}), _react2.default.createElement(_semanticUiReact.Header.Content, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('sup', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, 'Vorcan\'s'), _react2.default.createElement('sub', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, 'Lab'))));
};

exports.default = Logo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\logo\\Logo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\logo\\Logo.js"); } } })();

/***/ }),

/***/ 890:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\logo\\styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\logo\\styles.js"); } } })();

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(559);

var _styles = __webpack_require__(892);

var styles = _interopRequireWildcard(_styles);

var _link = __webpack_require__(657);

var _link2 = _interopRequireDefault(_link);

var _index = __webpack_require__(658);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\navbar\\Navbar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\navbar\\Navbar.js"); } } })();

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = {
	marginLeft: "-14px",
	borderRadius: "0px",
	height: "60px",
	border: "0px"
};

var menuItem = {
	transform: "skewX(20deg)",
	transformOrigin: "bottom left"
};

exports.container = container;
exports.menuItem = menuItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\navbar\\styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\navbar\\styles.js"); } } })();

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = {
	grid: {
		padding: "15px 15px"
	},
	row: {
		paddingTop: "0px"
	}
};

exports.container = container;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\styles.js"); } } })();

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppLayout = undefined;

var _link = __webpack_require__(657);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = __webpack_require__(559);

var _index = __webpack_require__(659);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\components\\layout\\Layout.js';


var AppLayout = function AppLayout(props) {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_head2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('title', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, 'Vorcan\'s Lab'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0 width=device-width', __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css', __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	})), _react2.default.createElement(_semanticUiReact.Container, { fluid: true, style: { padding: "5px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement(_index.AppHeader, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}), props.children));
};

exports.AppLayout = AppLayout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\layout\\Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\layout\\Layout.js"); } } })();

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Post = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(559);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\Design Lab\\projects\\vorcan\\App\\components\\post\\Post.js";


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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\post\\Post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\post\\Post.js"); } } })();

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(753);


/***/ })

},[979]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvY29tbW9uL2luZGV4LmpzPzBhMjI2MmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcz8wYTIyNjJhIiwid2VicGFjazovLy8uL3BhZ2VzPzBhMjI2MmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzPzBhMjI2MmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvY29tbW9uL0ZhY2FkZS5qcz8wYTIyNjJhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2NvbW1vbi9zdHlsZXMuanM/MGEyMjYyYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9sb2dvL0xvZ28uanM/MGEyMjYyYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9sb2dvL3N0eWxlcy5qcz8wYTIyNjJhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL25hdmJhci9OYXZiYXIuanM/MGEyMjYyYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9uYXZiYXIvc3R5bGVzLmpzPzBhMjI2MmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvc3R5bGVzLmpzPzBhMjI2MmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzPzBhMjI2MmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L1Bvc3QuanM/MGEyMjYyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9GYWNhZGVcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci9jb21tb24vaW5kZXguanMiLCJleHBvcnQgKiBmcm9tICcuL2hlYWRlci9IZWFkZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2xheW91dC9MYXlvdXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Bvc3QvUG9zdCc7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBcHBMYXlvdXR9IGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcblx0PEFwcExheW91dD5cclxuXHQ8L0FwcExheW91dD5cclxuKVxyXG5cdFxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IHtHcmlkfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvL0xvZ28nOyBcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmJhci9OYXZiYXInOyBcclxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IEFwcEhlYWRlciA9IChwcm9wcykgPT4gKFxyXG5cdDxHcmlkIHN0cmV0Y2hlZCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lci5ncmlkfT5cclxuXHRcdDxHcmlkLlJvdyBzdHJldGNoZWQgc3R5bGU9e3N0eWxlcy5jb250YWluZXIucm93fT5cclxuXHRcdFx0PEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cclxuXHRcdFx0XHQ8TG9nbyAvPlxyXG5cdFx0XHQ8L0dyaWQuQ29sdW1uPlxyXG5cdFx0XHQ8R3JpZC5Db2x1bW4gd2lkdGg9ezEzfT5cclxuXHRcdFx0XHQ8TmF2YmFyIGFjdGl2ZUl0ZW0gPSB7cHJvcHMuYWN0aXZlSXRlbX0gLz5cclxuXHRcdFx0PC9HcmlkLkNvbHVtbj5cclxuXHRcdDwvR3JpZC5Sb3c+XHJcblx0PC9HcmlkPlxyXG4pXHJcblxyXG5leHBvcnQge0FwcEhlYWRlcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIiwiaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IEZhY2FkZSA9ICgpID0+IChcclxuXHQ8ZGl2IHN0eWxlPXtzdHlsZXMub3V0ZXJ9PlxyXG5cdFx0PGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSxzdHlsZXMuaW5uZXIsc3R5bGVzLnRyYW5zZm9ybSl9PjwvZGl2PlxyXG5cdFx0PGRpdiBzdHlsZT17c3R5bGVzLnRyaWFuZ2xlUmlnaHR9PjwvZGl2PlxyXG5cdDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IHtGYWNhZGV9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2NvbW1vbi9GYWNhZGUuanMiLCJjb25zdCBvdXRlciA9IHtcclxuXHRwb3NpdGlvbjpcImFic29sdXRlXCIsXHJcblx0ZGlzcGxheTpcImJsb2NrXCIsXHJcblx0d2lkdGg6XCIxMDAlXCIsXHJcblx0aGVpZ2h0OlwiMTAwJVwiLFxyXG5cdHRvcDpcIjBweFwiLFxyXG5cdGxlZnQ6XCIwcHhcIixcclxuXHRvdmVyZmxvdzpcImhpZGRlblwiLFxyXG59XHJcbmNvbnN0IGlubmVyID0ge1xyXG5cdGJhY2tncm91bmRDb2xvcjogXCIjMTkxOTE5XCIsIFxyXG5cdHdpZHRoOlwiODAlXCIsXHJcblx0aGVpZ2h0OlwiMTAwJVwiLFxyXG5cdHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxufVxyXG5jb25zdCB0cmFuc2Zvcm0gPSB7XHJcblx0bGVmdDpcIjIwJVwiLFxyXG5cdGJvdHRvbTpcIjBweFwiLFxyXG5cdHRyYW5zZm9ybTpcInNrZXdYKDIwZGVnKVwiLFxyXG5cdHRyYW5zZm9ybU9yaWdpbjogXCJib3R0b20gbGVmdFwiLFxyXG59XHJcblxyXG5jb25zdCB0cmlhbmdsZVJpZ2h0ID0ge1xyXG5cdHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcclxuXHR0b3A6MixcclxuXHRsZWZ0OlwiMjAlXCIsXHJcblx0d2lkdGg6IDAsXHJcblx0aGVpZ2h0OiAwLFxyXG5cdGJvcmRlclRvcDogXCI4NXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsXHJcblx0Ym9yZGVyUmlnaHQ6IFwiMTcycHggc29saWQgIzg4OFwiLFxyXG5cdGJvcmRlckJvdHRvbTogXCIwcHggc29saWQgdHJhbnNwYXJlbnRcIlxyXG59XHJcblxyXG5leHBvcnQge291dGVyLCBpbm5lciwgdHJpYW5nbGVSaWdodCwgdHJhbnNmb3JtfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci9jb21tb24vc3R5bGVzLmpzIiwiaW1wb3J0IHtIZWFkZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHtGYWNhZGV9IGZyb20gJy4uL2NvbW1vbi9pbmRleCc7XHJcblxyXG5jb25zdCBMb2dvID0gKCkgPT4gKFxyXG5cdDxkaXY+XHJcblx0PEhlYWRlciBhcz0naDEnIHRleHRBbGlnbj0nY2VudGVyJyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxyXG5cdFx0PEZhY2FkZS8+XHJcblx0XHQ8SGVhZGVyLkNvbnRlbnQ+XHJcblx0XHRcdFx0PHN1cD5Wb3JjYW4nczwvc3VwPlxyXG5cdFx0XHRcdDxzdWI+TGFiPC9zdWI+XHJcblx0XHQ8L0hlYWRlci5Db250ZW50PlxyXG5cdDwvSGVhZGVyPlxyXG5cdDwvZGl2PlxyXG4pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvbG9nby9Mb2dvLmpzIiwiY29uc3QgY29udGFpbmVyID0ge1xyXG5cdGNvbG9yOiBcIiNmZmZcIixcclxuXHRmb250U2l6ZTogXCIyNHB4XCIsXHJcblx0cGFkZGluZzogXCIzMHB4XCJcclxufVxyXG5cclxuZXhwb3J0IHtjb250YWluZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2xvZ28vc3R5bGVzLmpzIiwiaW1wb3J0IHtHcmlkLEhlYWRlciwgTWVudX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0ZhY2FkZX0gZnJvbSAnLi4vY29tbW9uL2luZGV4JztcclxuXHJcbmNvbnN0IFBvc3RMaW5rID0gKHtpZCwgdGl0bGV9KSA9PiAoXHJcblx0PExpbmsgaHJlZj17YC9wb3N0P2lkPSR7aWR9YH0+XHJcblx0XHQ8TWVudS5JdGVtIG5hbWU9e3RpdGxlfSAvPlxyXG5cdDwvTGluaz5cclxuKSBcclxuXHJcblxyXG5jb25zdCBNZW51SXRlbSA9ICh7aHJlZix0aXRsZSxhY3RpdmVJdGVtfSkgPT4gKFxyXG5cdDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG5cdFx0PE1lbnUuSXRlbSBuYW1lPXt0aXRsZX0gYWN0aXZlPXthY3RpdmVJdGVtID09PSB0aXRsZX0+XHJcblx0XHRcdHt0aXRsZX1cclxuXHRcdDwvTWVudS5JdGVtPlxyXG5cdDwvTGluaz5cclxuKTtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7YWN0aXZlSXRlbX0pID0+IChcclxuXHQ8TWVudSBib3JkZXJsZXNzIGZsdWlkIHdpZHRocz17Mn0gIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdDxNZW51SXRlbSBocmVmPVwiL1wiIHRpdGxlPVwiaG9tZVwiIGFjdGl2ZUl0ZW09e2FjdGl2ZUl0ZW19IC8+XHJcblx0XHQ8UG9zdExpbmsgaWQ9XCJXWURjaGlvQUFIdVdyQ0FGXCIgdGl0bGU9XCJIZWxsbyBXb3JsZFwiLz5cclxuXHQ8L01lbnU+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvbmF2YmFyL05hdmJhci5qcyIsImNvbnN0IGNvbnRhaW5lciA9IHtcclxuXHRtYXJnaW5MZWZ0OlwiLTE0cHhcIixcclxuXHRib3JkZXJSYWRpdXM6XCIwcHhcIixcclxuXHRoZWlnaHQ6XCI2MHB4XCIsXHJcblx0Ym9yZGVyOlwiMHB4XCJcclxufTtcclxuXHJcbmNvbnN0IG1lbnVJdGVtID0ge1xyXG5cdHRyYW5zZm9ybTpcInNrZXdYKDIwZGVnKVwiLFxyXG5cdHRyYW5zZm9ybU9yaWdpbjogXCJib3R0b20gbGVmdFwiLFxyXG59XHJcblxyXG5leHBvcnQge2NvbnRhaW5lciwgbWVudUl0ZW19O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL25hdmJhci9zdHlsZXMuanMiLCJjb25zdCBjb250YWluZXIgPSAge1xyXG5cdGdyaWQ6IHtcclxuXHRcdHBhZGRpbmc6XCIxNXB4IDE1cHhcIlxyXG5cdH0sXHJcblx0cm93OiB7XHJcblx0XHRwYWRkaW5nVG9wOlwiMHB4XCJcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7Y29udGFpbmVyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci9zdHlsZXMuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB7QXBwSGVhZGVyfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuXHQ8ZGl2PlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5Wb3JjYW4ncyBMYWI8L3RpdGxlPlxyXG5cdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAgd2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxyXG5cdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4xMS9zZW1hbnRpYy5taW4uY3NzXCI+PC9saW5rPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0PENvbnRhaW5lciBmbHVpZCBzdHlsZT17e3BhZGRpbmc6XCI1cHhcIn19PlxyXG5cdFx0XHQ8QXBwSGVhZGVyLz5cclxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxyXG5cdFx0PC9Db250YWluZXI+XHRcclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IHtBcHBMYXlvdXR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcyIsImltcG9ydCB7SGVhZGVyLCBDb250YWluZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmNvbnN0IFBvc3RIZWFkZXIgPSAoe3RpdGxlfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8SGVhZGVyIGFzPVwiaDJcIj57dGl0bGUudGV4dH08L0hlYWRlcj5cclxuXHQpO1xyXG59XHJcbmNvbnN0IFBvc3RCb2R5ID0gKHtjb250ZW50fSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29udGVudC5sZW5ndGg+MD9cclxuXHRcdFx0XHRcdGNvbnRlbnQubWFwKCBcclxuXHRcdFx0XHRcdFx0ZGF0YSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGFydGljbGU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cdHtkYXRhLnRleHR9IDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHQ8cD5ObyBwb3N0IGZvdW5kPC9wPlxyXG5cdFx0XHR9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5jb25zdCBQb3N0ID0gKHtwb3N0fSkgPT4ge1xyXG5cdGxldCByZXN1bHQgPSBwb3N0ICYmIHBvc3RbXCJyZXN1bHRzXCJdICYmIHBvc3RbXCJyZXN1bHRzXCJdICYmIHBvc3RbXCJyZXN1bHRzXCJdLmxlbmd0aD4wICYmIHBvc3RbXCJyZXN1bHRzXCJdWzBdIHx8IHt9O1xyXG5cdGxldCBjb250ZW50ID0gcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuY29udGVudCB8fCBbXTtcclxuXHRsZXQgdGl0bGUgPSByZXN1bHQuZGF0YSAmJiByZXN1bHRbXCJkYXRhXCJdW1wicGFnZV90aXRsZVwiXSAmJiByZXN1bHRbXCJkYXRhXCJdW1wicGFnZV90aXRsZVwiXVswXSB8fCBcIlwiO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHQ8UG9zdEhlYWRlciB0aXRsZT17dGl0bGV9IC8+XHJcblx0XHRcdDxQb3N0Qm9keSBjb250ZW50PXtjb250ZW50fSAvPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IHtQb3N0fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3Bvc3QvUG9zdC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFWQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUZBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUZBO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBSUE7QUFGQTs7QUFPQTtBQUpBO0FBSkE7QUFDQTtBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUtBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSkE7O0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFkQTtBQUNBO0FBbUJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7O0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        