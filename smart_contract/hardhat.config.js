 // https://eth-ropsten.alchemyapi.io/v2/y5luOmFd8TmItHkmHu6fGEchTfvRy03e

 require('@nomiclabs/hardhat-waffle');

 module.exports ={
   solidity:'0.8.0',
   networks: {
     ropsten:{ 
       url: 'https://eth-ropsten.alchemyapi.io/v2/y5luOmFd8TmItHkmHu6fGEchTfvRy03e',
       accounts: ['cf140bb7ee355fd8c901610d628030124b80b7ed8210ae5fe951bb2c4e6bdd03']
     }
   }
 }