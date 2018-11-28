/**
 * Created by zhuyanbing on 2018/11/27.
 */

const Config = require('./../config/config.js');

Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/9d3389b641bb4385a0a1e6daedb963c2'));

//init
const Tx = require('ethereumjs-tx');
const ethjsaccount = require('ethjs-account');
const fs = require('fs');
const solc = require('solc');

// compile the code
const tokenInput = fs.readFileSync('./../contract/JDCoin.sol');
const tokenOutput = solc.compile(tokenInput.toString());
const tokenAbi = JSON.parse(tokenOutput.contracts[':TokenERC20'].interface);


//-------------------------------- api --------------------------------
let execute = require('./base/execute');

let transferToken = function(tokenContractAddress,toAddress,amount,hashIdCallBack,successCall, errorCall) {

    let tokenContract = new web3.eth.Contract(tokenAbi, tokenContractAddress);
    let  functionABI = tokenContract.methods.transfer(toAddress,amount).encodeABI();

    execute.executeFunction(tokenContractAddress,functionABI,hashIdCallBack,successCall,errorCall);
};

function startTransferToken() {

    let amount = '0.01';
    let obj = web3.utils.toWei(amount, 'ether');

    let tokenAddress = 'your token address';

    transferToken(tokenAddress,'your destination address',obj,function (hashId) {
        console.log('start transfer Token!,hashId->',hashId);
    },function (success) {

        console.log('transferToken success!');
    },function (error) {

        console.log('transferToken falid!');
    });
}

startTransferToken();