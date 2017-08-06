'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppSidebar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\components\\sidebar\\Sidebar.js';


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