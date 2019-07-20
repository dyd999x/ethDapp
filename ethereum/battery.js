import web3 from './web3';
import Battery from './build/BatteryInterface.json';

const instance = new web3.eth.Contract(JSON.parse(Battery.interface),'0x6Ef782049A4e1d13F9c8b3c15300966ab5777937');

//const instance = new web3.eth.Contract(JSON.parse(Battery.interface),'0x4e284caf284B326284A97c154FAa12CbEc5059Cc');

export default instance;



//0xF08c952B47aBe9a683be3063F7DC9D039FD63863