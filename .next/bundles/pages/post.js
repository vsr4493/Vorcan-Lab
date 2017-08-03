
          window.__NEXT_REGISTER_PAGE('/post', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(889);

Object.keys(_Header).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Header[key];
    }
  });
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

var _Post = __webpack_require__(891);

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

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(577);

var _isomorphicUnfetch = __webpack_require__(763);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _prismicJavascript = __webpack_require__(888);

var _prismicJavascript2 = _interopRequireDefault(_prismicJavascript);

var _index = __webpack_require__(893);

var _index2 = __webpack_require__(894);

var _index3 = __webpack_require__(659);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\pages\\post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\pages\\post.js"); } } })();
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
    })(module.exports.default || module.exports, "/post")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppHeader = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(658);

var _link2 = _interopRequireDefault(_link);

var _semanticUiReact = __webpack_require__(577);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\Header.js';


var Slogan = function Slogan() {
	return _react2.default.createElement(_semanticUiReact.Header, { style: gridStyles, as: 'h1', textAlign: 'center', __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, 'Vorcan\'s Labratory');
};

var gridStyles = {
	padding: "20px 10px"
};

var PostLink = function PostLink(_ref) {
	var id = _ref.id,
	    title = _ref.title;
	return _react2.default.createElement(_link2.default, { href: '/post?id=' + id, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: title, __source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}));
};

var LinkMenu = function LinkMenu(_ref2) {
	var activeItem = _ref2.activeItem;
	return _react2.default.createElement(_semanticUiReact.Grid, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement(_semanticUiReact.Menu, { vertical: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement(_link2.default, { href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Home', active: activeItem === 'home', __source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	})), _react2.default.createElement(_link2.default, { href: '/about', __source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'About', active: activeItem === 'about', __source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	})), _react2.default.createElement(PostLink, { id: 'WYDchioAAHuWrCAF', title: 'Hello World', __source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement(_semanticUiReact.Menu, { vertical: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}))));
};

var AppHeader = function AppHeader(props) {
	return _react2.default.createElement(_semanticUiReact.Grid, { celled: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 41
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 7, __source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	}, _react2.default.createElement(Slogan, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 44
		}
	})), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 9, __source: {
			fileName: _jsxFileName,
			lineNumber: 46
		}
	}, _react2.default.createElement(LinkMenu, { activeIte: true,
		m: props.activeItem, __source: {
			fileName: _jsxFileName,
			lineNumber: 47
		}
	}))));
};

exports.AppHeader = AppHeader;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\Header.js"); } } })();

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppLayout = undefined;

var _link = __webpack_require__(658);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = __webpack_require__(577);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\layout\\Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\layout\\Layout.js"); } } })();

/***/ }),

/***/ 891:
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

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var ApiConfig = {
	endPoint: "https://vorcan.prismic.io/api/v2"
};

exports.ApiConfig = ApiConfig;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\config\\ApiConfig.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\config\\ApiConfig.js"); } } })();

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiConfig = __webpack_require__(892);

Object.keys(_ApiConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ApiConfig[key];
    }
  });
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\config\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\config\\index.js"); } } })();

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _translateError = __webpack_require__(895);

Object.keys(_translateError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _translateError[key];
    }
  });
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\utils\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\utils\\index.js"); } } })();

/***/ }),

/***/ 895:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\utils\\translateError.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\utils\\translateError.js"); } } })();

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(753);


