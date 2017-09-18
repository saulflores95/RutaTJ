'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../components/app/App');

var _App2 = _interopRequireDefault(_App);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _GeneralMap = require('../components/map/GeneralMap');

var _GeneralMap2 = _interopRequireDefault(_GeneralMap);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _reactGridSystem = require('react-grid-system');

var _RouteSingle = require('../components/routes/RouteSingle');

var _RouteSingle2 = _interopRequireDefault(_RouteSingle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Saul\\Documents\\GitHub\\RutaTJ\\pages\\index.js?entry';


var HomePage = function (_Component) {
  (0, _inherits3.default)(HomePage, _Component);

  function HomePage() {
    (0, _classCallCheck3.default)(this, HomePage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).call(this));

    _this.state = {
      online: 'No people online',
      users: []
    };
    return _this;
  }
  // connect to WS server and listen event


  (0, _createClass3.default)(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.socket = (0, _socket2.default)();
      var _self = this;
      this.socket.on('broadcast', function (data) {
        _self.setState({
          online: data
        });
      });
      this.socket.on('new user', function (data) {
        _self.setState({
          users: data
        });
      });
    }

    // close socket connection

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.socket.off('message', function (data) {
        this.setState({
          online: data
        });
      });
      this.socket.close();
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = {
        rutasWrapper: {
          height: '100%'
        },
        leafletContainer: {
          width: '100%',
          height: '100%'
        },
        rutasContainer: {
          overflow: 'scroll',
          overflowX: 'hidden',
          height: '100%',
          width: '100%'
        },
        rowWrapper: {
          width: '100%',
          height: '100%',
          marginLeft: 0,
          marginRight: 0
        },
        colWrapper: {
          height: '100%',
          paddingRight: 0,
          paddingLeft: 0
        }
      };
      var ruta = {
        _id: 'abc'
      };
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, console.log(this.state.online), console.log(this.state.users), _react2.default.createElement(_App2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_reactGridSystem.Row, { style: styles.rowWrapper, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_reactGridSystem.Hidden, { xs: true, sm: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_reactGridSystem.Col, { xs: 6, sm: 4, md: 4, lg: 4, style: styles.colWrapper, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('div', { style: styles.rutasContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_RouteSingle2.default, { key: ruta._id, ruta: ruta, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })))), _react2.default.createElement(_reactGridSystem.Col, { xs: 12, sm: 12, md: 8, lg: 8, style: styles.colWrapper, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('div', { style: styles.leafletContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_reactNoSsr2.default, { onSSR: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, 'Map Loading...'), __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_GeneralMap2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }))))), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, this.state.online)));
    }
  }]);

  return HomePage;
}(_react.Component);

