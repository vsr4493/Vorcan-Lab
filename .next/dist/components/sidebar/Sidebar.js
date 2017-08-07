'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppSidebar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Design Lab\\projects\\vorcan\\App\\components\\sidebar\\Sidebar.js';


var AppSidebar = function AppSidebar(_ref) {
  var visible = _ref.visible,
      links = _ref.links;
  return _react2.default.createElement(_semanticUiReact.Sidebar, { as: _semanticUiReact.Menu, animation: 'push', width: 'thin', visible: visible, icon: 'labeled', vertical: true, inverted: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, links.map(function (link, index) {
    return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: link.title, key: index, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, _react2.default.createElement(_link2.default, { href: link.url, __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, _react2.default.createElement(_semanticUiReact.Button, { link: true, basic: true, inverted: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement(_semanticUiReact.Icon, { circular: true, size: 'small', name: link.icon, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }), link.title)));
  }));
};

exports.AppSidebar = AppSidebar;