/***/ })

},[980]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXHBvc3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzP2VlODRjNmMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qcz82NmVkNDVjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcz82NmVkNDVjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcz82NmVkNDVjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC9Qb3N0LmpzPzY2ZWQ0NWMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL0FwaUNvbmZpZy5qcz82NmVkNDVjIiwid2VicGFjazovLy8uL2NvbmZpZy9pbmRleC5qcz82NmVkNDVjIiwid2VicGFjazovLy8uL3V0aWxzL2luZGV4LmpzPzY2ZWQ0NWMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdHJhbnNsYXRlRXJyb3IuanM/NjZlZDQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2hlYWRlci9IZWFkZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2xheW91dC9MYXlvdXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Bvc3QvUG9zdCc7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2luZGV4LmpzIiwiaW1wb3J0IHtDb250YWluZXIsIEhlYWRlcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IFByaXNtaWMgZnJvbSAncHJpc21pYy1qYXZhc2NyaXB0JztcclxuaW1wb3J0IHtBcGlDb25maWd9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XHJcbmltcG9ydCB7dHJhbnNsYXRlRXJyb3J9IGZyb20gJy4uL3V0aWxzL2luZGV4JztcclxuaW1wb3J0IHtQb3N0IGFzIFBvc3RDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgnO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQ8UG9zdENvbXBvbmVudCBwb3N0ID0ge3Bvc3R9IC8+XHJcblx0KTtcclxufVxyXG5cclxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KXtcclxuXHRjb25zdCB7aWR9ID0gY29udGV4dC5xdWVyeTtcclxuXHR0cnl7XHJcblx0XHRsZXQgZW5kUG9pbnQgPSBBcGlDb25maWcuZW5kUG9pbnQ7XHJcblx0XHRsZXQgYXBpID0gYXdhaXQgUHJpc21pYy5nZXRBcGkoZW5kUG9pbnQpLmNhdGNoKHRyYW5zbGF0ZUVycm9yKFwiTm8gQXBpIGZvdW5kXCIpKTtcclxuXHRcdGxldCBxdWVyeVJlc3VsdCA9IGF3YWl0IGFwaS5xdWVyeShcclxuXHRcdFx0XHRQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LmlkJywgaWQpXHJcblx0XHRcdCkuY2F0Y2godHJhbnNsYXRlRXJyb3IoXCJObyBQb3N0cyBmb3VuZFwiKSk7XHJcblx0XHRjb25zb2xlLmxvZyhxdWVyeVJlc3VsdCk7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwb3N0OnF1ZXJ5UmVzdWx0XHJcblx0XHR9O1xyXG5cdH1jYXRjaChlcnIpe1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHBvc3Q6dW5kZWZpbmVkXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wb3N0LmpzP2VudHJ5IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtHcmlkLEhlYWRlciwgTWVudX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5jb25zdCBTbG9nYW4gPSAoKSA9PiAoXHJcblx0PEhlYWRlciBzdHlsZT17Z3JpZFN0eWxlc30gYXM9J2gxJyB0ZXh0QWxpZ249J2NlbnRlcic+Vm9yY2FuJ3MgTGFicmF0b3J5PC9IZWFkZXI+XHJcbik7XHJcblxyXG5jb25zdCBncmlkU3R5bGVzID0ge1xyXG5cdHBhZGRpbmc6IFwiMjBweCAxMHB4XCIgXHJcbn1cclxuXHJcbmNvbnN0IFBvc3RMaW5rID0gKHtpZCwgdGl0bGV9KSA9PiAoXHJcblx0PExpbmsgaHJlZj17YC9wb3N0P2lkPSR7aWR9YH0+XHJcblx0XHQ8TWVudS5JdGVtIG5hbWU9e3RpdGxlfSAvPlxyXG5cdDwvTGluaz5cclxuKSBcclxuXHRcclxuY29uc3QgTGlua01lbnUgPSAoe2FjdGl2ZUl0ZW19KSA9PiAoXHJcblx0PEdyaWQ+XHJcblx0XHQ8R3JpZC5Sb3c+XHJcblx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XHJcblx0XHRcdFx0PE1lbnUgdmVydGljYWw+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHQ8TWVudS5JdGVtIG5hbWU9J0hvbWUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvbWUnfS8+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcblx0XHRcdFx0XHRcdDxNZW51Lkl0ZW0gbmFtZT0nQWJvdXQnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2Fib3V0J30vPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PFBvc3RMaW5rIGlkPVwiV1lEY2hpb0FBSHVXckNBRlwiIHRpdGxlPVwiSGVsbG8gV29ybGRcIi8+XHJcblx0XHRcdFx0PC9NZW51PlxyXG5cdFx0XHQ8L0dyaWQuQ29sdW1uPlxyXG5cdFx0XHQ8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxyXG5cdFx0XHRcdDxNZW51IHZlcnRpY2FsPlxyXG5cdFx0XHRcdDwvTWVudT5cclxuXHRcdFx0PC9HcmlkLkNvbHVtbj5cclxuXHRcdDwvR3JpZC5Sb3c+XHJcblx0PC9HcmlkPlxyXG4pO1xyXG5cclxuY29uc3QgQXBwSGVhZGVyID0gKHByb3BzKSA9PiAoXHJcblx0PEdyaWQgY2VsbGVkID5cclxuXHRcdDxHcmlkLlJvdz5cclxuXHRcdFx0PEdyaWQuQ29sdW1uIHdpZHRoPXs3fT5cclxuXHRcdFx0XHQ8U2xvZ2FuIC8+XHJcblx0XHRcdDwvR3JpZC5Db2x1bW4+XHJcblx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17OX0+XHJcblx0XHRcdFx0PExpbmtNZW51IGFjdGl2ZUl0ZVxyXG5cdFx0XHRcdG0gPSB7cHJvcHMuYWN0aXZlSXRlbX0gLz5cclxuXHRcdFx0PC9HcmlkLkNvbHVtbj5cclxuXHRcdDwvR3JpZC5Sb3c+XHJcblx0PC9HcmlkPlxyXG4pXHJcblxyXG5leHBvcnQge0FwcEhlYWRlcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQge0FwcEhlYWRlcn0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcblx0PGRpdj5cclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+Vm9yY2FuJ3MgTGFiPC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wIHdpZHRoPWRldmljZS13aWR0aFwiLz5cclxuXHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMTEvc2VtYW50aWMubWluLmNzc1wiPjwvbGluaz5cclxuXHRcdDwvSGVhZD5cclxuXHRcdDxDb250YWluZXIgZmx1aWQ+XHJcblx0XHRcdDxBcHBIZWFkZXIvPlxyXG5cdFx0XHR7cHJvcHMuY2hpbGRyZW59XHJcblx0XHQ8L0NvbnRhaW5lcj5cdFxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQge0FwcExheW91dH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwiaW1wb3J0IHtIZWFkZXIsIENvbnRhaW5lcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxuY29uc3QgUG9zdEhlYWRlciA9ICh7dGl0bGV9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxIZWFkZXIgYXM9XCJoMlwiPnt0aXRsZS50ZXh0fTwvSGVhZGVyPlxyXG5cdCk7XHJcbn1cclxuY29uc3QgUG9zdEJvZHkgPSAoe2NvbnRlbnR9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb250ZW50Lmxlbmd0aD4wP1xyXG5cdFx0XHRcdFx0Y29udGVudC5tYXAoIFxyXG5cdFx0XHRcdFx0XHRkYXRhID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8YXJ0aWNsZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlx0e2RhdGEudGV4dH0gPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2FydGljbGU+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdDxwPk5vIHBvc3QgZm91bmQ8L3A+XHJcblx0XHRcdH1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7XHJcblx0bGV0IHJlc3VsdCA9IHBvc3QgJiYgcG9zdFtcInJlc3VsdHNcIl0gJiYgcG9zdFtcInJlc3VsdHNcIl0gJiYgcG9zdFtcInJlc3VsdHNcIl0ubGVuZ3RoPjAgJiYgcG9zdFtcInJlc3VsdHNcIl1bMF0gfHwge307XHJcblx0bGV0IGNvbnRlbnQgPSByZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS5jb250ZW50IHx8IFtdO1xyXG5cdGxldCB0aXRsZSA9IHJlc3VsdC5kYXRhICYmIHJlc3VsdFtcImRhdGFcIl1bXCJwYWdlX3RpdGxlXCJdICYmIHJlc3VsdFtcImRhdGFcIl1bXCJwYWdlX3RpdGxlXCJdWzBdIHx8IFwiXCI7XHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdDxQb3N0SGVhZGVyIHRpdGxlPXt0aXRsZX0gLz5cclxuXHRcdFx0PFBvc3RCb2R5IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQge1Bvc3R9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcG9zdC9Qb3N0LmpzIiwiY29uc3QgQXBpQ29uZmlnID0ge1xyXG5cdGVuZFBvaW50OiBcImh0dHBzOi8vdm9yY2FuLnByaXNtaWMuaW8vYXBpL3YyXCJcclxufVxyXG5cclxuZXhwb3J0IHtBcGlDb25maWd9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL0FwaUNvbmZpZy5qcyIsImV4cG9ydCAqIGZyb20gJy4vQXBpQ29uZmlnJ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9pbmRleC5qcyIsImV4cG9ydCAqIGZyb20gJy4vdHJhbnNsYXRlRXJyb3InO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2luZGV4LmpzIiwiY29uc3QgdHJhbnNsYXRlRXJyb3IgPSAobXNnKSA9PiB7XHJcbiAgdmFyIG5ld0VyciA9IG5ldyBFcnJvcihtc2cpO1xyXG4gIHJldHVybiBlID0+IHsgXHJcbiAgICBuZXdFcnIub3JpZ2luYWxFcnJvciA9IGU7XHJcbiAgICB0aHJvdyBuZXdFcnI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge3RyYW5zbGF0ZUVycm9yfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy90cmFuc2xhdGVFcnJvci5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFGQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFMQTtBQUNBO0FBT0E7O0FBRUE7QUFBQTtBQUNBO0FBWEE7QUFBQTtBQWFBO0FBQ0E7QUFEQTs7QUFFQTtBQUFBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBb0JBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUZBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQWZBO0FBQ0E7QUFxQkE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBS0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTs7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQWRBO0FBQ0E7QUFtQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTs7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFJQTtBQUhBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        