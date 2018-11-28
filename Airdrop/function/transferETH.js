/**
 * Created by zhuyanbing on 2018/3/27.
 */

const Config = require('./../config/config.js');

Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/9d3389b641bb4385a0a1e6daedb963c2'));

const execute = require('./base/execute');

//-------------------------------- api --------------------------------
function transferEth(toAddress,amount,hashIdCallBack,successCall, errorCall) {

    let valueHex = web3.utils.toHex(amount);
    execute.executeFunctionWithExtraEth(toAddress,'0x00',valueHex,hashIdCallBack,successCall,errorCall);
}


function startTransferETH() {

    let ethAmount = '0.1';
    ethAmount = web3.utils.toWei(ethAmount, 'ether');

    transferEth('your address',ethAmount,function (hashId) {
        console.log('start TransferETH transcation!');
    },function (success) {
        console.log('TransferETH success!');
    },function (error) {
        console.log('TransferETH falid!');
    });
}

startTransferETH();