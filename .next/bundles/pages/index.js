
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 657:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\index.js"); } } })();

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

var _index = __webpack_require__(657);

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

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppHeader = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(594);

var _link2 = _interopRequireDefault(_link);

var _semanticUiReact = __webpack_require__(703);

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

var LinkMenu = function LinkMenu(_ref) {
	var activeItem = _ref.activeItem;
	return _react2.default.createElement(_semanticUiReact.Grid, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement(_semanticUiReact.Menu, { vertical: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, _react2.default.createElement(_link2.default, { href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Home', active: activeItem === 'home', __source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	})), _react2.default.createElement(_link2.default, { href: '/about', __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'About', active: activeItem === 'about', __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	})))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement(_semanticUiReact.Menu, { vertical: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}))));
};

var AppHeader = function AppHeader(props) {
	return _react2.default.createElement(_semanticUiReact.Grid, { celled: true, __source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 7, __source: {
			fileName: _jsxFileName,
			lineNumber: 36
		}
	}, _react2.default.createElement(Slogan, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	})), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 9, __source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, _react2.default.createElement(LinkMenu, { activeIte: true,
		m: props.activeItem, __source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}))));
};

exports.AppHeader = AppHeader;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Design Lab\\projects\\vorcan\\App\\components\\header\\Header.js"); } } })();

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppLayout = undefined;

var _link = __webpack_require__(594);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = __webpack_require__(703);

var _index = __webpack_require__(657);

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

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(752);


/***/ })

},[970]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcz9hOTM4ZmNiIiwid2VicGFjazovLy8uL3BhZ2VzP2E5MzhmY2IiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzP2E5MzhmY2IiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzP2E5MzhmY2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9oZWFkZXIvSGVhZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9sYXlvdXQvTGF5b3V0JztcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0FwcExheW91dH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuXHQ8QXBwTGF5b3V0PlxyXG5cdDwvQXBwTGF5b3V0PlxyXG4pXHJcblx0XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0dyaWQsSGVhZGVyLCBNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmNvbnN0IFNsb2dhbiA9ICgpID0+IChcclxuXHQ8SGVhZGVyIHN0eWxlPXtncmlkU3R5bGVzfSBhcz0naDEnIHRleHRBbGlnbj0nY2VudGVyJz5Wb3JjYW4ncyBMYWJyYXRvcnk8L0hlYWRlcj5cclxuKTtcclxuXHJcbmNvbnN0IGdyaWRTdHlsZXMgPSB7XHJcblx0cGFkZGluZzogXCIyMHB4IDEwcHhcIiBcclxufVxyXG5cclxuY29uc3QgTGlua01lbnUgPSAoe2FjdGl2ZUl0ZW19KSA9PiAoXHJcblx0PEdyaWQ+XHJcblx0XHQ8R3JpZC5Sb3c+XHJcblx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XHJcblx0XHRcdFx0PE1lbnUgdmVydGljYWw+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHQ8TWVudS5JdGVtIG5hbWU9J0hvbWUnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvbWUnfS8+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcblx0XHRcdFx0XHRcdDxNZW51Lkl0ZW0gbmFtZT0nQWJvdXQnIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2Fib3V0J30vPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvTWVudT5cclxuXHRcdFx0PC9HcmlkLkNvbHVtbj5cclxuXHRcdFx0PEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cclxuXHRcdFx0XHQ8TWVudSB2ZXJ0aWNhbD5cclxuXHRcdFx0XHQ8L01lbnU+XHJcblx0XHRcdDwvR3JpZC5Db2x1bW4+XHJcblx0XHQ8L0dyaWQuUm93PlxyXG5cdDwvR3JpZD5cclxuKTtcclxuXHJcbmNvbnN0IEFwcEhlYWRlciA9IChwcm9wcykgPT4gKFxyXG5cdDxHcmlkIGNlbGxlZCA+XHJcblx0XHQ8R3JpZC5Sb3c+XHJcblx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17N30+XHJcblx0XHRcdFx0PFNsb2dhbiAvPlxyXG5cdFx0XHQ8L0dyaWQuQ29sdW1uPlxyXG5cdFx0XHQ8R3JpZC5Db2x1bW4gd2lkdGg9ezl9PlxyXG5cdFx0XHRcdDxMaW5rTWVudSBhY3RpdmVJdGVcclxuXHRcdFx0XHRtID0ge3Byb3BzLmFjdGl2ZUl0ZW19IC8+XHJcblx0XHRcdDwvR3JpZC5Db2x1bW4+XHJcblx0XHQ8L0dyaWQuUm93PlxyXG5cdDwvR3JpZD5cclxuKVxyXG5cclxuZXhwb3J0IHtBcHBIZWFkZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHtBcHBIZWFkZXJ9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFwcExheW91dCA9IChwcm9wcykgPT4gKFxyXG5cdDxkaXY+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlZvcmNhbidzIExhYjwvdGl0bGU+XHJcblx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XHJcblx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjExL3NlbWFudGljLm1pbi5jc3NcIj48L2xpbms+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8Q29udGFpbmVyIGZsdWlkPlxyXG5cdFx0XHQ8QXBwSGVhZGVyLz5cclxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxyXG5cdFx0PC9Db250YWluZXI+XHRcclxuXHQ8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IHtBcHBMYXlvdXR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQWRBO0FBQ0E7QUFvQkE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        