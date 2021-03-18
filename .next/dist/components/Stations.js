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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _battery = require('../ethereum/battery');

var _battery2 = _interopRequireDefault(_battery);

var _semanticUiReact = require('semantic-ui-react');

var _StationRow = require('./StationRow');

var _StationRow2 = _interopRequireDefault(_StationRow);

var _StationRowOp = require('./StationRowOp');

var _StationRowOp2 = _interopRequireDefault(_StationRowOp);

var _StationRowUser = require('./StationRowUser');

var _StationRowUser2 = _interopRequireDefault(_StationRowUser);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\licenta_test\\components\\Stations.js';


var RenderStations = function (_Component) {
    (0, _inherits3.default)(RenderStations, _Component);

    function RenderStations() {
        (0, _classCallCheck3.default)(this, RenderStations);

        return (0, _possibleConstructorReturn3.default)(this, (RenderStations.__proto__ || (0, _getPrototypeOf2.default)(RenderStations)).apply(this, arguments));
    }

    (0, _createClass3.default)(RenderStations, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.stationDetails.map(function (station, index) {
                return _react2.default.createElement(_StationRow2.default, {
                    key: index,
                    id: station.id,
                    station: station,
                    bateries: _this2.props.batteriesPerStation,
                    nrOfBatteries: _this2.props.nrOfBatteries[index],
                    operator: _this2.props.operators[index],
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                });
            });
        }
    }, {
        key: 'renderRowsOp',
        value: function renderRowsOp() {
            var _this3 = this;

            if (this.props.user == false) {
                return this.props.stationDetails.map(function (station, index) {
                    return _react2.default.createElement(_StationRowOp2.default, {
                        key: index,
                        id: station.id,
                        station: station,
                        bateries: _this3.props.batteriesPerStation,
                        nrOfBatteries: _this3.props.nrOfBatteries[index],
                        address: _this3.props.address,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        }
                    });
                });
            } else {
                return this.props.stationDetails.map(function (station, index) {
                    return _react2.default.createElement(_StationRowUser2.default, {
                        key: index,
                        id: station.id,
                        station: station,
                        bateries: _this3.props.batteriesPerStation,
                        nrOfBatteries: _this3.props.nrOfBatteries[index],
                        address: _this3.props.address,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 45
                        }
                    });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.admin == true) {
                return _react2.default.createElement(_semanticUiReact.Table, { striped: true, color: 'blue', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, _react2.default.createElement(_semanticUiReact.Table.Row, { textAlign: 'center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, 'id'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, 'Location'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }, 'Operator'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }, 'Available Batteries'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                }, 'Details'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    }
                }, this.renderRows()));
            } else {
                return _react2.default.createElement(_semanticUiReact.Table, { striped: true, color: 'blue', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                    }
                }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                    }
                }, _react2.default.createElement(_semanticUiReact.Table.Row, { textAlign: 'center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                    }
                }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                    }
                }, 'id'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                    }
                }, 'Location'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                    }
                }, 'Available Batteries'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    }
                }, 'Details'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 90
                    }
                }, this.renderRowsOp()));
            }
        }
    }]);

    return RenderStations;
}(_react.Component);

exports.default = RenderStations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0YXRpb25zLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsImJhdHRlcnkiLCJUYWJsZSIsIlN0YXRpb25Sb3ciLCJTdGF0aW9uUm93T3AiLCJTdGF0aW9uUm93VXNlciIsIkxpbmsiLCJSZW5kZXJTdGF0aW9ucyIsInByb3BzIiwic3RhdGlvbkRldGFpbHMiLCJtYXAiLCJzdGF0aW9uIiwiaW5kZXgiLCJpZCIsImJhdHRlcmllc1BlclN0YXRpb24iLCJuck9mQmF0dGVyaWVzIiwib3BlcmF0b3JzIiwidXNlciIsImFkZHJlc3MiLCJhZG1pbiIsInJlbmRlclJvd3MiLCJyZW5kZXJSb3dzT3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTOztBQUNULEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVEsQUFBVzs7Ozs7OztJQUdiLEE7Ozs7Ozs7Ozs7O3FDQUVVO3lCQUNSOzt3QkFBTyxBQUFLLE1BQUwsQUFBVyxlQUFYLEFBQTBCLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFRLEFBQ2xEO3VDQUNJLEFBQUM7eUJBQUQsQUFDUyxBQUNMO3dCQUFJLFFBRlIsQUFFZ0IsQUFDWjs2QkFISixBQUdhLEFBQ1Q7OEJBQVUsT0FBQSxBQUFLLE1BSm5CLEFBSXlCLEFBQ3JCO21DQUFlLE9BQUEsQUFBSyxNQUFMLEFBQVcsY0FMOUIsQUFLbUIsQUFBeUIsQUFDeEM7OEJBQVUsT0FBQSxBQUFLLE1BQUwsQUFBVyxVQU56QixBQU1jLEFBQXFCOztrQ0FObkM7b0NBREosQUFDSSxBQVNQO0FBVE87QUFDSSxpQkFESjtBQUZSLEFBQU8sQUFZVixhQVpVOzs7O3VDQWNHO3lCQUNWOztnQkFBRyxLQUFBLEFBQUss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