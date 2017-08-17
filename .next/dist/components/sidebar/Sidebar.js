'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppSidebar = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Logo = require('./logo/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _MenuItem = require('./menuItem/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _index = require('./common/index');

var _styles = require('./styles');

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