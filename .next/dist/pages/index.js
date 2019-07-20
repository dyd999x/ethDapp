'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _battery = require('../ethereum/battery');

var _battery2 = _interopRequireDefault(_battery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\licenta_test\\pages\\index.js?entry';


var BatteryIndex = function (_Component) {
    (0, _inherits3.default)(BatteryIndex, _Component);

    function BatteryIndex() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, BatteryIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BatteryIndex.__proto__ || (0, _getPrototypeOf2.default)(BatteryIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errMessage: 'Select an option',
            err: false,
            admin: false,
            op: false
        }, _this.onAdmin = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var accounts, manager;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this.setState({ errMessage: "" });
                            _context.prev = 1;
                            _context.next = 4;
                            return _web2.default.eth.getAccounts();

                        case 4:
                            accounts = _context.sent;
                            _context.next = 7;
                            return _battery2.default.methods.systemManager().call();

                        case 7:
                            manager = _context.sent;

                            if (accounts[0] == manager) {
                                _this.setState({ errMessage: "", admin: true, err: false });
                                _routes.Router.pushRoute('/accounts/administrator');
                            } else {
                                _this.setState({ errMessage: "Only the system manager can access this page", err: true });
                                _this.setState({ admin: false });
                            }
                            _context.next = 14;
                            break;

                        case 11:
                            _context.prev = 11;
                            _context.t0 = _context['catch'](1);

                            _this.setState({ errMessage: _context.t0.message });

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2, [[1, 11]]);
        })), _this.onSO = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var accounts, stationID;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this.setState({ errMessage: "" });
                            _context2.prev = 1;
                            _context2.next = 4;
                            return _web2.default.eth.getAccounts();

                        case 4:
                            accounts = _context2.sent;
                            _context2.next = 7;
                            return _battery2.default.methods.opToStation(accounts[0]).call();

                        case 7:
                            stationID = _context2.sent;

                            if (stationID != 0 && _this.state.admin == false) {
                                _this.setState({ errMessage: "", op: true, err: false });
                                _routes.Router.pushRoute('/accounts/stationOperator/' + accounts[0]);
                            } else {
                                _this.setState({ errMessage: "Only a station operator can access this page", err: true });
                                _this.setState({ op: false });
                            }
                            _context2.next = 14;
                            break;

                        case 11:
                            _context2.prev = 11;
                            _context2.t0 = _context2['catch'](1);

                            _this.setState({ errMessage: _context2.t0.message });

                        case 14:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[1, 11]]);
        })), _this.onUser = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var accounts;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _this.setState({ errMessage: "" });

                            if (!(_this.state.admin == false && _this.state.op == false)) {
                                _context3.next = 13;
                                break;
                            }

                            _context3.prev = 2;
                            _context3.next = 5;
                            return _web2.default.eth.getAccounts();

                        case 5:
                            accounts = _context3.sent;

                            _this.setState({ errMessage: "", err: false });
                            _routes.Router.pushRoute('/accounts/user/' + accounts[0]);
                            _context3.next = 13;
                            break;

                        case 10:
                            _context3.prev = 10;
                            _context3.t0 = _context3['catch'](2);

                            _this.setState({ errMessage: _context3.t0.message });

                        case 13:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this2, [[2, 10]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(BatteryIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('link', {
                rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            })), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'green', clearing: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', style: { margin: '0.5rem' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('a', { className: 'item', style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, 'MyBMS')))), _react2.default.createElement(_semanticUiReact.Container, { style: { width: '250px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'users', color: 'green', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }), _react2.default.createElement(_semanticUiReact.Header.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, 'Welcome')), _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: 'red', header: 'Administrator', onClick: this.onAdmin, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }), _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: 'orange', header: 'Station Operator', onClick: this.onSO, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }), _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: 'yellow', header: 'User', onClick: this.onUser, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }))), _react2.default.createElement(_semanticUiReact.Message, { error: this.state.err, content: this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }));
        }
    }]);

    return BatteryIndex;
}(_react.Component);

exports.default = BatteryIndex;

