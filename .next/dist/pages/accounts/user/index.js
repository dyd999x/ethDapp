'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _battery = require('../../../ethereum/battery');

var _battery2 = _interopRequireDefault(_battery);

var _MyBattery = require('../../../components/MyBattery');

var _MyBattery2 = _interopRequireDefault(_MyBattery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\licenta_test\\pages\\accounts\\user\\index.js?entry';


var UserIndex = function (_Component) {
    (0, _inherits3.default)(UserIndex, _Component);

    function UserIndex() {
        (0, _classCallCheck3.default)(this, UserIndex);

        return (0, _possibleConstructorReturn3.default)(this, (UserIndex.__proto__ || (0, _getPrototypeOf2.default)(UserIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(UserIndex, [{
        key: 'render',
        value: function render() {
            var nrOfBatteries = [];
            for (var i = 0; i < this.props.batteriesPerStation.length; i++) {
                nrOfBatteries.push(this.props.batteriesPerStation[i].length);
            }
            console.log(this.props.batteriesPerStation, nrOfBatteries);
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('h3', { style: { marginTop: '0.5rem' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Welcome'), _react2.default.createElement(_MyBattery2.default, { info: this.props.myBattInfo, address: this.props.address,
                admin: false,
                user: true,
                stationIDS: this.props.stationIDS,
                stationDetails: this.props.stationDetails,
                batteriesPerStation: this.props.batteriesPerStation,
                nrOfBatteries: nrOfBatteries,
                requestDetails: this.props.requestDetails,
                empty: this.props.empty,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, myBatteryID, myBatteryStatic, myBatteryDynamic, stationIDS, myRequestsIDS, requestDetails, i, len, stationDetails, batteriesPerStation, empty, myBattInfo;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                _context.next = 3;
                                return _battery2.default.methods.owners(address).call();

                            case 3:
                                myBatteryID = _context.sent;
                                _context.next = 6;
                                return _battery2.default.methods.batteriesStaticInfo(myBatteryID).call();

                            case 6:
                                myBatteryStatic = _context.sent;
                                _context.next = 9;
                                return _battery2.default.methods.batteriesDynamicInfo(myBatteryID).call();

                            case 9:
                                myBatteryDynamic = _context.sent;
                                _context.next = 12;
                                return _battery2.default.methods.getStationIDs().call();

                            case 12:
                                stationIDS = _context.sent;
                                _context.next = 15;
                                return _battery2.default.methods.getMyRequests(address).call();

                            case 15:
                                myRequestsIDS = _context.sent;

                                myRequestsIDS.reverse();
                                _context.next = 19;
                                return _promise2.default.all(Array(parseInt(myRequestsIDS.length)).fill().map(function (el, index) {
                                    return _battery2.default.methods.requests(myRequestsIDS[index]).call();
                                }));

                            case 19:
                                requestDetails = _context.sent;

                                for (i = 0; i < myRequestsIDS.length; i++) {
                                    requestDetails[i] = (0, _extends3.default)({}, requestDetails[i], myRequestsIDS[i]);
                                }
                                len = stationIDS.length;
                                _context.next = 24;
                                return _promise2.default.all(Array(parseInt(len)).fill().map(function (el, index) {
                                    return _battery2.default.methods.stationDetails(index).call();
                                }));

                            case 24:
                                stationDetails = _context.sent;
                                _context.next = 27;
                                return _promise2.default.all(Array(parseInt(len)).fill().map(function (el, index) {
                                    return _battery2.default.methods.getBatteriesFromStation(stationIDS[index]).call();
                                }));

                            case 27:
                                batteriesPerStation = _context.sent;
                                empty = false;

                                if (myBatteryID == 0) {
                                    empty = true;
                                }
                                myBattInfo = (0, _extends3.default)({}, myBatteryStatic, myBatteryDynamic);
                                return _context.abrupt('return', { stationIDS: stationIDS, stationDetails: stationDetails, batteriesPerStation: batteriesPerStation, address: address, myBattInfo: myBattInfo, requestDetails: requestDetails, empty: empty });

                            case 32:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return UserIndex;
}(_react.Component);

exports.default = UserIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhY2NvdW50c1xcdXNlclxcaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJiYXR0ZXJ5IiwiTXlCYXR0ZXJ5IiwiVXNlckluZGV4IiwibnJPZkJhdHRlcmllcyIsImkiLCJwcm9wcyIsImJhdHRlcmllc1BlclN0YXRpb24iLCJsZW5ndGgiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm1hcmdpblRvcCIsIm15QmF0dEluZm8iLCJhZGRyZXNzIiwic3RhdGlvbklEUyIsInN0YXRpb25EZXRhaWxzIiwicmVxdWVzdERldGFpbHMiLCJlbXB0eSIsInF1ZXJ5IiwibWV0aG9kcyIsIm93bmVycyIsImNhbGwiLCJteUJhdHRlcnlJRCIsImJhdHRlcmllc1N0YXRpY0luZm8iLCJteUJhdHRlcnlTdGF0aWMiLCJiYXR0ZXJpZXNEeW5hbWljSW5mbyIsIm15QmF0dGVyeUR5bmFtaWMiLCJnZXRTdGF0aW9uSURzIiwiZ2V0TXlSZXF1ZXN0cyIsIm15UmVxdWVzdHNJRFMiLCJyZXZlcnNlIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJtYXAiLCJlbCIsImluZGV4IiwicmVxdWVzdHMiLCJsZW4iLCJnZXRCYXR0ZXJpZXNGcm9tU3RhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWU7Ozs7Ozs7OztJQUVoQixBOzs7Ozs7Ozs7OztpQ0FvQ00sQUFDSjtnQkFBSSxnQkFBSixBQUFrQixBQUNsQjtpQkFBSSxJQUFJLElBQVIsQUFBVSxHQUFFLElBQUUsS0FBQSxBQUFLLE1BQUwsQUFBVyxvQkFBekIsQUFBNkMsUUFBN0MsQUFBb0QsS0FBSSxBQUNwRDs4QkFBQSxBQUFjLEtBQUssS0FBQSxBQUFLLE1BQUwsQUFBVyxvQkFB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