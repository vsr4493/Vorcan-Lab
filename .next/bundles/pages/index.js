
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/common/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/common/index.js"); } } })();

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

var _Post = __webpack_require__(896);

Object.keys(_Post).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Post[key];
    }
  });
});

var _Sidebar = __webpack_require__(897);

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
exports.AppHeader = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(556);

var _Logo = __webpack_require__(889);

var _Logo2 = _interopRequireDefault(_Logo);

var _Navbar = __webpack_require__(891);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _styles = __webpack_require__(893);

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/header/Header.js';


var AppHeader = function AppHeader(props) {
	return _react2.default.createElement(_semanticUiReact.Grid, { stretched: true, stackable: true, style: styles.container.grid, __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Row, { stretched: true, style: styles.container.row, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_semanticUiReact.Grid.Column, { doubling: true, tablet: 6, computer: 4, __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement(_Logo2.default, { toggleSidebar: props.toggleSidebar, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	})), _react2.default.createElement(_semanticUiReact.Grid.Column, { doubling: true, tablet: 10, computer: 12, __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(_Navbar2.default, { links: props.links, activeLink: props.activeLink, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}))));
};

exports.AppHeader = AppHeader;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/Header.js"); } } })();

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

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/header/common/Facade.js';


var Facade = function Facade() {
	return _react2.default.createElement('div', { style: styles.outer, __source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement('div', { style: (0, _assign2.default)({}, styles.inner, styles.transform), __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}));
};

exports.Facade = Facade;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/common/Facade.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/common/Facade.js"); } } })();

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
	width: "100%",
	height: "100%",
	position: "absolute"
};
var transform = {
	left: "-22%",
	bottom: "0px",
	transform: "skewX(-20deg)",
	transformOrigin: "bottom left"
};

exports.outer = outer;
exports.inner = inner;
exports.transform = transform;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/common/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/common/styles.js"); } } })();

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(556);

var _styles = __webpack_require__(890);

var styles = _interopRequireWildcard(_styles);

var _index = __webpack_require__(658);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/header/logo/Logo.js';


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
	}, _react2.default.createElement(_semanticUiReact.Button, { icon: true, onClick: toggleSidebar, __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement('sup', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', inverted: true, name: 'content', __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	})))), _react2.default.createElement(_semanticUiReact.Header.Content, { style: { marginLeft: "10px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, _react2.default.createElement('sup', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, 'Vorcan\'s'), _react2.default.createElement('sub', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, 'Lab'))));
};

exports.default = Logo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/logo/Logo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/logo/Logo.js"); } } })();

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/logo/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/logo/styles.js"); } } })();

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(556);

var _styles = __webpack_require__(892);

var styles = _interopRequireWildcard(_styles);

var _link = __webpack_require__(657);

var _link2 = _interopRequireDefault(_link);

var _index = __webpack_require__(658);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/header/navbar/Navbar.js';


var MenuItem = function MenuItem(_ref) {
	var href = _ref.href,
	    title = _ref.title,
	    activeItem = _ref.activeItem;
	return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: title, size: 'large', active: activeItem === title, __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement(_link2.default, { href: href, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'black', __source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, title)));
};

var Navbar = function Navbar(_ref2) {
	var activeLink = _ref2.activeLink,
	    links = _ref2.links;
	return _react2.default.createElement(_semanticUiReact.Menu, { borderless: true, style: styles.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, links.map(function (link, index) {
		return _react2.default.createElement(MenuItem, { href: link.url, key: index, title: link.title, activeItem: link.title == activeLink, __source: {
				fileName: _jsxFileName,
				lineNumber: 18
			}
		});
	}));
};

exports.default = Navbar;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/navbar/Navbar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/navbar/Navbar.js"); } } })();

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = {
	marginLeft: "0px",
	borderRadius: "0px",
	border: "0px",
	background: "transparent",
	boxShadow: "none",
	float: "right"
};

var menuItem = {
	transform: "skewX(20deg)",
	transformOrigin: "bottom left"
};

exports.container = container;
exports.menuItem = menuItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/navbar/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/navbar/styles.js"); } } })();

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = {
	grid: {
		marginBottom: "0px",
		backgroundColor: "#FFF056"
	},
	row: {
		paddingTop: "10px",
		paddingBottom: "0px"
	}
};

exports.container = container;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/header/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/header/styles.js"); } } })();

/***/ }),

