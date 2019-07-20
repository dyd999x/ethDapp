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

var _battery = require('../ethereum/battery');

var _battery2 = _interopRequireDefault(_battery);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\licenta_test\\components\\UpdatePrice.js';


var UpdatePrice = function (_Component) {
    (0, _inherits3.default)(UpdatePrice, _Component);

    function UpdatePrice() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, UpdatePrice);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UpdatePrice.__proto__ || (0, _getPrototypeOf2.default)(UpdatePrice)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '', loading: false, errMessage: ''
        }, _this.onCLICK = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _this$props, address, id;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this.setState({ loading: true, errMessage: '', value: '' });
                            _this$props = _this.props, address = _this$props.address, id = _this$props.id;
                            _context.prev = 2;
                            _context.next = 5;
                            return _battery2.default.methods.updatePrice(parseInt(id), parseInt(_this.state.value)).send({ from: address });

                        case 5:
                            _this.setState({ value: '' });
                            _routes.Router.pushRoute('/accounts/user/' + address);
                            _context.next = 12;
                            break;

                        case 9:
                            _context.prev = 9;
                            _context.t0 = _context['catch'](2);

                            _this.setState({ errMessage: _context.t0.message });

                        case 12:
                            _this.setState({ loading: false, errMessage: '' });

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2, [[2, 9]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(UpdatePrice, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, 'Please enter below the new price for your battery'), _react2.default.createElement(_semanticUiReact.Input, {
                error: !!this.state.errMessage,
                label: 'wei',
                labelPosition: 'right',
                placeholder: 'New Price',
                value: this.state.operator,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, type: 'submit', onClick: this.onCLICK, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Change'), _react2.default.createElement(_semanticUiReact.Message, { hidden: !this.state.errMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, this.errMessage));
        }
    }]);

    return UpdatePrice;
}(_react.Component);

exports.default = UpdatePrice;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFVwZGF0ZVByaWNlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiQnV0dG9uIiwiTWVzc2FnZSIsImJhdHRlcnkiLCJSb3V0ZXIiLCJVcGRhdGVQcmljZSIsInN0YXRlIiwidmFsdWUiLCJsb2FkaW5nIiwiZXJyTWVzc2FnZSIsIm9uQ0xJQ0siLCJzZXRTdGF0ZSIsInByb3BzIiwiYWRkcmVzcyIsImlkIiwibWV0aG9kcyIsInVwZGF0ZVByaWNlIiwicGFyc2VJbnQiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJvcGVyYXRvciIsImV2ZW50IiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFLLEFBQU0sQUFBTzs7QUFDMUIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBYzs7Ozs7OztJQUVGLEE7Ozs7Ozs7Ozs7Ozs7OzswTkFFakIsQTttQkFBTSxBQUNJLElBQUcsU0FEUCxBQUNlLE9BQU0sWUFEckIsQUFDZ0MsQTtBQURoQyxBQUNGLGlCLEFBR0osbUZBQVMsbUJBQUE7c0NBQUE7OzBFQUFBOzBCQUFBO3FEQUFBOzZCQUNMO2tDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFLLFlBQWQsQUFBeUIsSUFBRyxPQURyQyxBQUNMLEFBQWMsQUFBa0M7MENBQzNCLE1BRmhCLEFBRXFCLE9BRnJCLEFBRUUsc0JBRkYsQUFFRSxTQUZGLEFBRVUsaUJBRlYsQUFFVTs0Q0FGVjs0Q0FBQTttQ0FJSyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsWUFBWSxTQUE1QixBQUE0QixBQUFTLEtBQUksU0FBUyxNQUFBLEFBQUssTUFBdkQsQUFBeUMsQUFBb0IsUUFBN0QsQUFBcUUsS0FBSyxFQUFDLE1BSmhGLEFBSUssQUFBMEUsQUFBTzs7NkJBQ3ZGO2tDQUFBLEFBQUssU0FBUyxFQUFDLE9BQWYsQUFBYyxBQUFPLEFBQ3JCOzJDQUFBLEFBQU8sOEJBTk4sQUFNRCxBQUFtQzs0Q0FObEM7QUFBQTs7NkJBQUE7NENBQUE7NERBUUQ7O2tDQUFBLEFBQUssU0FBUyxFQUFDLFlBQVcsWUFSekIsQUFRRCxBQUFjLEFBQWdCOzs2QkFFbEM7a0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE9BQU0sWUFWeEIsQUFVTCxBQUFjLEFBQTBCOzs2QkFWbkM7NkJBQUE7NENBQUE7O0FBQUE7cUNBQUE7QTs7Ozs7aUNBWUQ7eUJBQ0o7O21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNFQUFBLEFBQUM7dUJBQ1UsQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQURsQixBQUN3QixBQUNwQjt1QkFGSixBQUVVLEFBQ047K0JBSEosQUFHa0IsQUFDZDs2QkFKSixBQUlnQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUxoQixBQUtzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU0sTUFBQSxBQUFNLE9BQXBDLEFBQVMsQUFBYyxBQUFvQjtBQU56RDs7OEJBQUE7Z0NBRkosQUFFSSxBQVFBO0FBUkE7QUFDSTs7OEJBT0o7Z0NBVkosQUFVSSxBQUNBO0FBREE7QUFBQTs7OEJBQ0E7Z0NBWEosQUFXSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsTUFBaEIsQUFBcUIsVUFBUyxTQUFTLEtBQXZDLEFBQTRDLFNBQVMsU0FBUyxLQUFBLEFBQUssTUFBbkUsQUFBeUU7OEJBQXpFO2dDQUFBO0FBQUE7ZUFaSixBQVlJLEFBQ0EsMkJBQUEsQUFBQywwQ0FBUSxRQUFRLENBQUMsS0FBQSxBQUFLLE1BQXZCLEFBQTZCOzhCQUE3QjtnQ0FBQSxBQUEwQztBQUExQztvQkFkUixBQUNJLEFBYUksQUFBK0MsQUFJMUQ7Ozs7O0FBckNvQyxBOztrQkFBcEIsQSIsImZpbGUiOiJVcGRhdGVQcmljZS5qcyIsInNvdXJjZVJvb3QiOiJFOi9saWNlbnRhX3Rlc3QifQ==