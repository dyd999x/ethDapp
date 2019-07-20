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

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _battery = require('../ethereum/battery');

var _battery2 = _interopRequireDefault(_battery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\licenta_test\\components\\RequestRowUser.js';


var RequestRowUser = function (_Component) {
    (0, _inherits3.default)(RequestRowUser, _Component);

    function RequestRowUser() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRowUser);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRowUser.__proto__ || (0, _getPrototypeOf2.default)(RequestRowUser)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loading: false, errMessage: '' }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRowUser, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                address = _props.address;

            var reqDate = request.requestDate;
            var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var date = new Date(reqDate * 1000);
            var year = date.getFullYear();
            var month = months_arr[date.getMonth()];
            var day = date.getDate();
            var convdataTime = day + '/' + month + '/' + year;
            var status = '';
            var color = '';
            if (request.accepted == true && request.confirmed == true) {
                status = "Accepted and Confirmed";
                color = 'lightgreen';
            }
            if (request.accepted == true && request.confirmed == false) {
                status = "Accepted and NOT Confirmed";
                color = 'orange';
            }
            if (request.managed == false) {
                status = "Pending";
                color = 'yellow';
            }
            if (request.accepted == false && request.managed == true) {
                status = "Declined";
                color = 'red';
            }
            var dis = false;
            if (request.ownerCost == 0 && request.accepted == false) {
                dis = true;
            }
            if (request.paid == true) {
                dis = true;
            }
            return _react2.default.createElement(Row, { textAlign: 'center', style: { backgroundColor: '' + color }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(Cell, { collapsing: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                fluid: true,
                basic: true,
                content: 'Pay Swap',
                color: 'black',
                loading: this.state.loading,
                disabled: dis,
                onClick: (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _this2.setState({ loading: true, errMessage: '' });
                                    _context.prev = 1;
                                    _context.next = 4;
                                    return _battery2.default.methods.paySwap(id).send({ from: address, value: request.ownerCost });

                                case 4:
                                    _routes.Router.pushRoute('/accounts/user/' + address);
                                    _context.next = 10;
                                    break;

                                case 7:
                                    _context.prev = 7;
                                    _context.t0 = _context['catch'](1);

                                    _this2.setState({ errMessage: _context.t0.message });

                                case 10:
                                    _this2.setState({ loading: false });

                                case 11:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2, [[1, 7]]);
                })), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, this.state.errMessage)), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, request.stationID), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, request.requestedBatteryID), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, status), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, convdataTime), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, 'ETH  ', _web2.default.utils.fromWei(request.ownerCost, 'ether')));
        }
    }]);

    return RequestRowUser;
}(_react.Component);

exports.default = RequestRowUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3dVc2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGFibGUiLCJCdXR0b24iLCJMaW5rIiwid2ViMyIsImJhdHRlcnkiLCJSb3V0ZXIiLCJSZXF1ZXN0Um93VXNlciIsInN0YXRlIiwibG9hZGluZyIsImVyck1lc3NhZ2UiLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsInJlcXVlc3QiLCJhZGRyZXNzIiwicmVxRGF0ZSIsInJlcXVlc3REYXRlIiwibW9udGhzX2FyciIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJjb252ZGF0YVRpbWUiLCJzdGF0dXMiLCJjb2xvciIsImFjY2VwdGVkIiwiY29uZmlybWVkIiwibWFuYWdlZCIsImRpcyIsIm93bmVyQ29zdCIsInBhaWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJwYXlTd2FwIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJzdGF0aW9uSUQiLCJyZXF1ZXN0ZWRCYXR0ZXJ5SUQiLCJ1dGlscyIsImZyb21XZWkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFRLEFBQU07O0FBQ2QsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFhLEFBQ3BCLEFBQVEsQUFBYTs7Ozs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7Z09BQ0YsQSxRQUFNLEVBQUMsU0FBRCxBQUFTLE9BQU0sWSxBQUFmLEFBQTBCOzs7OztpQ0FFeEI7eUJBQUE7O2dCQUFBLEFBRUcsTUFGSCxBQUVlLHVCQUZmLEFBRUc7Z0JBRkgsQUFFTyxPQUZQLEFBRWUsdUJBRmYsQUFFTzt5QkFDa0IsS0FIekIsQUFHOEI7Z0JBSDlC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Q0ssQUFBSyxNQXBCdEIsQUFDSSxBQWtCUSxBQUNnQixBQUd4Qiw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQXZCSixBQXVCSSxBQUNBLHFCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQXhCSixBQXdCSSxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBekJKLEFBeUJJLEFBQWUsQUFDZixxQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQTFCSixBQTBCSSxBQUNBLHlCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBM0JKLEFBMkJJLEFBQ0EsK0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVksdUJBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixXQTdCL0MsQUFDSSxBQTRCSSxBQUFZLEFBQXNDLEFBSTdEOzs7OztBQXhFd0IsQSxBQTJFN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvd1VzZXIuanMiLCJzb3VyY2VSb290IjoiRTovbGljZW50YV90ZXN0In0=