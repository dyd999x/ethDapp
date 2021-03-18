const routes = require('next-routes')();

routes
    .add('/accounts/administrator', '/accounts/administrator/index')
    .add('/accounts/administrator/newStation','/accounts/administrator/newStation')
    .add('/accounts/administrator/:id','/accounts/administrator/batteries')
    .add('/accounts/stationOperator/:address', '/accounts/stationOperator/index')
    .add('/accounts/stationOperator/:address/addBattery', '/accounts/stationOperator/addBattery')
    .add('/accounts/stationOperator/:address/showRequests','/accounts/stationOperator/showRequests')
    .add('/accounts/stationOperator/:address/showBatteries', '/accounts/stationOperator/showBatteries')
    .add('/accounts/stationOperator/:address/:id','/accounts/stationOperator/batteriesInfo')
    .add('/accounts/user/:address','/accounts/user/index')
    .add('/accounts/user/:address/:id','/accounts/user/batteries')
    .add('/accounts/user/:address/:id/:batteryID/sendRequest','/accounts/user/sendRequest')
    ;

module.exports = routes;

