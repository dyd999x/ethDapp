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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _RequestRowUser = require('./RequestRowUser');

var _RequestRowUser2 = _interopRequireDefault(_RequestRowUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\licenta_test\\components\\MyRequests.js';


var MyRequests = function (_Component) {
    (0, _inherits3.default)(MyRequests, _Component);

    function MyRequests() {
        (0, _classCallCheck3.default)(this, MyRequests);

        return (0, _possibleConstructorReturn3.default)(this, (MyRequests.__proto__ || (0, _getPrototypeOf2.default)(MyRequests)).apply(this, arguments));
    }

    (0, _createClass3.default)(MyRequests, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.requestDetails.map(function (request, index) {
                return _react2.default.createElement(_RequestRowUser2.default, {
                    key: index,
                    id: request[0],
                    request: request,
                    address: _this2.props.address,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_semanticUiReact.Container, { fluid: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement(_semanticUiReact.Table, { compact: true, celled: true, definition: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, { textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'Request ID'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Station ID'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'Requested Battery ID'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'Status'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'Request Date'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'Cost'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, this.renderRows())));
        }
    }]);

    return MyRequests;
}(_react.Component);

exports.default = MyRequests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE15UmVxdWVzdHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkNvbnRhaW5lciIsIndlYjMiLCJSZXF1ZXN0Um93VXNlciIsIk15UmVxdWVzdHMiLCJwcm9wcyIsInJlcXVlc3REZXRhaWxzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsInJlbmRlclJvd3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBUSxBQUFNOztBQUNkLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQW9COzs7Ozs7Ozs7SUFFTixBOzs7Ozs7Ozs7OztxQ0FFTDt5QkFDUjs7d0JBQU8sQUFBSyxNQUFMLEFBQVcsZUFBWCxBQUEwQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBUSxBQUNsRDt1Q0FDSSxBQUFDO3lCQUFELEFBQ1MsQUFDTDt3QkFBSSxRQUZSLEFBRVEsQUFBUSxBQUNaOzZCQUhKLEFBR2EsQUFDVDs2QkFBUyxPQUFBLEFBQUssTUFKbEIsQUFJd0I7O2tDQUp4QjtvQ0FESixBQUNJLEFBT1A7QUFQTztBQUNJLGlCQURKO0FBRlIsQUFBTyxBQVVWLGFBVlU7Ozs7aUNBWUgsQUFFSjs7bUNBQ0ksQUFBQyw0Q0FBVSxPQUFYOzhCQUFBO2dDQUFBLEFBQ0c7QUFESDthQUFBLGtCQUNHLEFBQUMsd0NBQU0sU0FBUCxNQUFlLFFBQWYsTUFBc0IsWUFBdEI7OEJBQUE7Z0NBQUEsQUFDSztBQURMOytCQUNNLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCx1QkFBQSxBQUFPLE9BQUksV0FBWCxBQUFxQjs4QkFBckI7Z0NBQUEsQUFDSTtBQURKOzZDQUNJLEFBQUMsdUJBQUQsQUFBTzs7OEJBQVA7Z0NBREosQUFDSSxBQUNBO0FBREE7QUFBQSxnQ0FDQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSwrQkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUhKLEFBR0ksQUFDQSwrQkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUpKLEFBSUksQUFDQSx5Q0FBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSwyQkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQU5KLEFBTUksQUFDQSxpQ0FBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQVRiLEFBQ0ssQUFDSSxBQU9JLEFBSVIsMkJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxvQkFmWixBQUNJLEFBQ0csQUFhSyxBQUNJLEFBQUssQUFLeEI7Ozs7O0FBdENtQyxBOztrQkFBbkIsQSIsImZpbGUiOiJNeVJlcXVlc3RzLmpzIiwic291cmNlUm9vdCI6IkU6L2xpY2VudGFfdGVzdCJ9