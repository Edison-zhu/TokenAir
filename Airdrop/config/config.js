/**
 * Created by zhuyanbing on 2018/11/27.
 */
require('web3');
require('ethereumjs-tx');
require('solc');
require('ethjs-account');
require('node-xlsx');
require('silly-datetime');
require('ws');

console.log('require 目录');

//itc 主空投账户
const userConfig_main = {
    userPrivateKey:'',
    userAddress:'0xf5D0318dbb21755B4866CF10bA7f8843F0BD11bf',
    airdropContractAddress:'0xc3695ff043d9ad015dd3b6141ee4de0a7051204c'

};
//代币地址 0xca4cc56286463c740897a04d02bab07d5373ea04
//Ethereum Rinkeby 测试账户
const userConfig_rinkeby = {
    userPrivateKey:'613C84704B5CE6C8D2B10669E75748744639AE80F4D6952A576D53287E2D3AAA',
    userAddress:'0x89C8Ea0A09dBee3dB8904A3a5E74B799698d9471',
    airdropContractAddress:'0xc4a2804a0d7e371fc2f2ecbad2b5f4bd6bc4542a'
};

let userConfig = userConfig_rinkeby;
// let userConfig = userConfig_main;


//rinkeby网络
rinkebyConfig = {
    internetType:'rinkeby',
    userModule:{
        userPrivateKey:userConfig.userPrivateKey,
    },
    tokenholderStartBlock:userConfig.startBlock,
    transaction:{
        url:'https://ropsten.infura.io/v3/9d3389b641bb4385a0a1e6daedb963c2',
        gasPrice:50000000000,
        gasLimit:6000000
    },
    airdropModule: {
        ercAirDropAmount:'1',       //amount of normal airdrop
        airdropContractAddress:userConfig.contractAddress,                             //
        tokenContractAddress:'0xca4cc56286463c740897a04d02bab07d5373ea04',                               //erc20 token contract address
    },
    approveModule:{
        amount : '5000',             //The amount of contract transferable accounts
        approveAddress : userConfig.contractAddress,                             //airdrop contract address
        tokenContractAddress : '0xca4cc56286463c740897a04d02bab07d5373ea04',                       //erc20 token contract address
    },
};

module.exports = rinkebyConfig;


