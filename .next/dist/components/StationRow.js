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

var _jsxFileName = 'E:\\licenta_test\\components\\StationRow.js';


var StationRow = function (_Component) {
    (0, _inherits3.default)(StationRow, _Component);

    function StationRow() {
        (0, _classCallCheck3.default)(this, StationRow);

        return (0, _possibleConstructorReturn3.default)(this, (StationRow.__proto__ || (0, _getPrototypeOf2.default)(StationRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(StationRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                station = _props.station,
                batteriesPerStation = _props.batteriesPerStation,
                nrOfBatteries = _props.nrOfBatteries,
                operator = _props.operator;

            return _react2.default.createElement(Row, { textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, station.stationAddress), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, operator), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, nrOfBatteries), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement(_routes.Link, { route: '/accounts/administrator/' + id, __source: {
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

    return StationRow;
}(_react.Component);

exports.default = StationRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0YXRpb25Sb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIkxpbmsiLCJTdGF0aW9uUm93IiwiUm93IiwiQ2VsbCIsInByb3BzIiwiaWQiLCJzdGF0aW9uIiwiYmF0dGVyaWVzUGVyU3RhdGlvbiIsIm5yT2ZCYXR0ZXJpZXMiLCJvcGVyYXRvciIsInN0YXRpb25BZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQVEsQUFBTTs7QUFDZCxBQUFRLEFBQVc7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7OztpQ0FFTTtnQkFBQSxBQUNHLE1BREgsQUFDZSx1QkFEZixBQUNHO2dCQURILEFBQ08sT0FEUCxBQUNlLHVCQURmLEFBQ087eUJBQ3FELEtBRjVELEFBRWlFO2dCQUZqRSxBQUVHLFlBRkgsQUFFRztnQkFGSCxBQUVNLGlCQUZOLEFBRU07Z0JBRk4sQUFFYyw2QkFGZCxBQUVjO2dCQUZkLEFBRWtDLHVCQUZsQyxBQUVrQztnQkFGbEMsQUFFZ0Qsa0JBRmhELEFBRWdELEFBQ3BEOzttQ0FDSyxjQUFELE9BQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBREosQUFDSSxBQUNBLHFCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUZKLEFBRUksQUFBZSxBQUNmLGlDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBSEosQUFHSSxBQUNBLDJCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLGVBSkosQUFJSSxBQUNBLGdDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsOEJBQUssb0NBQU4sQUFBd0M7OEJBQXhDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLE9BQVIsTUFBYyxPQUFkLEFBQW9COzhCQUFwQjtnQ0FBQTtBQUFBO2VBVHBCLEFBQ0ksQUFLSSxBQUNJLEFBQ0ksQUFDSSxBQU12Qjs7Ozs7QUFwQm9CLEEsQUF1QnpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlN0YXRpb25Sb3cuanMiLCJzb3VyY2VSb290IjoiRTovbGljZW50YV90ZXN0In0=