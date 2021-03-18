const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname,'build'); //reference to the build directory
fs.removeSync(buildPath); // looks at the folder and deletes it and everything inside it

const batteryPath = path.resolve(__dirname,'contracts','Battery.sol'); //we take the path to the battery.sol
const source = fs.readFileSync(batteryPath,'utf8'); //read the content of the file

const output = solc.compile(source,1).contracts; ////output contains 2 objects, the outputs from both contracts

fs.ensureDirSync(buildPath);//this function checks to see if there is a directory at the specified path, if there is not, it creates it

//this for is used to iterate over the keys of the object
//we are iterting over the BatteryInfo and BatteryInterface objects and we assign their keys to the 'contract' variable
//the keys are ':BatteryInfo' and ':BatteryInterface' from the console output
for (let contract in output){
    fs.outputJsonSync( //this function writes out a json file and it wild build it at the buildPath path
      path.resolve(buildPath, contract.replace(':','')+'.json'),
      output[contract] //this is the actual content we want to write in the json file
    );
}
