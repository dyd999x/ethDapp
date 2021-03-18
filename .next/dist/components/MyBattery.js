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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _Stations = require('./Stations');

var _Stations2 = _interopRequireDefault(_Stations);

var _UpdatePrice = require('./UpdatePrice');

var _UpdatePrice2 = _interopRequireDefault(_UpdatePrice);

var _MyRequests = require('./MyRequests');

var _MyRequests2 = _interopRequireDefault(_MyRequests);

var _battery = require('../ethereum/battery');

var _battery2 = _interopRequireDefault(_battery);

var _routes = require('../routes');

var _http = require('http');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\licenta_test\\components\\MyBattery.js';


var MyBattery = function (_Component) {
    (0, _inherits3.default)(MyBattery, _Component);

    function MyBattery() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MyBattery);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyBattery.__proto__ || (0, _getPrototypeOf2.default)(MyBattery)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            batteryID: '',
            brand: '',
            catalogName: '',
            datasheetLink: '',
            manufacturePrice: '',
            maximumChargingCount: '',
            maximumDischargingCount: '',
            maximumChargingDuration: '',
            maximumDischargingDuration: '',
            manufactureDate: '',
            price: '',
            actualChargingCount: '',
            actualDischargingCount: '',
            errMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var _this$state, batteryID, brand, catalogName, datasheetLink, manufactureDate, maximumChargingCount, maximumDischargingCount, maximumChargingDuration, maximumDischargingDuration, manufacturePrice, price, actualChargingCount, actualDischargingCount, dateTime, timestamp;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this$state = _this.state, batteryID = _this$state.batteryID, brand = _this$state.brand, catalogName = _this$state.catalogName, datasheetLink = _this$state.datasheetLink, manufactureDate = _this$state.manufactureDate, maximumChargingCount = _this$state.maximumChargingCount, maximumDischargingCount = _this$state.maximumDischargingCount, maximumChargingDuration = _this$state.maximumChargingDuration, maximumDischargingDuration = _this$state.maximumDischargingDuration, manufacturePrice = _this$state.manufacturePrice, price = _this$state.price, actualChargingCount = _this$state.actualChargingCount, actualDischargingCount = _this$state.actualDischargingCount;
                                dateTime = +new Date(manufactureDate);
                                timestamp = Math.floor(dateTime / 1000);

                                _this.setState({ loading: true, errMessage: '' });

                                _context.prev = 5;
                                _context.next = 8;
                                return _battery2.default.methods.registerBatteryStaticInfo(batteryID, brand, catalogName, datasheetLink, manufacturePrice, maximumChargingCount, maximumDischargingCount, maximumChargingDuration, maximumDischargingDuration, timestamp).send({
                                    from: _this.props.address
                                });

                            case 8:
                                _context.next = 10;
                                return _battery2.default.methods.registerBatteryDynamicInfo(batteryID, _web2.default.utils.toWei(price, 'ether'), actualChargingCount, actualDischargingCount, 0).send({ from: _this.props.address });

                            case 10:
                                _routes.Router.pushRoute('/accounts/user/' + _this.props.address);
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](5);

                                _this.setState({ errMessage: _context.t0.message });

                            case 16:

                                _this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[5, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MyBattery, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                info = _props.info,
                address = _props.address,
                requestDetails = _props.requestDetails;

            var manDate = info.manufactureDate;
            var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var date = new Date(manDate * 1000);
            var year = date.getFullYear();
            var month = months_arr[date.getMonth()];
            var day = date.getDate();
            var convdataTime = day + '/' + month + '/' + year;
            var panes = [{
                menuItem: 'My Battery', render: function render() {
                    if (_this3.props.empty == false) {
                        return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                            }
                        }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, stackable: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 76
                            }
                        }, _react2.default.createElement(_semanticUiReact.Grid.Row, { verticalAlign: 'top', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 77
                            }
                        }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 78
                            }
                        }, _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: 'green', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            }
                        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 80
                            }
                        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 81
                            }
                        }, _react2.default.createElement('h3', { style: { marginBottom: '1rem', color: 'green' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 82
                            }
                        }, 'Dynamic Info')), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 84
                            }
                        }, _react2.default.createElement('p', { style: { fontSize: '12px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 85
                            }
                        }, address)), _react2.default.createElement(_semanticUiReact.Card.Description, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 87
                            }
                        }, _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 88
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 88
                            }
                        }, 'Actual Charging Count:'), ' ', info.actualChargingCount), _react2.default.createElement('br', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 89
                            }
                        }), _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90
                            }
                        }, 'Actual Discharging Count:'), ' ', info.actualDischargingCount), _react2.default.createElement('br', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 91
                            }
                        }), _react2.default.createElement('p', { style: { marginBottom: '1rem' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 92
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 92
                            }
                        }, 'Price:'), ' ETH  ', _web2.default.utils.fromWei(info.price, 'ether')))))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97
                            }
                        }, _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: 'green', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 98
                            }
                        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 99
                            }
                        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 100
                            }
                        }, _react2.default.createElement('h3', { style: { marginBottom: '1rem', color: 'green' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 101
                            }
                        }, ' Static Info')), _react2.default.createElement(_semanticUiReact.Card.Description, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 103
                            }
                        }, _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 104
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 104
                            }
                        }, 'Battery ID:'), ' ', info.batteryID), _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 106
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 106
                            }
                        }, 'Brand:'), ' ', info.brand), _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 108
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 108
                            }
                        }, 'Catalog Name: '), info.catalogName), _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 110
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 110
                            }
                        }, 'Datasheet Link:'), ' ', info.datasheetLink), _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 112
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 112
                            }
                        }, 'Manufacture Price:'), ' $', info.manufacturePrice), _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 114
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 114
                            }
                        }, 'Maximum Charging Count:'), ' ', info.maximumChargingCount), _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 116
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 116
                            }
                        }, 'Maximum Discharging Count:'), ' ', info.maximumDischargingCount), _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 118
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 118
                            }
                        }, 'Maximum Charging Duration:'), ' ', info.maximumChargingDuration, ' minutes'), _react2.default.createElement('p', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 120
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 120
                            }
                        }, 'Maximum Discharging Duration'), ' ', info.maximumDischargingDuration, ' standby days'), _react2.default.createElement('p', { style: { marginBottom: '1rem' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 122
                            }
                        }, _react2.default.createElement('b', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 122
                            }
                        }, 'Manufacture Date: '), convdataTime))))))));
                    } else {
                        return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 137
                            }
                        }, _react2.default.createElement('h2', { style: { color: 'darkblue' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 138
                            }
                        }, 'Please register your battery'), _react2.default.createElement(_semanticUiReact.Form, { style: { marginTop: '2rem', width: '80%' }, onSubmit: _this3.onSubmit, error: !!_this3.state.errMessage, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 139
                            }
                        }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 140
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 141
                            }
                        }, 'Battery ID'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 123456',
                            value: _this3.state.batteryID,
                            onChange: function onChange(event) {
                                return _this3.setState({ batteryID: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 142
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 149
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 150
                            }
                        }, 'Battery Brand'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: Tesla',
                            value: _this3.state.brand,
                            onChange: function onChange(event) {
                                return _this3.setState({ brand: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 151
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 158
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 159
                            }
                        }, 'Catalog Name'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: BT4635',
                            value: _this3.state.catalogName,
                            onChange: function onChange(event) {
                                return _this3.setState({ catalogName: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 160
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 167
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 168
                            }
                        }, 'Datasheet Link'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: https://wwww.yourBatteryLink.com',
                            value: _this3.state.datasheetLink,
                            onChange: function onChange(event) {
                                return _this3.setState({ datasheetLink: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 169
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 176
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 177
                            }
                        }, 'Manufacture Price ($)'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 3200',
                            value: _this3.state.manufacturePrice,
                            onChange: function onChange(event) {
                                return _this3.setState({ manufacturePrice: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 178
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 185
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 186
                            }
                        }, 'Maximum Charging Count'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 5000',
                            value: _this3.state.maximumChargingCount,
                            onChange: function onChange(event) {
                                return _this3.setState({ maximumChargingCount: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 187
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 194
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 195
                            }
                        }, 'Maximum Discharging Count'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 5000',
                            value: _this3.state.maximumDischargingCount,
                            onChange: function onChange(event) {
                                return _this3.setState({ maximumDischargingCount: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 196
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 203
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 204
                            }
                        }, 'Maximum Charging Duration (minutes)'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 140',
                            value: _this3.state.maximumChargingDuration,
                            onChange: function onChange(event) {
                                return _this3.setState({ maximumChargingDuration: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 205
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 212
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 213
                            }
                        }, 'Maximum Discharging Duration (miles/day of standby)'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 5',
                            value: _this3.state.maximumDischargingDuration,
                            onChange: function onChange(event) {
                                return _this3.setState({ maximumDischargingDuration: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 214
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 221
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 222
                            }
                        }, 'Manufacture Date'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'YYYY-MM-DD: 2018-07-02',
                            value: _this3.state.manufactureDate,
                            onChange: function onChange(event) {
                                return _this3.setState({ manufactureDate: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 223
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 230
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 231
                            }
                        }, 'Price (ETH)'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 0.2',
                            value: _this3.state.price,
                            onChange: function onChange(event) {
                                return _this3.setState({ price: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 232
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 239
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 240
                            }
                        }, 'Actual Charging Count'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 20',
                            value: _this3.state.actualChargingCount,
                            onChange: function onChange(event) {
                                return _this3.setState({ actualChargingCount: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 241
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 248
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 249
                            }
                        }, 'Actual Discharging Count'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 5',
                            value: _this3.state.actualDischargingCount,
                            onChange: function onChange(event) {
                                return _this3.setState({ actualDischargingCount: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 250
                            }
                        })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops',
                            content: _this3.state.errMessage, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 258
                            }
                        }), _react2.default.createElement(_semanticUiReact.Button, { style: { marginBottom: '3rem' }, primary: true, loading: _this3.state.loading, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 260
                            }
                        }, 'Add')));
                    }
                }
            }, {
                menuItem: 'Stations', render: function render() {
                    if (_this3.props.stationIDS.length != 0) {
                        return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 273
                            }
                        }, _react2.default.createElement(_Stations2.default, {
                            address: _this3.props.address,
                            admin: false,
                            user: true,
                            stationIDS: _this3.props.stationIDS,
                            stationDetails: _this3.props.stationDetails,
                            batteriesPerStation: _this3.props.batteriesPerStation,
                            nrOfBatteries: _this3.props.nrOfBatteries, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 274
                            }
                        }));
                    } else {
                        return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 287
                            }
                        }, _react2.default.createElement(_semanticUiReact.Segment, { placeholder: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 288
                            }
                        }, _react2.default.createElement(_semanticUiReact.Header, { icon: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 289
                            }
                        }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file outline', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 290
                            }
                        }), 'No stations added yet')));
                    }
                }
            }, {
                menuItem: 'Update Battery Price', render: function render() {
                    if (_this3.props.empty == false) {
                        return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 304
                            }
                        }, _react2.default.createElement(_UpdatePrice2.default, { address: address, id: info.batteryID, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 305
                            }
                        }));
                    } else {
                        return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 310
                            }
                        }, _react2.default.createElement('h2', { style: { color: 'darkblue' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 311
                            }
                        }, 'Please register your battery'), _react2.default.createElement(_semanticUiReact.Form, { style: { marginTop: '2rem', width: '80%' }, onSubmit: _this3.onSubmit, error: !!_this3.state.errMessage, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 312
                            }
                        }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 313
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 314
                            }
                        }, 'Battery ID'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 123456',
                            value: _this3.state.batteryID,
                            onChange: function onChange(event) {
                                return _this3.setState({ batteryID: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 315
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 322
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 323
                            }
                        }, 'Battery Brand'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: Tesla',
                            value: _this3.state.brand,
                            onChange: function onChange(event) {
                                return _this3.setState({ brand: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 324
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 331
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 332
                            }
                        }, 'Catalog Name'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: BT4635',
                            value: _this3.state.catalogName,
                            onChange: function onChange(event) {
                                return _this3.setState({ catalogName: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 333
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 340
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 341
                            }
                        }, 'Datasheet Link'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: https://wwww.yourBatteryLink.com',
                            value: _this3.state.datasheetLink,
                            onChange: function onChange(event) {
                                return _this3.setState({ datasheetLink: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 342
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 349
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 350
                            }
                        }, 'Manufacture Price ($)'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 3200',
                            value: _this3.state.manufacturePrice,
                            onChange: function onChange(event) {
                                return _this3.setState({ manufacturePrice: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 351
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 358
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 359
                            }
                        }, 'Maximum Charging Count'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 5000',
                            value: _this3.state.maximumChargingCount,
                            onChange: function onChange(event) {
                                return _this3.setState({ maximumChargingCount: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 360
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 367
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 368
                            }
                        }, 'Maximum Discharging Count'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 5000',
                            value: _this3.state.maximumDischargingCount,
                            onChange: function onChange(event) {
                                return _this3.setState({ maximumDischargingCount: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 369
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 376
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 377
                            }
                        }, 'Maximum Charging Duration (minutes)'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 140',
                            value: _this3.state.maximumChargingDuration,
                            onChange: function onChange(event) {
                                return _this3.setState({ maximumChargingDuration: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 378
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 385
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 386
                            }
                        }, 'Maximum Discharging Duration (miles/day of standby)'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 5',
                            value: _this3.state.maximumDischargingDuration,
                            onChange: function onChange(event) {
                                return _this3.setState({ maximumDischargingDuration: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 387
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 394
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 395
                            }
                        }, 'Manufacture Date'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'YYYY-MM-DD: 2018-07-02',
                            value: _this3.state.manufactureDate,
                            onChange: function onChange(event) {
                                return _this3.setState({ manufactureDate: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 396
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 403
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 404
                            }
                        }, 'Price (ETH)'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 0.2',
                            value: _this3.state.price,
                            onChange: function onChange(event) {
                                return _this3.setState({ price: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 405
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 412
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 413
                            }
                        }, 'Actual Charging Count'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 20',
                            value: _this3.state.actualChargingCount,
                            onChange: function onChange(event) {
                                return _this3.setState({ actualChargingCount: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 414
                            }
                        })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 421
                            }
                        }, _react2.default.createElement('label', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 422
                            }
                        }, 'Actual Discharging Count'), _react2.default.createElement(_semanticUiReact.Input, {
                            required: true,
                            placeholder: 'ex: 5',
                            value: _this3.state.actualDischargingCount,
                            onChange: function onChange(event) {
                                return _this3.setState({ actualDischargingCount: event.target.value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 423
                            }
                        })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops',
                            content: _this3.state.errMessage, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 431
                            }
                        }), _react2.default.createElement(_semanticUiReact.Button, { style: { marginBottom: '3rem' }, primary: true, loading: _this3.state.loading, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 433
                            }
                        }, 'Add')));
                    }
                }
            }, {
                menuItem: 'My Requests', render: function render() {
                    if (requestDetails.length != 0) {
                        return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 447
                            }
                        }, _react2.default.createElement(_MyRequests2.default, { requestDetails: requestDetails, address: address, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 448
                            }
                        }));
                    } else {
                        return _react2.default.createElement(_semanticUiReact.Tab.Pane, {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 454
                            }
                        }, _react2.default.createElement(_semanticUiReact.Segment, { placeholder: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 455
                            }
                        }, _react2.default.createElement(_semanticUiReact.Header, { icon: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 456
                            }
                        }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file outline', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 457
                            }
                        }), 'You have no requests to show')));
                    }
                }
            }];
            return _react2.default.createElement(_semanticUiReact.Tab, { menu: { fluid: true, vertical: true, tabular: true, color: 'green' }, panes: panes, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 470
                }
            });
        }
    }]);

    return MyBattery;
}(_react.Component);

