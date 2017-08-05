
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(885);

Object.keys(_Header).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Header[key];
    }
  });
});

var _Layout = __webpack_require__(888);

Object.keys(_Layout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Layout[key];
    }
  });
});

var _Post = __webpack_require__(889);

Object.keys(_Post).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Post[key];
    }
  });
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/index.js"); } } })();

/***/ }),

/***/ 752:
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

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppHeader = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(657);

var _link2 = _interopRequireDefault(_link);

var _semanticUiReact = __webpack_require__(577);

var _Logo = __webpack_require__(886);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/header/Header.js';


var gridStyles = {
	padding: "10px 5px"
};

var PostLink = function PostLink(_ref) {
	var id = _ref.id,
	    title = _ref.title;
	return _react2.default.createElement(_link2.default, { href: '/post?id=' + id, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: title, __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}));
};

var LinkMenu = function LinkMenu(_ref2) {
	var activeItem = _ref2.activeItem;
	return _react2.default.createElement(_semanticUiReact.Grid, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, _react2.default.createElement(_semanticUiReact.Menu, { Horizontal: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, _react2.default.createElement(_link2.default, { href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Home', active: activeItem === 'home', __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	})), _react2.default.createElement(_link2.default, { href: '/about', __source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'About', active: activeItem === 'about', __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	})), _react2.default.createElement(PostLink, { id: 'WYDchioAAHuWrCAF', title: 'Hello World', __source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	})))));
};

var AppHeader = function AppHeader(props) {
	return _react2.default.createElement(_semanticUiReact.Grid, { padded: true, stretched: true, style: {}, __source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, { stretched: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, __source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}, _react2.default.createElement(_Logo2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	})), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 14, __source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, _react2.default.createElement(LinkMenu, { activeIte: true,
		m: props.activeItem, __source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	}))));
};

exports.AppHeader = AppHeader;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/Header.js"); } } })();

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(577);

var _styles = __webpack_require__(887);

var style = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/header/logo/Logo.js';


var Facade = function Facade() {
	return _react2.default.createElement('div', { style: style.facadeOuter, __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement('div', { style: style.facadeInner, __source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}));
};

var Logo = function Logo() {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', textAlign: 'center', style: style.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(Facade, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}), _react2.default.createElement(_semanticUiReact.Header.Content, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement('sup', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, 'Vorcan\'s'), _react2.default.createElement('sub', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, 'Lab'))));
};

exports.default = Logo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/logo/Logo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/logo/Logo.js"); } } })();

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = {
	color: "#fff",
	fontSize: "22px",
	padding: "15px"
};
var facadeOuter = {
	position: "absolute",
	display: "block",
	width: "100%",
	height: "60px",
	top: "0px",
	left: "0px",
	overflow: "hidden"
};
var facadeInner = {
	backgroundColor: "#191919",
	transform: "skewY(5deg)",
	transformOrigin: "top left",
	width: "100%",
	height: "100%",
	position: "absolute",
	top: "-15px",
	left: "0px",
	bottom: 0,
	right: 0
};

exports.facadeOuter = facadeOuter;
exports.facadeInner = facadeInner;
exports.container = container;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/logo/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/logo/styles.js"); } } })();

/***/ }),

/***/ 888:
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

var _semanticUiReact = __webpack_require__(577);

var _index = __webpack_require__(658);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/layout/Layout.js';


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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/layout/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/layout/Layout.js"); } } })();

/***/ }),

/***/ 889:
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

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(752);


