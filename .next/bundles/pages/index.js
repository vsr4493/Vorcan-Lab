
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

var _Post = __webpack_require__(887);

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

var _semanticUiReact = __webpack_require__(603);

var _Slogan = __webpack_require__(972);

var _Slogan2 = _interopRequireDefault(_Slogan);

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
	}, _react2.default.createElement(_semanticUiReact.Menu, { vertical: true, __source: {
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
	}))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}, _react2.default.createElement(_semanticUiReact.Menu, { vertical: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}))));
};

var AppHeader = function AppHeader(props) {
	return _react2.default.createElement(_semanticUiReact.Grid, { celled: true, padded: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 7, __source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	}, _react2.default.createElement(_Slogan2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	})), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 9, __source: {
			fileName: _jsxFileName,
			lineNumber: 44
		}
	}, _react2.default.createElement(LinkMenu, { activeIte: true,
		m: props.activeItem, __source: {
			fileName: _jsxFileName,
			lineNumber: 45
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
exports.AppLayout = undefined;

var _link = __webpack_require__(657);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = __webpack_require__(603);

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
	})), _react2.default.createElement(_semanticUiReact.Container, { fluid: true, __source: {
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

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Post = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(603);

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

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(752);


/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(974);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(973);

var _semanticUiReact = __webpack_require__(603);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/header/Slogan.js';


console.log(_styles.sloganStyle);

var Slogan = function Slogan() {
	return _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', textAlign: 'center', __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_style2.default, {
		styleId: _styles.sloganStyle.__hash,
		css: _styles.sloganStyle
	}), _react2.default.createElement('div', { className: 'sloganContainer', __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('div', { className: 'sloganContainerBG', __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}), _react2.default.createElement('sup', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, 'Vorcan\'s'), _react2.default.createElement('sub', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, 'Lab')));
};

exports.default = Slogan;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/Slogan.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/Slogan.js"); } } })();

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sloganStyle = "\n.sloganContainerBG{\n\tbackground-color: #191919; \n\ttransform:skewY(5deg);\n\ttransform-origin: top left;\n\twidth:100%;\n\theight:100%;\n\tposition:absolute;\n\ttop:-32px;\n\tleft:-10px;\n\tbottom:0;\n\tright:0;\n\t}\n.sloganContainer{\n\tposition:relative;\n\theight:78px;\n\twidth:250px;\n\toverflow:none;\n\tcolor: #fff;font-size:1.0em;\n\t\n}\n";

exports.sloganStyle = sloganStyle;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/styles.js"); } } })();

/***/ })

},[971]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanM/YmM1NzhhZiIsIndlYnBhY2s6Ly8vLi9wYWdlcz9iYzU3OGFmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcz9iYzU3OGFmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcz9iYzU3OGFmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC9Qb3N0LmpzP2JjNTc4YWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvU2xvZ2FuLmpzP2JjNTc4YWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvc3R5bGVzLmpzP2JjNTc4YWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9oZWFkZXIvSGVhZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vbGF5b3V0L0xheW91dCc7XG5leHBvcnQgKiBmcm9tICcuL3Bvc3QvUG9zdCc7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBcHBMYXlvdXR9IGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IChcblx0PEFwcExheW91dD5cblx0PC9BcHBMYXlvdXQ+XG4pXG5cdFxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge0dyaWQsSGVhZGVyLCBNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBTbG9nYW4gZnJvbSAnLi9TbG9nYW4nOyBcblxuY29uc3QgZ3JpZFN0eWxlcyA9IHtcblx0cGFkZGluZzogXCIxMHB4IDVweFwiIFxufVxuXG5jb25zdCBQb3N0TGluayA9ICh7aWQsIHRpdGxlfSkgPT4gKFxuXHQ8TGluayBocmVmPXtgL3Bvc3Q/aWQ9JHtpZH1gfT5cblx0XHQ8TWVudS5JdGVtIG5hbWU9e3RpdGxlfSAvPlxuXHQ8L0xpbms+XG4pIFxuXG5cdFxuY29uc3QgTGlua01lbnUgPSAoe2FjdGl2ZUl0ZW19KSA9PiAoXG5cdDxHcmlkPlxuXHRcdDxHcmlkLlJvdz5cblx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG5cdFx0XHRcdDxNZW51IHZlcnRpY2FsPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHQ8TWVudS5JdGVtIG5hbWU9J0hvbWUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvbWUnfS8+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cblx0XHRcdFx0XHRcdDxNZW51Lkl0ZW0gbmFtZT0nQWJvdXQnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2Fib3V0J30vPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8UG9zdExpbmsgaWQ9XCJXWURjaGlvQUFIdVdyQ0FGXCIgdGl0bGU9XCJIZWxsbyBXb3JsZFwiLz5cblx0XHRcdFx0PC9NZW51PlxuXHRcdFx0PC9HcmlkLkNvbHVtbj5cblx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG5cdFx0XHRcdDxNZW51IHZlcnRpY2FsPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHQ8L0dyaWQuQ29sdW1uPlxuXHRcdDwvR3JpZC5Sb3c+XG5cdDwvR3JpZD5cbik7XG5cbmNvbnN0IEFwcEhlYWRlciA9IChwcm9wcykgPT4gKFxuXHQ8R3JpZCBjZWxsZWQgcGFkZGVkPlxuXHRcdDxHcmlkLlJvdz5cblx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17N30+XG5cdFx0XHRcdDxTbG9nYW4gLz5cblx0XHRcdDwvR3JpZC5Db2x1bW4+XG5cdFx0XHQ8R3JpZC5Db2x1bW4gd2lkdGg9ezl9PlxuXHRcdFx0XHQ8TGlua01lbnUgYWN0aXZlSXRlXG5cdFx0XHRcdG0gPSB7cHJvcHMuYWN0aXZlSXRlbX0gLz5cblx0XHRcdDwvR3JpZC5Db2x1bW4+XG5cdFx0PC9HcmlkLlJvdz5cblx0PC9HcmlkPlxuKVxuXG5leHBvcnQge0FwcEhlYWRlcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQge0FwcEhlYWRlcn0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQXBwTGF5b3V0ID0gKHByb3BzKSA9PiAoXG5cdDxkaXY+XG5cdFx0PEhlYWQ+XG5cdFx0XHQ8dGl0bGU+Vm9yY2FuJ3MgTGFiPC90aXRsZT5cblx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XG5cdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4xMS9zZW1hbnRpYy5taW4uY3NzXCI+PC9saW5rPlxuXHRcdDwvSGVhZD5cblx0XHQ8Q29udGFpbmVyIGZsdWlkPlxuXHRcdFx0PEFwcEhlYWRlci8+XG5cdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0PC9Db250YWluZXI+XHRcblx0PC9kaXY+XG4pXG5cbmV4cG9ydCB7QXBwTGF5b3V0fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiLCJpbXBvcnQge0hlYWRlciwgQ29udGFpbmVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmNvbnN0IFBvc3RIZWFkZXIgPSAoe3RpdGxlfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxIZWFkZXIgYXM9XCJoMlwiPnt0aXRsZS50ZXh0fTwvSGVhZGVyPlxuXHQpO1xufVxuY29uc3QgUG9zdEJvZHkgPSAoe2NvbnRlbnR9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdHtcblx0XHRcdFx0Y29udGVudC5sZW5ndGg+MD9cblx0XHRcdFx0XHRjb250ZW50Lm1hcCggXG5cdFx0XHRcdFx0XHRkYXRhID0+IChcblx0XHRcdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XHR7ZGF0YS50ZXh0fSA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGJyLz5cblx0XHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0PHA+Tm8gcG9zdCBmb3VuZDwvcD5cblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcblx0bGV0IHJlc3VsdCA9IHBvc3QgJiYgcG9zdFtcInJlc3VsdHNcIl0gJiYgcG9zdFtcInJlc3VsdHNcIl0gJiYgcG9zdFtcInJlc3VsdHNcIl0ubGVuZ3RoPjAgJiYgcG9zdFtcInJlc3VsdHNcIl1bMF0gfHwge307XG5cdGxldCBjb250ZW50ID0gcmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuY29udGVudCB8fCBbXTtcblx0bGV0IHRpdGxlID0gcmVzdWx0LmRhdGEgJiYgcmVzdWx0W1wiZGF0YVwiXVtcInBhZ2VfdGl0bGVcIl0gJiYgcmVzdWx0W1wiZGF0YVwiXVtcInBhZ2VfdGl0bGVcIl1bMF0gfHwgXCJcIjtcblx0cmV0dXJuIChcblx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0PFBvc3RIZWFkZXIgdGl0bGU9e3RpdGxlfSAvPlxuXHRcdFx0PFBvc3RCb2R5IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG5cdFx0PC9Db250YWluZXI+XG5cdCk7XG59XG5cbmV4cG9ydCB7UG9zdH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wb3N0L1Bvc3QuanMiLCJpbXBvcnQge3Nsb2dhblN0eWxlfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQge0hlYWRlcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5jb25zb2xlLmxvZyhzbG9nYW5TdHlsZSk7XG5cbmNvbnN0IFNsb2dhbiA9ICgpID0+IChcblx0PEhlYWRlciBhcz0naDEnIHRleHRBbGlnbj0nY2VudGVyJz5cblx0XHQ8c3R5bGUganN4IGdsb2JhbD57c2xvZ2FuU3R5bGV9PC9zdHlsZT5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsb2dhbkNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbG9nYW5Db250YWluZXJCR1wiPjwvZGl2PlxuXHRcdFx0PHN1cD5Wb3JjYW4nczwvc3VwPlxuXHRcdFx0PHN1Yj5MYWI8L3N1Yj5cblx0XHQ8L2Rpdj5cblx0PC9IZWFkZXI+XG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IFNsb2dhbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci9TbG9nYW4uanMiLCJjb25zdCBzbG9nYW5TdHlsZSA9IGBcbi5zbG9nYW5Db250YWluZXJCR3tcblx0YmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTsgXG5cdHRyYW5zZm9ybTpza2V3WSg1ZGVnKTtcblx0dHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG5cdHdpZHRoOjEwMCU7XG5cdGhlaWdodDoxMDAlO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOi0zMnB4O1xuXHRsZWZ0Oi0xMHB4O1xuXHRib3R0b206MDtcblx0cmlnaHQ6MDtcblx0fVxuLnNsb2dhbkNvbnRhaW5lcntcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdGhlaWdodDo3OHB4O1xuXHR3aWR0aDoyNTBweDtcblx0b3ZlcmZsb3c6bm9uZTtcblx0Y29sb3I6ICNmZmY7Zm9udC1zaXplOjEuMGVtO1xuXHRcbn1cbmA7XG5cbmV4cG9ydCB7c2xvZ2FuU3R5bGV9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL3N0eWxlcy5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRkE7QUFDQTtBQU1BO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBZkE7QUFDQTtBQXFCQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFLQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBOztBQVNBO0FBQUE7QUFBQTtBQUFBO0FBZEE7QUFDQTtBQW1CQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBOztBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBc0JBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        