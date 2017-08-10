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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Logo = require('./logo/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _index = require('./common/index');

var _styles = require('./styles');

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
  }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, inverted: true, size: 'large', color: 'white', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_semanticUiReact.Icon, { circular: true, size: 'large', inverted: true, name: link.icon, color: 'teal', __source: {
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