const assert = require('assert');

const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledInterface = require('../ethereum/build/BatteryInterface.json');

let accounts;
let interfaceContract;


beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    interfaceContract = await new web3.eth.Contract(JSON.parse(compiledInterface.interface))
        .deploy({data: compiledInterface.bytecode})
        .send({ from: accounts[0], gas:'3000000'});
});

describe('Battery Contract', () => {
    it('deploys a contract', ()=>{
        assert.ok(interfaceContract.options.address);
    });

    // it('adds operator', async () => {
    //     await interfaceContract.methods.addOperator('5', accounts[9])
    //         .send({
    //             from: accounts[0],
    //             gas:'3000000'
    //         });
    //     const isOperator = await interfaceContract.methods.opToStation(accounts[9]).call();
    //     assert.equal(isOperator,5);
    // });

    it('register battery  info owner', async() =>{
        await interfaceContract.methods.registerBatteryStaticInfo(1,'dell','hgyip10D','aaa',200,300,500,60,300,46549816)
            .send({
                from: accounts[2],
                gas:'3000000'
            })
        await interfaceContract.methods.registerBatteryDynamicInfo(1,300,100,100,0)
            .send({
                from: accounts[2],
                gas:'3000000'
            })
        const ID = await interfaceContract.methods.owners(accounts[2]).call();
        assert.equal(ID,1);

    });

    it('register battery  info station', async() =>{
        await interfaceContract.methods.addOperator('5', accounts[9])
        .send({
            from: accounts[0],
            gas:'3000000'
        });
        await interfaceContract.methods.registerBatteryStaticInfo(2,'asus','tiughj','bbbb',200,300,500,60,300,46549816)
            .send({
                from: accounts[9],
                gas:'5000000'
            })
        await interfaceContract.methods.registerBatteryDynamicInfo(2,200,100,100,5)
            .send({
                from: accounts[9],
                gas:'5000000'
            })
        const batteries = await interfaceContract.methods.getBatteriesFromStation(5).call();
        assert.equal(batteries.length,1);

    });

    it('full test, owner battery more expansive', async() =>{
        await interfaceContract.methods.addOperator('5', accounts[2])
        .send({
            from: accounts[0],
            gas:'1000000'
        });
        await interfaceContract.methods.registerBatteryStaticInfo(1,'asus','tiughj','bbbb',200,300,500,60,300,46549816)
            .send({
                from: accounts[2],
                gas:'1000000'
        });
        await interfaceContract.methods.registerBatteryDynamicInfo(1,1000,100,100,5)
            .send({
                from: accounts[2],
                gas:'1000000'
        });
        await interfaceContract.methods.registerBatteryStaticInfo(2,'dell','hgyip10D','aaa',200,300,500,60,300,46549816)
            .send({
                from: accounts[3],
                gas:'1000000'
        });
        await interfaceContract.methods.registerBatteryDynamicInfo(2,3000,100,100,0)
            .send({
                from: accounts[3],
                gas:'1000000'
        });

        const initialBalanceOwner = await web3.eth.getBalance(accounts[3]);
        const initialBalanceStation = await web3.eth.getBalance(accounts[2]);
        await interfaceContract.methods.sendSwapRequest(1,5).send({from: accounts[3], gas:'3000000'});
        await interfaceContract.methods.manageRequest(0,true).send({from: accounts[2],value: web3.utils.toWei('2','kwei')});
        await interfaceContract.methods.confirmSwap(0).send({from:accounts[3],gas:'3000000'});
        const finalBalanceOwner = await web3.eth.getBalance(accounts[3]);
        const finalBalanceStation = await web3.eth.getBalance(accounts[2]);
        const requests= await interfaceContract.methods.requests(0).call();
        assert(requests['confirmed']);
    });

    it('full test, station battery more expansive', async() =>{
        await interfaceContract.methods.addOperator('5', accounts[2])
        .send({
            from: accounts[0],
            gas:'1000000'
        });
        await interfaceContract.methods.registerBatteryStaticInfo(1,'asus','tiughj','bbbb',200,300,500,60,300,46549816)
            .send({
                from: accounts[2],
                gas:'1000000'
        });
        await interfaceContract.methods.registerBatteryDynamicInfo(1,5000,100,100,5)
            .send({
                from: accounts[2],
                gas:'1000000'
        });
        await interfaceContract.methods.registerBatteryStaticInfo(2,'dell','hgyip10D','aaa',200,300,500,60,300,46549816)
            .send({
                from: accounts[3],
                gas:'1000000'
        });
        await interfaceContract.methods.registerBatteryDynamicInfo(2,3000,100,100,0)
            .send({
                from: accounts[3],
                gas:'1000000'
        });

        const initialBalanceOwner = await web3.eth.getBalance(accounts[3]);
        const initialBalanceStation = await web3.eth.getBalance(accounts[2]);
        await interfaceContract.methods.sendSwapRequest(1,5).send({from: accounts[3], gas:'3000000'});
        await interfaceContract.methods.manageRequest(0,true).send({from: accounts[2]});
        await interfaceContract.methods.paySwap(0).send({from: accounts[3],value: web3.utils.toWei('2','kwei')})
        await interfaceContract.methods.confirmSwap(0).send({from:accounts[3],gas:'3000000'});
        const finalBalanceOwner = await web3.eth.getBalance(accounts[3]);
        const finalBalanceStation = await web3.eth.getBalance(accounts[2]);
        const requests= await interfaceContract.methods.requests(0).call();
        assert(requests['confirmed']);
    });

    // it('get battery info', async () =>{
    //     const obj = await interfaceContract.methods.getBatteryStaticInfo('aa').call({from: accounts[8]});
    //     console.log(obj);
    //     assert(obj);
    // });
});