/***/ 894:
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

var _semanticUiReact = __webpack_require__(556);

var _index = __webpack_require__(659);

var _index2 = __webpack_require__(900);

var _styles = __webpack_require__(895);

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
			sidebarVisible: false,
			contentVisible: false
		};
		return _this;
	}

	(0, _createClass3.default)(AppLayout, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({
				minHeight: window.innerHeight - 60 + 'px',
				contentVisible: true
			});
		}
	}, {
		key: 'toggleSidebar',
		value: function toggleSidebar() {
			this.setState({ sidebarVisible: !this.state.sidebarVisible });
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
					lineNumber: 30
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, _react2.default.createElement('title', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, 'Vorcan\'s Lab'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0 width=device-width', __source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css', __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			})), _react2.default.createElement(_index.AppHeader, { links: _index2.AppRoutes.links, toggleSidebar: this.toggleSidebar.bind(this), activeLink: undefined, __source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}), _react2.default.createElement(_semanticUiReact.Sidebar.Pushable, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement(_index.AppSidebar, { visible: sidebarVisible, __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}), _react2.default.createElement(_semanticUiReact.Sidebar.Pusher, { style: { minHeight: minHeight, display: showContent }, __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, this.props.children)));
		}
	}]);

	return AppLayout;
}(_react2.default.Component);

exports.AppLayout = AppLayout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/layout/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/layout/Layout.js"); } } })();

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var container = {
	height: "100%"
};

exports.container = container;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/layout/styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/layout/styles.js"); } } })();

/***/ }),

/***/ 896:
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

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppSidebar = undefined;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(556);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vorcan/Vorcan/Vorcan.me/components/sidebar/Sidebar.js';


var AppSidebar = function AppSidebar(_ref) {
  var visible = _ref.visible;
  return _react2.default.createElement(_semanticUiReact.Sidebar, { as: _semanticUiReact.Menu, animation: 'push', width: 'thin', visible: visible, icon: 'labeled', vertical: true, inverted: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'home', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'home', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), 'Home'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'gamepad', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'gamepad', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), 'Games'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'camera', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'camera', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), 'Channels'));
};

exports.AppSidebar = AppSidebar;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/Sidebar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/components/sidebar/Sidebar.js"); } } })();

/***/ }),

/***/ 898:
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

/***/ 899:
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
	}, {
		url: "/blog",
		title: "Blog"
	}]
};

exports.AppRoutes = AppRoutes;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vorcan/Vorcan/Vorcan.me/config/AppRoutes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vorcan/Vorcan/Vorcan.me/config/AppRoutes.js"); } } })();

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiConfig = __webpack_require__(898);

Object.keys(_ApiConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ApiConfig[key];
    }
  });
});

var _AppRoutes = __webpack_require__(899);

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

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(753);


