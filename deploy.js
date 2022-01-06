//Using HDwallet provider to connect web3 to rinkeby network
const HDWalletprovider = require('@truffle/hdwallet-provider');
//Using web3 to create instance of the web3 library
const Web3 = require('web3');
//Using the exported contract from the compile.js file
const { interface, bytecode } = require('./compile');

//Setting up provider %% 2 argumments Mmemonic and api endpoint 
const provider = new HDWalletProvider(
  'card tomato give need minor gym bounce round cherry castle switch long', //Empty account don't waiste your time
  'https://rinkeby.infura.io/v3/8a03257f20f349ba86946846d73fa16f'
);
//Web3 instance creation
const web3 = new Web3(provider);
//--------------------------------DEPLOYEMENT-------------------------------
//creating an asynchronous function 
const deploy = async () => {
  accounts = await web3.eth.getAccounts() //Getting the list of account link to the Mmemonic
  console.log('Attempting to deploy contract from account :', accounts[0]); // Posting the account deploying the contract
};