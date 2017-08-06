'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppLayout = undefined;

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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

var _index = require('../index');

var _index2 = require('../../config/index');

var _styles = require('./styles');

var styles = _interopRequireWildcard(_styles);

var _react = require('react');

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