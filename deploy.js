//Using HDwallet provider to connect web3 to rinkeby network
const HDWalletprovider = require('@truffle/hdwallet-provider');
//Using web3 to create instance of the web3 library
const Web3 = require('web3');
//Using the exported contract from the compile.js file
const { interface, bytecode } = require('./compile');

//Setting up provider %% 2 argumments Mmemonic and api endpoint 
const provider = new HDWalletprovider(
  'card tomato give need minor gym bounce round cherry castle switch long', //Empty account don't waiste your time
  'https://rinkeby.infura.io/v3/8a03257f20f349ba86946846d73fa16f' //API endpoint provide by infura
);
//Web3 instance creation
const web3 = new Web3(provider);
//--------------------------------DEPLOYEMENT-------------------------------
//creating an asynchronous function 
const deploy = async () => {
  accounts = await web3.eth.getAccounts(); //Getting the list of account link to the Mmemonic
  console.log('Attempting to deploy contract from account :', accounts[0]); // Posting the account deploying the contract
  const result = await new web3.eth.Contract(JSON.parse(interface))//teatching web3 about how to read the contract
    .deploy({ data: bytecode, arguments: ['Share Wealth']}) //specifying argument necessary to deploy the  contract
    .send ({from : accounts[0], gas: '1000000'}); //specify element to create the "deploy contract" trabsaction 
  console.log('Contract deploy to:', result.options.address);//Posting the account deploying the contract
  provider.engine.stop;//Preventing a hanging deployement 
};
deploy()//call the deploy function created above.

//------------------Contract succesfully deployed with the command node deploy.js------------------------------------
//------------------Contract deployed to the address 0x80CFdF7BD74Ba3DE91B20FBF9c493B0224F1eb8B ---------------------