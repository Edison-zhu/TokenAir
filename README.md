# ERC20TokenAridrop
This project can be used for all ERC20 based tokens for airdrop distribution！
1. A single transmission can support up to two hundred transfers.
2. Realize the monitoring transaction status and automatically send the next one.
3. The implementation fee is reduced to 0.000045--0.00007 eth/transcation.

该项目可用于所有基于ERC20的令牌，用于空投分配！
1.单个传输最多可支持200次传输。
2.实现监控事务状态并自动发送下一个状态。
3.执行费减少到0.000045--0.00007 eth / transcation。
--------------------------------------------------------------------
Airdrop  
    ——config  
        config.js  
    ——contract  
        *.sol  
    ——filemanger  
        airdropListManager.js  
        awards.js  
        errorAirdropList.js  
        excelHandleManager.js  
    ——function  
        ——base  
            deploy.js  
            execute.js  
            listen.js  
            transaction.js  
        airdrop.js  
        approve.js  
        deployAirdropContract.js  
        transferETH.js  
        transferToken.js  
    start.js  
    
--------------------------------------------------------------------
# Dependency library
web3 solc ethereumjs-tx ethjs-account node-xlsx node-schedule silly-datetime

# Description of some key files
## --- deploy.js
This deploy.js can help you deploy the contract，you need set the'userPrivateKey' in config.js and run the func <deployContract>.
这个deploy.js可以帮助你部署契约，你需要在config.js中设置'userPrivateKey'
并运行func <deployContract>。

parameters:
'contractPath' is mean that path of your contract.sol file,
表示文件的路径
'contractName' is the contract name which you want to deploy,
要部署合同的名字
'extraParameter' is the parameters of what you need to init your contract.
是您开始签订合同所需的参数

The contract address will be printed on the console and save the contract address in your file！
合同地址将打印在控制台上，并将合同地址保存在您的文件中

## --- approve.js
This approve.js can help you authorize the airdrop contract address to use your specified number of tokens from your account;
此approve.js可以帮助您授权空投合同地址使用您帐户中指定数量的令牌;

you need set 'amount','airdropApproveAddress','userPrivateKey' and 'tokenContractAddress'
你需要摄者这些

then run approve.js , it will print the txHash and transfer result;
然后运行 approve.js他将打印txhash并传输结果 

## --- airdrop.js
This airdrop.js is an executive document of the airdrop contract.
这是空投合约的执行文件

parameters:
'filePath':your airdrop address file,and i am using the *.xlsx
空投文件地址
'addressIndex': this means the index of eth address in your *.xlsx,
'amountIndex': this means the index of token amount in your *.xlsx,
'addressNeedJudgeRepeat': this parameter represents whether you want to filter duplicate addresses.
此参数表示是否要检查重复地址

## --- execute.js
This execute.js can execute the function of your contract. 
这个文件执行你合同的功能

parameters:
'functionABI' is the data of your want to send in this transaction.
在此交易中发送的数据

## --- config.js
 config.js 是配置文件, 包含 'userModule','airdropModule','approveModule'


空投顺序如下:
1. Deploy ERC20Token contract and airdrop contract.
2. 批准足够的ERC20令牌到空投合同.
3. Compile a list of reciepient addresses and store them in 'airdropList.txt' file.
编译一个reciepient地址列表并将它们存储在'airdropList.txt'文件中
4. Run 'start.js' script.
5. You can look the airdrop result on the console or check the txHash in 'https://etherscan.io';

If you are not familiar with the smart contract, then follow the steps below!
如果您不熟悉智能合约，请按照以下步骤操作
1. run npm install 
2. Config your userPrivateKey and other info in config.js
在config中配置信息
3. Run deploy.js , then you will get the result on console 
4. copy the contractAddress on the console, and paste it in config.js ->approveModule->airdropApproveAddress
5. Config your tokenContractAddress and userPrivateKey in config.js ->approveModule. this userPrivateKey is the private key of the account which you want to use for transfer token;
6. Run approve.js, then your will get the result on console .
7. The address and number of airdrop will be required to be listed in xlsx.
8. Run 'start.js' script.
9. You can check the airdrop result on the console or check the txHash in 'https://etherscan.io'.





