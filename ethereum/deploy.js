const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledBatteryInterface = require('./build/BatteryInterface.json');

const provider = new HDWalletProvider(
    'raise shadow first loan rail behind patient resist wire major east tone',
    'https://rinkeby.infura.io/v3/639a79b8bc1147da8524e03d86b270e1'
);
const web3 = new Web3(provider);
const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account',accounts[0]);
    const result= await new web3.eth.Contract(JSON.parse(compiledBatteryInterface.interface))
        .deploy({data: compiledBatteryInterface.bytecode})
        .send({gas: '3000000', from: accounts[0]});
    console.log('Contract deployed to', result.options.address);
};
deploy();




