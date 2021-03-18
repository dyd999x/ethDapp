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

var _jsxFileName = 'E:\\licenta_test\\components\\StationRowOp.js';


var StationRowOp = function (_Component) {
    (0, _inherits3.default)(StationRowOp, _Component);

    function StationRowOp() {
        (0, _classCallCheck3.default)(this, StationRowOp);

        return (0, _possibleConstructorReturn3.default)(this, (StationRowOp.__proto__ || (0, _getPrototypeOf2.default)(StationRowOp)).apply(this, arguments));
    }

    (0, _createClass3.default)(StationRowOp, [{
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
            }, _react2.default.createElement(_routes.Link, { route: '/accounts/stationOperator/' + address + '/' + id, __source: {
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

    return StationRowOp;
}(_react.Component);

exports.default = StationRowOp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0YXRpb25Sb3dPcC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiTGluayIsIlN0YXRpb25Sb3dPcCIsIlJvdyIsIkNlbGwiLCJwcm9wcyIsImlkIiwic3RhdGlvbiIsIm5yT2ZCYXR0ZXJpZXMiLCJhZGRyZXNzIiwic3RhdGlvbkFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBUSxBQUFNOztBQUNkLEFBQVEsQUFBVzs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7O2lDQUVNO2dCQUFBLEFBQ0csTUFESCxBQUNlLHVCQURmLEFBQ0c7Z0JBREgsQUFDTyxPQURQLEFBQ2UsdUJBRGYsQUFDTzt5QkFDZ0MsS0FGdkMsQUFFNEM7Z0JBRjVDLEFBRUcsWUFGSCxBQUVHO2dCQUZILEFBRU0saUJBRk4sQUFFTTtnQkFGTixBQUVjLHVCQUZkLEFBRWM7Z0JBRmQsQUFFNEIsaUJBRjVCLEFBRTRCLEFBRWhDOzttQ0FDSyxjQUFELE9BQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBREosQUFDSSxBQUNBLHFCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUZKLEFBRUksQUFBZSxBQUNmLGlDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBSEosQUFHSSxBQUNBLGdDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsOEJBQUssc0NBQUEsQUFBb0MsZ0JBQTFDLEFBQXFEOzhCQUFyRDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQjs4QkFBcEI7Z0NBQUE7QUFBQTtlQVJwQixBQUNJLEFBSUksQUFDSSxBQUNJLEFBQ0ksQUFNdkI7Ozs7O0FBcEJzQixBLEFBdUIzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJTdGF0aW9uUm93T3AuanMiLCJzb3VyY2VSb290IjoiRTovbGljZW50YV90ZXN0In0=