/***/ })

},[973]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanM/MjFlOGM4NSIsIndlYnBhY2s6Ly8vLi9wYWdlcz8yMWU4Yzg1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcz8yMWU4Yzg1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2xvZ28vTG9nby5qcz8yMWU4Yzg1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2xvZ28vc3R5bGVzLmpzPzIxZThjODUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzPzIxZThjODUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L1Bvc3QuanM/MjFlOGM4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2hlYWRlci9IZWFkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9sYXlvdXQvTGF5b3V0JztcbmV4cG9ydCAqIGZyb20gJy4vcG9zdC9Qb3N0JztcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FwcExheW91dH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleCc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuXHQ8QXBwTGF5b3V0PlxuXHQ8L0FwcExheW91dD5cbilcblx0XG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7R3JpZCxIZWFkZXIsIE1lbnV9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvL0xvZ28nOyBcblxuY29uc3QgZ3JpZFN0eWxlcyA9IHtcblx0cGFkZGluZzogXCIxMHB4IDVweFwiIFxufVxuXG5jb25zdCBQb3N0TGluayA9ICh7aWQsIHRpdGxlfSkgPT4gKFxuXHQ8TGluayBocmVmPXtgL3Bvc3Q/aWQ9JHtpZH1gfT5cblx0XHQ8TWVudS5JdGVtIG5hbWU9e3RpdGxlfSAvPlxuXHQ8L0xpbms+XG4pIFxuXG5cdFxuY29uc3QgTGlua01lbnUgPSAoe2FjdGl2ZUl0ZW19KSA9PiAoXG5cdDxHcmlkPlxuXHRcdDxHcmlkLlJvdz5cblx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG5cdFx0XHRcdDxNZW51IEhvcml6b250YWw+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdDxNZW51Lkl0ZW0gbmFtZT0nSG9tZScgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnaG9tZSd9Lz5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxuXHRcdFx0XHRcdFx0PE1lbnUuSXRlbSBuYW1lPSdBYm91dCcgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnYWJvdXQnfS8+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDxQb3N0TGluayBpZD1cIldZRGNoaW9BQUh1V3JDQUZcIiB0aXRsZT1cIkhlbGxvIFdvcmxkXCIvPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHQ8L0dyaWQuQ29sdW1uPlxuXHRcdDwvR3JpZC5Sb3c+XG5cdDwvR3JpZD5cbik7XG5cbmNvbnN0IEFwcEhlYWRlciA9IChwcm9wcykgPT4gKFxuXHQ8R3JpZCBwYWRkZWQgc3RyZXRjaGVkIHN0eWxlPXt7fX0+XG5cdFx0PEdyaWQuUm93IHN0cmV0Y2hlZD5cblx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17Mn0+XG5cdFx0XHRcdDxMb2dvIC8+XG5cdFx0XHQ8L0dyaWQuQ29sdW1uPlxuXHRcdFx0PEdyaWQuQ29sdW1uIHdpZHRoPXsxNH0+XG5cdFx0XHRcdDxMaW5rTWVudSBhY3RpdmVJdGVcblx0XHRcdFx0bSA9IHtwcm9wcy5hY3RpdmVJdGVtfSAvPlxuXHRcdFx0PC9HcmlkLkNvbHVtbj5cblx0XHQ8L0dyaWQuUm93PlxuXHQ8L0dyaWQ+XG4pXG5cbmV4cG9ydCB7QXBwSGVhZGVyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanMiLCJpbXBvcnQge0hlYWRlcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBGYWNhZGUgPSAoKSA9PiAoXG5cdDxkaXYgc3R5bGU9e3N0eWxlLmZhY2FkZU91dGVyfT5cblx0XHQ8ZGl2IHN0eWxlPXtzdHlsZS5mYWNhZGVJbm5lcn0+PC9kaXY+XG5cdDwvZGl2PlxuKTtcblxuY29uc3QgTG9nbyA9ICgpID0+IChcblx0PGRpdj5cblx0PEhlYWRlciBhcz0naDEnIHRleHRBbGlnbj0nY2VudGVyJyBzdHlsZT17c3R5bGUuY29udGFpbmVyfSA+XG5cdFx0PEZhY2FkZS8+XG5cdFx0PEhlYWRlci5Db250ZW50PlxuXHRcdFx0XHQ8c3VwPlZvcmNhbidzPC9zdXA+XG5cdFx0XHRcdDxzdWI+TGFiPC9zdWI+XG5cdFx0PC9IZWFkZXIuQ29udGVudD5cblx0PC9IZWFkZXI+XG5cdDwvZGl2PlxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2xvZ28vTG9nby5qcyIsImNvbnN0IGNvbnRhaW5lciA9IHtcblx0Y29sb3I6IFwiI2ZmZlwiLFxuXHRmb250U2l6ZTogXCIyMnB4XCIsXG5cdHBhZGRpbmc6IFwiMTVweFwiXG59XG5jb25zdCBmYWNhZGVPdXRlciA9IHtcblx0cG9zaXRpb246XCJhYnNvbHV0ZVwiLFxuXHRkaXNwbGF5OlwiYmxvY2tcIixcblx0d2lkdGg6XCIxMDAlXCIsXG5cdGhlaWdodDpcIjYwcHhcIixcblx0dG9wOlwiMHB4XCIsXG5cdGxlZnQ6XCIwcHhcIixcblx0b3ZlcmZsb3c6XCJoaWRkZW5cIixcbn1cbmNvbnN0IGZhY2FkZUlubmVyID0ge1xuXHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzE5MTkxOVwiLCBcblx0dHJhbnNmb3JtOlwic2tld1koNWRlZylcIixcblx0dHJhbnNmb3JtT3JpZ2luOiBcInRvcCBsZWZ0XCIsXG5cdHdpZHRoOlwiMTAwJVwiLFxuXHRoZWlnaHQ6XCIxMDAlXCIsXG5cdHBvc2l0aW9uOlwiYWJzb2x1dGVcIixcblx0dG9wOlwiLTE1cHhcIixcblx0bGVmdDpcIjBweFwiLFxuXHRib3R0b206MCxcblx0cmlnaHQ6MCxcbn1cblxuZXhwb3J0IHtmYWNhZGVPdXRlciwgZmFjYWRlSW5uZXIsIGNvbnRhaW5lcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvbG9nby9zdHlsZXMuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7QXBwSGVhZGVyfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBcHBMYXlvdXQgPSAocHJvcHMpID0+IChcblx0PGRpdj5cblx0XHQ8SGVhZD5cblx0XHRcdDx0aXRsZT5Wb3JjYW4ncyBMYWI8L3RpdGxlPlxuXHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wIHdpZHRoPWRldmljZS13aWR0aFwiLz5cblx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjExL3NlbWFudGljLm1pbi5jc3NcIj48L2xpbms+XG5cdFx0PC9IZWFkPlxuXHRcdDxDb250YWluZXIgZmx1aWQgc3R5bGU9e3twYWRkaW5nOlwiNXB4XCJ9fT5cblx0XHRcdDxBcHBIZWFkZXIvPlxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdDwvQ29udGFpbmVyPlx0XG5cdDwvZGl2PlxuKVxuXG5leHBvcnQge0FwcExheW91dH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiaW1wb3J0IHtIZWFkZXIsIENvbnRhaW5lcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5jb25zdCBQb3N0SGVhZGVyID0gKHt0aXRsZX0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8SGVhZGVyIGFzPVwiaDJcIj57dGl0bGUudGV4dH08L0hlYWRlcj5cblx0KTtcbn1cbmNvbnN0IFBvc3RCb2R5ID0gKHtjb250ZW50fSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHR7XG5cdFx0XHRcdGNvbnRlbnQubGVuZ3RoPjA/XG5cdFx0XHRcdFx0Y29udGVudC5tYXAoIFxuXHRcdFx0XHRcdFx0ZGF0YSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlx0e2RhdGEudGV4dH0gPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxici8+XG5cdFx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdDxwPk5vIHBvc3QgZm91bmQ8L3A+XG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7XG5cdGxldCByZXN1bHQgPSBwb3N0ICYmIHBvc3RbXCJyZXN1bHRzXCJdICYmIHBvc3RbXCJyZXN1bHRzXCJdICYmIHBvc3RbXCJyZXN1bHRzXCJdLmxlbmd0aD4wICYmIHBvc3RbXCJyZXN1bHRzXCJdWzBdIHx8IHt9O1xuXHRsZXQgY29udGVudCA9IHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLmNvbnRlbnQgfHwgW107XG5cdGxldCB0aXRsZSA9IHJlc3VsdC5kYXRhICYmIHJlc3VsdFtcImRhdGFcIl1bXCJwYWdlX3RpdGxlXCJdICYmIHJlc3VsdFtcImRhdGFcIl1bXCJwYWdlX3RpdGxlXCJdWzBdIHx8IFwiXCI7XG5cdHJldHVybiAoXG5cdFx0PENvbnRhaW5lcj5cblx0XHRcdDxQb3N0SGVhZGVyIHRpdGxlPXt0aXRsZX0gLz5cblx0XHRcdDxQb3N0Qm9keSBjb250ZW50PXtjb250ZW50fSAvPlxuXHRcdDwvQ29udGFpbmVyPlxuXHQpO1xufVxuXG5leHBvcnQge1Bvc3R9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcG9zdC9Qb3N0LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFGQTtBQUNBO0FBTUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQVhBO0FBQ0E7QUFpQkE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFGQTtBQUNBO0FBS0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBWkE7QUFDQTtBQVdBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBS0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTs7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQWRBO0FBQ0E7QUFtQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTs7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        