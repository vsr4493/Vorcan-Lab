webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xZDgxMTcxODIyZmZmYTM3MjAxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L1Bvc3QuanM/ODA3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hlYWRlciwgQ29udGFpbmVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5jb25zdCBQb3N0SGVhZGVyID0gKHt0aXRsZX0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEhlYWRlciBhcz1cImgyXCI+e3RpdGxlLnRleHR9PC9IZWFkZXI+XHJcblx0KTtcclxufVxyXG5jb25zdCBQb3N0Qm9keSA9ICh7Y29udGVudH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnRlbnQubGVuZ3RoPjA/XHJcblx0XHRcdFx0XHRjb250ZW50Lm1hcCggXHJcblx0XHRcdFx0XHRcdGRhdGEgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxhcnRpY2xlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+XHR7ZGF0YS50ZXh0fSA8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0OlxyXG5cdFx0XHRcdFx0PHA+Tm8gcG9zdCBmb3VuZDwvcD5cclxuXHRcdFx0fVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcclxuXHRsZXQgcmVzdWx0ID0gcG9zdCAmJiBwb3N0W1wicmVzdWx0c1wiXSAmJiBwb3N0W1wicmVzdWx0c1wiXSAmJiBwb3N0W1wicmVzdWx0c1wiXS5sZW5ndGg+MCAmJiBwb3N0W1wicmVzdWx0c1wiXVswXSB8fCB7fTtcclxuXHRsZXQgY29udGVudCA9IHJlc3VsdC5kYXRhICYmIHJlc3VsdC5kYXRhLmNvbnRlbnQgfHwgW107XHJcblx0bGV0IHRpdGxlID0gcmVzdWx0LmRhdGEgJiYgcmVzdWx0W1wiZGF0YVwiXVtcInBhZ2VfdGl0bGVcIl0gJiYgcmVzdWx0W1wiZGF0YVwiXVtcInBhZ2VfdGl0bGVcIl1bMF0gfHwgXCJcIjtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0PFBvc3RIZWFkZXIgdGl0bGU9e3RpdGxlfSAvPlxyXG5cdFx0XHQ8UG9zdEJvZHkgY29udGVudD17Y29udGVudH0gLz5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7UG9zdH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wb3N0L1Bvc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFLQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBOztBQVNBO0FBQUE7QUFBQTtBQUFBO0FBZEE7QUFDQTtBQW1CQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBOztBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9