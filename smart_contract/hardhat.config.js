 // https://eth-ropsten.alchemyapi.io/v2/y5luOmFd8TmItHkmHu6fGEchTfvRy03e

 require('@nomiclabs/hardhat-waffle');

 module.exports ={
   solidity:'0.8.0',
   networks: {
     ropsten:{ 
       url: 'https://eth-ropsten.alchemyapi.io/v2/y5luOmFd8TmItHkmHu6fGEchTfvRy03e',
       accounts: ['account private key']
     }
   }
 }