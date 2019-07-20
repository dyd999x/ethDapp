'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\licenta_test\\components\\StationRowUser.js';


var StationRowUser = function (_Component) {
    (0, _inherits3.default)(StationRowUser, _Component);

    function StationRowUser() {
        (0, _classCallCheck3.default)(this, StationRowUser);

        return (0, _possibleConstructorReturn3.default)(this, (StationRowUser.__proto__ || (0, _getPrototypeOf2.default)(StationRowUser)).apply(this, arguments));
    }

    (0, _createClass3.default)(StationRowUser, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                station = _props.station,
                nrOfBatteries = _props.nrOfBatteries,
                address = _props.address;

            return _react2.default.createElement(Row, { textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, station.stationAddress), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, nrOfBatteries), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement(_routes.Link, { route: '/accounts/user/' + address + '/' + id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'blue', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, 'View Batteries')))));
        }
    }]);

    return StationRowUser;
}(_react.Component);

exports.default = StationRowUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0YXRpb25Sb3dVc2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGFibGUiLCJCdXR0b24iLCJMaW5rIiwiU3RhdGlvblJvd1VzZXIiLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsInN0YXRpb24iLCJuck9mQmF0dGVyaWVzIiwiYWRkcmVzcyIsInN0YXRpb25BZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQVEsQUFBTTs7QUFDZCxBQUFRLEFBQVc7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7OztpQ0FFTTtnQkFBQSxBQUNHLE1BREgsQUFDZSx1QkFEZixBQUNHO2dCQURILEFBQ08sT0FEUCxBQUNlLHVCQURmLEFBQ087eUJBQ2dDLEtBRnZDLEFBRTRDO2dCQUY1QyxBQUVHLFlBRkgsQUFFRztnQkFGSCxBQUVNLGlCQUZOLEFBRU07Z0JBRk4sQUFFYyx1QkFGZCxBQUVjO2dCQUZkLEFBRTRCLGlCQUY1QixBQUU0QixBQUVoQzs7bUNBQ0ssY0FBRCxPQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQURKLEFBQ0ksQUFDQSxxQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFGSixBQUVJLEFBQWUsQUFDZixpQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxlQUhKLEFBR0ksQUFDQSxnQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLDhCQUFLLDJCQUFBLEFBQXlCLGdCQUEvQixBQUEwQzs4QkFBMUM7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sT0FBUixNQUFjLE9BQWQsQUFBb0I7OEJBQXBCO2dDQUFBO0FBQUE7ZUFScEIsQUFDSSxBQUlJLEFBQ0ksQUFDSSxBQUNJLEFBTXZCOzs7OztBQXBCd0IsQSxBQXVCN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiU3RhdGlvblJvd1VzZXIuanMiLCJzb3VyY2VSb290IjoiRTovbGljZW50YV90ZXN0In0=