//onClick={()=> Router.pushRoute('/accounts/administrator/index')}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkhlYWRlciIsIkljb24iLCJDb250YWluZXIiLCJDYXJkIiwiU2VnbWVudCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJIZWFkIiwiTGluayIsIlJvdXRlciIsIndlYjMiLCJiYXR0ZXJ5IiwiQmF0dGVyeUluZGV4Iiwic3RhdGUiLCJlcnJNZXNzYWdlIiwiZXJyIiwiYWRtaW4iLCJvcCIsIm9uQWRtaW4iLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwic3lzdGVtTWFuYWdlciIsImNhbGwiLCJtYW5hZ2VyIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsIm9uU08iLCJvcFRvU3RhdGlvbiIsInN0YXRpb25JRCIsIm9uVXNlciIsIm1hcmdpbiIsImNvbG9yIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQVEsQUFBTSxBQUFXLEFBQUssQUFBUSxBQUFROztBQUN2RCxBQUFPOzs7O0FBQ1AsQUFBUSxBQUFLLEFBQWE7O0FBQzFCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWE7Ozs7Ozs7OztJLEFBR2Q7Ozs7Ozs7Ozs7Ozs7Ozs0TkFDRixBO3dCQUFNLEFBQ1MsQUFDWDtpQkFGRSxBQUVHLEFBQ0w7bUJBSEUsQUFHSSxBQUNOO2dCQUpFLEFBSUMsQTtBQUpELEFBQ0YsaUJBTUosQSxtRkFBVSxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFDTjtrQ0FBQSxBQUFLLFNBQVMsRUFBQyxZQURULEFBQ04sQUFBYyxBQUFZOzRDQURwQjs0Q0FBQTttQ0FJcUIsY0FBQSxBQUFLLElBSjFCLEFBSXFCLEFBQVM7OzZCQUExQjtBQUpKLGdEQUFBOzRDQUFBO21DQUtvQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsZ0JBTHBDLEFB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LElBQVIsQUFBVyxNQUFLLE9BQU8sRUFBQyxRQUF4QixBQUF1QixBQUFTOzhCQUFoQztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxPQUFPLEVBQUMsT0FBNUIsQUFBMkIsQUFBTzs4QkFBbEM7Z0NBQUE7QUFBQTtlQVZaLEFBT0EsQUFDSSxBQUNJLEFBQ0ksQUFNWiw2QkFBQSxBQUFDLDRDQUFVLE9BQU8sRUFBQyxPQUFuQixBQUFrQixBQUFROzhCQUExQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxNQUFoQixNQUFxQixXQUFyQixBQUErQjs4QkFBL0I7Z0NBQUEsQUFDSztBQURMOytCQUNLLEFBQUMsdUNBQUssTUFBTixBQUFXLFNBQVMsT0FBcEIsQUFBMEI7OEJBQTFCO2dDQURMLEFBQ0ssQUFDRDtBQURDO2dDQUNBLGNBQUQsd0JBQUEsQUFBUTs7OEJBQVI7Z0NBQUE7QUFBQTtBQUFBLGVBSFIsQUFDSSxBQUVJLEFBRUosNkJBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHVDQUFLLE9BQU4sTUFBWSxPQUFaLEFBQWtCLE9BQU0sUUFBeEIsQUFBK0IsaUJBQWdCLFNBQVMsS0FBeEQsQUFBNkQ7OEJBQTdEO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLEFBQUMsdUNBQUssT0FBTixNQUFZLE9BQVosQUFBa0IsVUFBUyxRQUEzQixBQUFrQyxvQkFBbUIsU0FBUyxLQUE5RCxBQUFtRTs4QkFBbkU7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx1Q0FBSyxPQUFOLE1BQVksT0FBWixBQUFrQixVQUFTLFFBQTNCLEFBQWtDLFFBQU8sU0FBUyxLQUFsRCxBQUF1RDs4QkFBdkQ7Z0NBeEJSLEFBZ0JBLEFBS0ksQUFHSSxBQUdSO0FBSFE7a0NBR1IsQUFBQywwQ0FBUSxPQUFPLEtBQUEsQUFBSyxNQUFyQixBQUEyQixLQUFLLFNBQVMsS0FBQSxBQUFLLE1BQTlDLEFBQW9EOzhCQUFwRDtnQ0E1QkosQUFDSSxBQTJCQSxBQU1QO0FBTk87Ozs7OztBQXpGZSxBLEFBa0czQjs7a0JBQUEsQUFBZTs7QUFFZiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9saWNlbnRhX3Rlc3QifQ==