exports.default = HomePage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJBcHAiLCJpbyIsImZldGNoIiwiR2VuZXJhbE1hcCIsIk5vU1NSIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiSGlkZGVuIiwiUm91dGVTaW5nbGUiLCJIb21lUGFnZSIsInN0YXRlIiwib25saW5lIiwidXNlcnMiLCJzb2NrZXQiLCJfc2VsZiIsIm9uIiwiZGF0YSIsInNldFN0YXRlIiwib2ZmIiwiY2xvc2UiLCJzdHlsZXMiLCJydXRhc1dyYXBwZXIiLCJoZWlnaHQiLCJsZWFmbGV0Q29udGFpbmVyIiwid2lkdGgiLCJydXRhc0NvbnRhaW5lciIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwicm93V3JhcHBlciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImNvbFdyYXBwZXIiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsInJ1dGEiLCJfaWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBVyxBQUFLLEFBQUs7O0FBQzlCLEFBQU87Ozs7Ozs7OztJQUNELEE7b0NBQ0o7O3NCQUFjO3dDQUFBOztvSUFFWjs7VUFBQSxBQUFLO2NBQVEsQUFDSCxBQUNSO2FBSlUsQUFFWixBQUFhLEFBRUo7QUFGSSxBQUNYO1dBR0g7QUFDRDs7Ozs7O3dDQUNxQixBQUNuQjtXQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7VUFBSSxRQUFKLEFBQVksQUFDWjtXQUFBLEFBQUssT0FBTCxBQUFZLEdBQVosQUFBZSxhQUFhLFVBQUEsQUFBUyxNQUFLLEFBQ3hDO2NBQUEsQUFBTTtrQkFBTixBQUFlLEFBQ0wsQUFFWDtBQUhnQixBQUNiO0FBRkosQUFLQTtXQUFBLEFBQUssT0FBTCxBQUFZLEdBQVosQUFBZSxZQUFZLFVBQUEsQUFBUyxNQUFLLEFBQ3ZDO2NBQUEsQUFBTTtpQkFBTixBQUFlLEFBQ04sQUFFVjtBQUhnQixBQUNiO0FBRkosQUFNRDtBQUVEOzs7Ozs7MkNBQ3dCLEFBQ3RCO1dBQUEsQUFBSyxPQUFMLEFBQVksSUFBWixBQUFnQixXQUFXLFVBQUEsQUFBUyxNQUFLLEFBQ3ZDO2FBQUEsQUFBSztrQkFBTCxBQUFjLEFBQ0osQUFFWDtBQUhlLEFBQ1o7QUFGSixBQUtBO1dBQUEsQUFBSyxPQUFMLEFBQVksQUFDYjs7Ozs2QkFFUyxBQUNSO1VBQUk7O2tCQUFTLEFBQ0csQUFDSixBQUVWO0FBSGMsQUFDWjs7aUJBRWdCLEFBQ1QsQUFDUDtrQkFOUyxBQUlPLEFBRVIsQUFFVjtBQUprQixBQUNoQjs7b0JBR2MsQUFDSixBQUNWO3FCQUZjLEFBRUgsQUFDWDtrQkFIYyxBQUdOLEFBQ1I7aUJBWlMsQUFRSyxBQUlQLEFBRVQ7QUFOZ0IsQUFDZDs7aUJBS1UsQUFDSCxBQUNQO2tCQUZVLEFBRUYsQUFDUjtzQkFIVSxBQUdFLEFBQ1o7dUJBbEJTLEFBY0MsQUFJRyxBQUVmO0FBTlksQUFDVjs7a0JBS1UsQUFDRixBQUNSO3dCQUZVLEFBRUksQUFDZDt1QkF2QkosQUFBYSxBQW9CQyxBQUdHLEFBR2pCO0FBTmMsQUFDVjtBQXJCUyxBQUNYO1VBeUJFO2FBQUosQUFBVyxBQUNKLEFBRVA7QUFIVyxBQUNUOzZCQUdBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsVUFDRyxBQUFRLElBQUksS0FBQSxBQUFLLE1BRHBCLEFBQ0csQUFBdUIsQUFDdkIsaUJBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxNQUZwQixBQUVHLEFBQXVCLEFBRXhCLHdCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsc0NBQUksT0FBTyxPQUFaLEFBQW1CO29CQUFuQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBTyxJQUFSLE1BQVcsSUFBWDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyxzQ0FBSSxJQUFMLEFBQVMsR0FBRyxJQUFaLEFBQWdCLEdBQUcsSUFBbkIsQUFBdUIsR0FBRyxJQUExQixBQUE4QixHQUFHLE9BQU8sT0FBeEMsQUFBK0M7b0JBQS9DO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssT0FBTyxPQUFaLEFBQW1CO29CQUFuQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBWSxLQUFLLEtBQWxCLEFBQXVCLEtBQUssTUFBNUIsQUFBa0M7b0JBQWxDO3NCQUpSLEFBQ0UsQUFDRSxBQUNFLEFBQ0UsQUFJTjtBQUpNOzZCQUlOLEFBQUMsc0NBQUksSUFBTCxBQUFTLElBQUksSUFBYixBQUFpQixJQUFJLElBQXJCLEFBQXlCLEdBQUcsSUFBNUIsQUFBZ0MsR0FBRyxPQUFPLE9BQTFDLEFBQWlEO29CQUFqRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLE9BQU8sT0FBWixBQUFtQjtvQkFBbkI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsc0NBQU0sdUJBQU8sY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFBZCxBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFaVixBQUNFLEFBUUUsQUFDRSxBQUNFLEFBQ0UsQUFLUjtBQUxRO0FBQUEsOEJBS1IsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsY0FBSyxBQUFLLE1BdEJoQixBQUNFLEFBSUUsQUFpQkUsQUFBZ0IsQUFJdkI7Ozs7O0FBM0ZvQixBLEFBOEZ2Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9TYXVsL0RvY3VtZW50cy9HaXRIdWIvUnV0YVRKIn0=