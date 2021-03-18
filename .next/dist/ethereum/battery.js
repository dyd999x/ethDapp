'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _BatteryInterface = require('./build/BatteryInterface.json');

var _BatteryInterface2 = _interopRequireDefault(_BatteryInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_BatteryInterface2.default.interface), '0x6Ef782049A4e1d13F9c8b3c15300966ab5777937');

//const instance = new web3.eth.Contract(JSON.parse(Battery.interface),'0x4e284caf284B326284A97c154FAa12CbEc5059Cc');

exports.default = instance;

//0xF08c952B47aBe9a683be3063F7DC9D039FD63863
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxiYXR0ZXJ5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJCYXR0ZXJ5IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQW9CLEFBQXBCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEtBQUssQUFBTCxNQUFXLDJCQUFRLEFBQW5CLEFBQXRCLFlBQW9ELEFBQXBELEFBQWpCOztBQUVBLEFBRUE7O2tCQUFlLEFBQWY7O0FBSUEiLCJmaWxlIjoiYmF0dGVyeS5qcyIsInNvdXJjZVJvb3QiOiJFOi9saWNlbnRhX3Rlc3QifQ==