exports.default = MyBattery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE15QmF0dGVyeS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJTZWdtZW50IiwiQnV0dG9uIiwiVGFiIiwiR3JpZCIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJIZWFkZXIiLCJJY29uIiwid2ViMyIsIlN0YXRpb25zIiwiVXBkYXRlUHJpY2UiLCJNeVJlcXVlc3RzIiwiYmF0dGVyeSIsIlJvdXRlciIsInJlcXVlc3QiLCJNeUJhdHRlcnkiLCJzdGF0ZSIsImJhdHRlcnlJRCIsImJyYW5kIiwiY2F0YWxvZ05hbWUiLCJkYXRhc2hlZXRMaW5rIiwibWFudWZhY3R1cmVQcmljZSIsIm1heGltdW1DaGFyZ2luZ0NvdW50IiwibWF4aW11bURpc2NoYXJnaW5nQ291bnQiLCJtYXhpbXVtQ2hhcmdpbmdEdXJhdGlvbiIsIm1heGltdW1EaXNjaGFyZ2luZ0R1cmF0aW9uIiwibWFudWZhY3R1cmVEYXRlIiwicHJpY2UiLCJhY3R1YWxDaGFyZ2luZ0NvdW50IiwiYWN0dWFsRGlzY2hhcmdpbmdDb3VudCIsImVyck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0ZVRpbWUiLCJEYXRlIiwidGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwic2V0U3RhdGUiLCJtZXRob2RzIiwicmVnaXN0ZXJCYXR0ZXJ5U3RhdGljSW5mbyIsInNlbmQiLCJmcm9tIiwicHJvcHMiLCJhZGRyZXNzIiwicmVnaXN0ZXJCYXR0ZXJ5RHluYW1pY0luZm8iLCJ1dGlscyIsInRvV2VpIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImluZm8iLCJyZXF1ZXN0RGV0YWlscyIsIm1hbkRhdGUiLCJtb250aHNfYXJyIiwiZGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiY29udmRhdGFUaW1lIiwicGFuZXMiLCJtZW51SXRlbSIsInJlbmRlciIsImVtcHR5IiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJmb250U2l6ZSIsImZyb21XZWkiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsInRhcmdldCIsInZhbHVlIiwic3RhdGlvbklEUyIsImxlbmd0aCIsInN0YXRpb25EZXRhaWxzIiwiYmF0dGVyaWVzUGVyU3RhdGlvbiIsIm5yT2ZCYXR0ZXJpZXMiLCJmbHVpZCIsInZlcnRpY2FsIiwidGFidWxhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQVEsQUFBTSxBQUFRLEFBQU8sQUFBSSxBQUFLLEFBQUssQUFBTSxBQUFRLEFBQU87O0FBQ2hFLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFRLEFBQWE7O0FBQ3JCLEFBQVM7Ozs7Ozs7SSxBQUVZOzs7Ozs7Ozs7Ozs7Ozs7c05BRWpCLEE7dUJBQU0sQUFDUSxBQUNWO21CQUZFLEFBRUksQUFDTjt5QkFIRSxBQUdVLEFBQ1o7MkJBSkUsQUFJWSxBQUNkOzhCQUxFLEFBS2UsQUFDakI7a0NBTkUsQUFNbUIsQUFDckI7cUNBUEUsQUFPc0IsQUFDeEI7cUNBUkUsQUFRc0IsQUFDeEI7d0NBVEUsQUFTeUIsQUFDM0I7NkJBVkUsQUFVYyxBQUNoQjttQkFYRSxBQVdJLEFBQ047aUNBWkUsQUFZa0IsQUFDcEI7b0NBYkUsQUFhcUIsQUFDdkI7d0JBZEUsQUFjUyxBQUNYO3FCQUFRLEEsQUFmTjtBQUFBLEFBQ0YsaUIsQUFpQko7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO29SQUFBOzs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FETyxBQUNQLEFBQU07OzhDQUk4QyxNQUw3QyxBQUtrRCxPQUxsRCxBQUdBLHdCQUhBLEFBR0EsV0FIQSxBQUdVLG9CQUhWLEFBR1UsT0FIVixBQUdnQiwwQkFI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Q0F0R1IsQUFvR0ksQUFFSSxBQU9KO0FBUEk7QUFDSSw2Q0FNUCxjQUFELHNCQUFBLEFBQU07OzBDQUFOOzRDQUFBLEFBQ0k7QUFESjtBQUFBLDJDQUNJLGNBQUE7OzBDQUFBOzRDQUFBO0FBQUE7QUFBQSwyQkFESixBQUNJLEFBQ0EsNkNBQUEsQUFBQztzQ0FBRCxBQUVJO3lDQUZKLEFBRWdCLEFBQ1o7bUNBQU8sT0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCO3NDQUFVLHlCQUFBO3VDQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsd0JBQXVCLE1BQUEsQUFBTSxPQUFyRCxBQUFTLEFBQWMsQUFBcUM7QUFKMUU7OzBDQUFBOzRDQS9HUixBQTZHSSxBQUVJLEFBUVI7QUFSUTtBQUNJLDZDQU9aLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsQUFDdEI7cUNBQVMsT0FBQSxBQUFLLE1BRGQsQUFDb0I7MENBRHBCOzRDQXZIQSxBQXVIQSxBQUVBO0FBRkE7NENBRUEsQUFBQyx5Q0FBTyxPQUFPLEVBQUMsY0FBaEIsQUFBZSxBQUFjLFVBQVMsU0FBdEMsTUFBOEMsU0FBUyxPQUFBLEFBQUssTUFBNUQsQUFBa0U7MENBQWxFOzRDQUFBO0FBQUE7MkJBNUhSLEFBQ0ksQUFFSSxBQXlIQSxBQU1YO0FBRUo7QUFuWEssQUFzT1Y7QUFBQSxBQUNJOzBCQThJSixBQUNjLGVBQWUsUUFBUSxrQkFBSSxBQUNqQzt3QkFBRyxlQUFBLEFBQWUsVUFBbEIsQUFBMkIsR0FBRSxBQUN6QjsrQ0FDSyxjQUFELHFCQUFBLEFBQUs7OzBDQUFMOzRDQUFBLEFBQ0k7QUFESjtBQUFBLHlCQUFBLGtCQUNJLEFBQUMsc0NBQVcsZ0JBQVosQUFBNEIsZ0JBQWdCLFNBQTVDLEFBQXFEOzBDQUFyRDs0Q0FGUixBQUNJLEFBQ0ksQUFJWDtBQUpXOztBQUhaLDJCQU9LLEFBQ0Q7K0NBQ0ssY0FBRCxxQkFBQSxBQUFLOzswQ0FBTDs0Q0FBQSxBQUNLO0FBREw7QUFBQSx5QkFBQSxrQkFDSyxBQUFDLDBDQUFRLGFBQVQ7MENBQUE7NENBQUEsQUFDRztBQURIOzJDQUNHLEFBQUMseUNBQU8sTUFBUjswQ0FBQTs0Q0FBQSxBQUNBO0FBREE7MkNBQ0EsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7MENBQVg7NENBREEsQUFDQTtBQUFBOzRCQUpaLEFBQ0ksQUFDSyxBQUNHLEFBUWY7QUFFSjtBQTVZVCxBQUFjLEFBcVhWLEFBMEJKO0FBMUJJLEFBQ0k7bUNBMEJKLEFBQUMsc0NBQUksTUFBTSxFQUFFLE9BQUYsQUFBUyxNQUFNLFVBQWYsQUFBeUIsTUFBTSxTQUEvQixBQUF3QyxNQUFLLE9BQXhELEFBQVcsQUFBb0QsV0FBVyxPQUExRSxBQUFpRjs4QkFBakY7Z0NBREosQUFDSSxBQUVQO0FBRk87YUFBQTs7Ozs7QUEzYzJCLEE7O2tCQUFsQixBIiwiZmlsZSI6Ik15QmF0dGVyeS5qcyIsInNvdXJjZVJvb3QiOiJFOi9saWNlbnRhX3Rlc3QifQ==