/***/ })

},[984]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2NvbW1vbi9pbmRleC5qcz9hNDY4N2IzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanM/YTQ2ODdiMyIsIndlYnBhY2s6Ly8vLi9wYWdlcz9hNDY4N2IzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcz9hNDY4N2IzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2NvbW1vbi9GYWNhZGUuanM/YTQ2ODdiMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9jb21tb24vc3R5bGVzLmpzP2E0Njg3YjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvbG9nby9Mb2dvLmpzP2E0Njg3YjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvbG9nby9zdHlsZXMuanM/YTQ2ODdiMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9uYXZiYXIvTmF2YmFyLmpzP2E0Njg3YjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvbmF2YmFyL3N0eWxlcy5qcz9hNDY4N2IzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL3N0eWxlcy5qcz9hNDY4N2IzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcz9hNDY4N2IzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3N0eWxlcy5qcz9hNDY4N2IzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC9Qb3N0LmpzP2E0Njg3YjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXIuanM/YTQ2ODdiMyIsIndlYnBhY2s6Ly8vLi9jb25maWcvQXBpQ29uZmlnLmpzP2E0Njg3YjMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL0FwcFJvdXRlcy5qcz9hNDY4N2IzIiwid2VicGFjazovLy8uL2NvbmZpZy9pbmRleC5qcz9hNDY4N2IzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL0ZhY2FkZVwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2NvbW1vbi9pbmRleC5qcyIsImV4cG9ydCAqIGZyb20gJy4vaGVhZGVyL0hlYWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2xheW91dC9MYXlvdXQnO1xuZXhwb3J0ICogZnJvbSAnLi9wb3N0L1Bvc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9zaWRlYmFyL1NpZGViYXInO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QXBwTGF5b3V0fSBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4JztcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG5cdDxBcHBMYXlvdXQ+XG5cdDwvQXBwTGF5b3V0PlxuKVxuXHRcbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQge0dyaWR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvL0xvZ28nOyBcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXIvTmF2YmFyJzsgXG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBBcHBIZWFkZXIgPSAocHJvcHMpID0+IChcblx0PEdyaWQgc3RyZXRjaGVkIHN0YWNrYWJsZSBzdHlsZT17c3R5bGVzLmNvbnRhaW5lci5ncmlkfT5cblx0XHQ8R3JpZC5Sb3cgc3RyZXRjaGVkIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyLnJvd30+XG5cdFx0XHQ8R3JpZC5Db2x1bW4gZG91YmxpbmcgdGFibGV0PXs2fSBjb21wdXRlcj17NH0+XG5cdFx0XHRcdDxMb2dvIHRvZ2dsZVNpZGViYXIgPSB7cHJvcHMudG9nZ2xlU2lkZWJhcn0vPlxuXHRcdFx0PC9HcmlkLkNvbHVtbj5cblx0XHRcdDxHcmlkLkNvbHVtbiBkb3VibGluZyB0YWJsZXQ9ezEwfSBjb21wdXRlcj17MTJ9PlxuXHRcdFx0XHQ8TmF2YmFyIGxpbmtzID0ge3Byb3BzLmxpbmtzfSBhY3RpdmVMaW5rID0ge3Byb3BzLmFjdGl2ZUxpbmt9IC8+XG5cdFx0XHQ8L0dyaWQuQ29sdW1uPlxuXHRcdDwvR3JpZC5Sb3c+XG5cdDwvR3JpZD5cbilcblxuZXhwb3J0IHtBcHBIZWFkZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcyIsImltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IEZhY2FkZSA9ICgpID0+IChcblx0PGRpdiBzdHlsZT17c3R5bGVzLm91dGVyfT5cblx0XHQ8ZGl2IHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LHN0eWxlcy5pbm5lcixzdHlsZXMudHJhbnNmb3JtKX0+PC9kaXY+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IHtGYWNhZGV9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2NvbW1vbi9GYWNhZGUuanMiLCJjb25zdCBvdXRlciA9IHtcblx0cG9zaXRpb246XCJhYnNvbHV0ZVwiLFxuXHRkaXNwbGF5OlwiYmxvY2tcIixcblx0d2lkdGg6XCIxMDAlXCIsXG5cdGhlaWdodDpcIjEwMCVcIixcblx0dG9wOlwiMHB4XCIsXG5cdGxlZnQ6XCIwcHhcIixcblx0b3ZlcmZsb3c6XCJoaWRkZW5cIixcbn1cbmNvbnN0IGlubmVyID0ge1xuXHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzE5MTkxOVwiLCBcblx0d2lkdGg6XCIxMDAlXCIsXG5cdGhlaWdodDpcIjEwMCVcIixcblx0cG9zaXRpb246XCJhYnNvbHV0ZVwiLFxufVxuY29uc3QgdHJhbnNmb3JtID0ge1xuXHRsZWZ0OlwiLTIyJVwiLFxuXHRib3R0b206XCIwcHhcIixcblx0dHJhbnNmb3JtOlwic2tld1goLTIwZGVnKVwiLFxuXHR0cmFuc2Zvcm1PcmlnaW46IFwiYm90dG9tIGxlZnRcIixcbn1cblxuZXhwb3J0IHtvdXRlciwgaW5uZXIsIHRyYW5zZm9ybX07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvY29tbW9uL3N0eWxlcy5qcyIsImltcG9ydCB7SGVhZGVyLEljb24sQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHtGYWNhZGV9IGZyb20gJy4uL2NvbW1vbi9pbmRleCc7XG5cbmNvbnN0IExvZ28gPSAoe3RvZ2dsZVNpZGViYXJ9KSA9PiAoXG5cdDxkaXY+XG5cdDxIZWFkZXIgYXM9J2gxJyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxuXHRcdDxGYWNhZGUvPlxuXHRcdDxIZWFkZXIuQ29udGVudD5cblx0XHRcdDxCdXR0b24gaWNvbiBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfT5cblx0XHRcdFx0PHN1cD5cblx0XHRcdFx0XHQ8SWNvbiBzaXplPVwibGFyZ2VcIiBpbnZlcnRlZCBuYW1lPVwiY29udGVudFwiIC8+XG5cdFx0XHRcdDwvc3VwPlxuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9IZWFkZXIuQ29udGVudD5cblx0XHQ8SGVhZGVyLkNvbnRlbnQgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTBweFwifX0+XG5cdFx0XHRcdDxzdXA+Vm9yY2FuJ3M8L3N1cD5cblx0XHRcdFx0PHN1Yj5MYWI8L3N1Yj5cblx0XHQ8L0hlYWRlci5Db250ZW50PlxuXHQ8L0hlYWRlcj5cblx0PC9kaXY+XG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIvbG9nby9Mb2dvLmpzIiwiY29uc3QgY29udGFpbmVyID0ge1xuXHRjb2xvcjogXCIjZmZmXCIsXG5cdGZvbnRTaXplOiBcIjI0cHhcIixcblx0cGFkZGluZzogXCIzMHB4XCJcbn1cblxuZXhwb3J0IHtjb250YWluZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL2xvZ28vc3R5bGVzLmpzIiwiaW1wb3J0IHtHcmlkLEhlYWRlciwgTWVudSwgU2VnbWVudCwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7RmFjYWRlfSBmcm9tICcuLi9jb21tb24vaW5kZXgnO1xuXG5jb25zdCBNZW51SXRlbSA9ICh7aHJlZix0aXRsZSxhY3RpdmVJdGVtfSkgPT4gKFxuXHRcdDxNZW51Lkl0ZW0gbmFtZT17dGl0bGV9IHNpemU9XCJsYXJnZVwiIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gdGl0bGV9PlxuXHRcdFx0PExpbmsgaHJlZj17aHJlZn0+XG5cdFx0XHRcdDxCdXR0b24gYmFzaWMgY29sb3I9XCJibGFja1wiPnt0aXRsZX08L0J1dHRvbj5cblx0XHRcdDwvTGluaz5cblx0XHQ8L01lbnUuSXRlbT5cbik7XG5cbmNvbnN0IE5hdmJhciA9ICh7YWN0aXZlTGluaywgbGlua3N9KSA9PiAoXG5cdDxNZW51IGJvcmRlcmxlc3Mgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdHtcblx0XHRcdGxpbmtzLm1hcCgobGluayxpbmRleCkgPT4gXG5cdFx0XHRcdFx0PE1lbnVJdGVtICBocmVmPXtsaW5rLnVybH0ga2V5PXtpbmRleH0gdGl0bGU9e2xpbmsudGl0bGV9IGFjdGl2ZUl0ZW09e2xpbmsudGl0bGUgPT0gYWN0aXZlTGlua30gLz5cblx0XHRcdClcblx0XHR9XG5cdDwvTWVudT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci9uYXZiYXIvTmF2YmFyLmpzIiwiY29uc3QgY29udGFpbmVyID0ge1xuXHRtYXJnaW5MZWZ0OlwiMHB4XCIsXG5cdGJvcmRlclJhZGl1czpcIjBweFwiLFxuXHRib3JkZXI6XCIwcHhcIixcblx0YmFja2dyb3VuZDpcInRyYW5zcGFyZW50XCIsXG5cdGJveFNoYWRvdzpcIm5vbmVcIixcblx0ZmxvYXQ6XCJyaWdodFwiXG59O1xuXG5jb25zdCBtZW51SXRlbSA9IHtcblx0dHJhbnNmb3JtOlwic2tld1goMjBkZWcpXCIsXG5cdHRyYW5zZm9ybU9yaWdpbjogXCJib3R0b20gbGVmdFwiLFxufVxuXG5leHBvcnQge2NvbnRhaW5lciwgbWVudUl0ZW19O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL25hdmJhci9zdHlsZXMuanMiLCJjb25zdCBjb250YWluZXIgPSAge1xuXHRncmlkOiB7XG5cdFx0bWFyZ2luQm90dG9tOlwiMHB4XCIsXG5cdFx0YmFja2dyb3VuZENvbG9yOlwiI0ZGRjA1NlwiXG5cdH0sXG5cdHJvdzoge1xuXHRcdHBhZGRpbmdUb3A6XCIxMHB4XCIsXG5cdFx0cGFkZGluZ0JvdHRvbTpcIjBweFwiXG5cdH1cbn1cblxuZXhwb3J0IHtjb250YWluZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZGVyL3N0eWxlcy5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHtDb250YWluZXIsU2lkZWJhciwgU2VnbWVudH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQge0FwcEhlYWRlcixBcHBTaWRlYmFyfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge0FwcFJvdXRlc30gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4JztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBBcHBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNpZGViYXJWaXNpYmxlOmZhbHNlLFxuXHRcdFx0Y29udGVudFZpc2libGU6IGZhbHNlXG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIFx0bWluSGVpZ2h0OiAod2luZG93LmlubmVySGVpZ2h0IC0gNjApICsgJ3B4Jyxcblx0XHRcdGNvbnRlbnRWaXNpYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cblx0dG9nZ2xlU2lkZWJhcigpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3NpZGViYXJWaXNpYmxlOiAhdGhpcy5zdGF0ZS5zaWRlYmFyVmlzaWJsZX0pO1xuXHR9XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHtzaWRlYmFyVmlzaWJsZSwgbWluSGVpZ2h0LCBjb250ZW50VmlzaWJsZX0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IHNob3dDb250ZW50ID0gY29udGVudFZpc2libGU/XCJibG9ja1wiOlwibm9uZVwiO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+Vm9yY2FuJ3MgTGFiPC90aXRsZT5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAgd2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjExL3NlbWFudGljLm1pbi5jc3NcIj48L2xpbms+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PEFwcEhlYWRlciBsaW5rcz17QXBwUm91dGVzLmxpbmtzfSB0b2dnbGVTaWRlYmFyPXt0aGlzLnRvZ2dsZVNpZGViYXIuYmluZCh0aGlzKX0gYWN0aXZlTGluaz17dW5kZWZpbmVkfS8+XG5cdFx0XHRcdDxTaWRlYmFyLlB1c2hhYmxlPlxuXHRcdFx0XHRcdDxBcHBTaWRlYmFyIHZpc2libGU9e3NpZGViYXJWaXNpYmxlfS8+XG5cdFx0XHRcdFx0PFNpZGViYXIuUHVzaGVyIHN0eWxlPXt7bWluSGVpZ2h0Om1pbkhlaWdodCwgZGlzcGxheTpzaG93Q29udGVudH19PlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0PC9TaWRlYmFyLlB1c2hlcj5cblx0XHRcdFx0PC9TaWRlYmFyLlB1c2hhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVx0XG5cbmV4cG9ydCB7QXBwTGF5b3V0fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiLCJjb25zdCBjb250YWluZXIgPSAge1xuXHRoZWlnaHQ6XCIxMDAlXCJcbn1cblxuZXhwb3J0IHtjb250YWluZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGF5b3V0L3N0eWxlcy5qcyIsImltcG9ydCB7SGVhZGVyLCBDb250YWluZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY29uc3QgUG9zdEhlYWRlciA9ICh7dGl0bGV9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PEhlYWRlciBhcz1cImgyXCI+e3RpdGxlLnRleHR9PC9IZWFkZXI+XG5cdCk7XG59XG5jb25zdCBQb3N0Qm9keSA9ICh7Y29udGVudH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0e1xuXHRcdFx0XHRjb250ZW50Lmxlbmd0aD4wP1xuXHRcdFx0XHRcdGNvbnRlbnQubWFwKCBcblx0XHRcdFx0XHRcdGRhdGEgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cdHtkYXRhLnRleHR9IDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8YnIvPlxuXHRcdFx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdDpcblx0XHRcdFx0XHQ8cD5ObyBwb3N0IGZvdW5kPC9wPlxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5jb25zdCBQb3N0ID0gKHtwb3N0fSkgPT4ge1xuXHRsZXQgcmVzdWx0ID0gcG9zdCAmJiBwb3N0W1wicmVzdWx0c1wiXSAmJiBwb3N0W1wicmVzdWx0c1wiXSAmJiBwb3N0W1wicmVzdWx0c1wiXS5sZW5ndGg+MCAmJiBwb3N0W1wicmVzdWx0c1wiXVswXSB8fCB7fTtcblx0bGV0IGNvbnRlbnQgPSByZXN1bHQuZGF0YSAmJiByZXN1bHQuZGF0YS5jb250ZW50IHx8IFtdO1xuXHRsZXQgdGl0bGUgPSByZXN1bHQuZGF0YSAmJiByZXN1bHRbXCJkYXRhXCJdW1wicGFnZV90aXRsZVwiXSAmJiByZXN1bHRbXCJkYXRhXCJdW1wicGFnZV90aXRsZVwiXVswXSB8fCBcIlwiO1xuXHRyZXR1cm4gKFxuXHRcdDxDb250YWluZXI+XG5cdFx0XHQ8UG9zdEhlYWRlciB0aXRsZT17dGl0bGV9IC8+XG5cdFx0XHQ8UG9zdEJvZHkgY29udGVudD17Y29udGVudH0gLz5cblx0XHQ8L0NvbnRhaW5lcj5cblx0KTtcbn1cblxuZXhwb3J0IHtQb3N0fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3Bvc3QvUG9zdC5qcyIsImltcG9ydCB7IFNpZGViYXIsIFNlZ21lbnQsIEJ1dHRvbiwgTWVudSwgSW1hZ2UsIEljb24sIEhlYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY29uc3QgQXBwU2lkZWJhciA9ICh7dmlzaWJsZX0pID0+IChcbiAgPFNpZGViYXIgYXM9e01lbnV9IGFuaW1hdGlvbj0ncHVzaCcgd2lkdGg9J3RoaW4nIHZpc2libGU9e3Zpc2libGV9IGljb249J2xhYmVsZWQnIHZlcnRpY2FsIGludmVydGVkPlxuICAgIDxNZW51Lkl0ZW0gbmFtZT0naG9tZSc+XG4gICAgICA8SWNvbiBuYW1lPSdob21lJyAvPlxuICAgICAgSG9tZVxuICAgIDwvTWVudS5JdGVtPlxuICAgIDxNZW51Lkl0ZW0gbmFtZT0nZ2FtZXBhZCc+XG4gICAgICA8SWNvbiBuYW1lPSdnYW1lcGFkJyAvPlxuICAgICAgR2FtZXNcbiAgICA8L01lbnUuSXRlbT5cbiAgICA8TWVudS5JdGVtIG5hbWU9J2NhbWVyYSc+XG4gICAgICA8SWNvbiBuYW1lPSdjYW1lcmEnIC8+XG4gICAgICBDaGFubmVsc1xuICAgIDwvTWVudS5JdGVtPlxuICA8L1NpZGViYXI+XG4pO1xuXG5leHBvcnQge0FwcFNpZGViYXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyLmpzIiwiY29uc3QgQXBpQ29uZmlnID0ge1xuXHRlbmRQb2ludDogXCJodHRwczovL3ZvcmNhbi5wcmlzbWljLmlvL2FwaS92MlwiXG59XG5cbmV4cG9ydCB7QXBpQ29uZmlnfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9BcGlDb25maWcuanMiLCJjb25zdCBBcHBSb3V0ZXMgPSB7XG5cdGxpbmtzOiBbXG5cdFx0e1xuXHRcdFx0dXJsOiBcIi9cIixcblx0XHRcdHRpdGxlOiBcIkhvbWVcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dXJsOiBcIi9hYm91dFwiLFxuXHRcdFx0dGl0bGU6IFwiQWJvdXRcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dXJsOiBcIi9ibG9nXCIsXG5cdFx0XHR0aXRsZTogXCJCbG9nXCJcblx0XHR9XG5cdF1cbn1cblxuZXhwb3J0IHtBcHBSb3V0ZXN9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9BcHBSb3V0ZXMuanMiLCJleHBvcnQgKiBmcm9tICcuL0FwaUNvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL0FwcFJvdXRlcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBQ0E7QUFPQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUdBO0FBRUE7QUFIQTs7QUFLQTtBQUlBO0FBTEE7QUFMQTtBQUNBO0FBU0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQURBO0FBR0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFIQTs7OztBQUtBO0FBQUE7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUEvQkE7QUFDQTtBQXNDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFLQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBOztBQVNBO0FBQUE7QUFBQTtBQUFBO0FBZEE7QUFDQTtBQW1CQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBOztBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0FBSUE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQURBO0FBS0E7QUFLQTtBQU5BO0FBVkE7QUFDQTtBQWVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        