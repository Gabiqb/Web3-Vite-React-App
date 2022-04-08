 // https://eth-ropsten.alchemyapi.io/v2/y5luOmFd8TmItHkmHu6fGEchTfvRy03e

 require('@nomiclabs/hardhat-waffle');

 module.exports ={
   solidity:'0.8.0',
   networks: {
     ropsten:{ 
       url: 'https://eth-ropsten.alchemyapi.io/v2/y5luOmFd8TmItHkmHu6fGEchTfvRy03e',
       accounts: ['6878b7c1f51be974fc6d7c7e3c488c44e92c48c532327d18f8e6dbc9d388a186']
     }
   }
 }