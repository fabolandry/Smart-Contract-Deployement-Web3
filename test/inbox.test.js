//Using assert to make assertion about test
const assert = require('assert');
//Using ganache as local ether test network
const ganache = require('ganache-cli');
//Using web3 to create instance of the web3 library
const Web3 = require('web3');
//Using the exported contract from the compile.js file
const { interface, bytecode } = require ('../compile');
//Web3 instance creation
const web3 = new Web3(ganache.provider())
//fetching the will-be-use test account from ganache using mocha
let accouts; //Definie global variable to be use in different section of mocha 
let inbox;
beforeEach ( async () => {
  //get a list of all account
  accounts = await web3.eth.getAccounts();
  //deploying the contract from the first account available
  inbox = await new web3.eth.Contract(JSON.parse(interface))//teatching web3 about how to read the contract
    .deploy({ data: bytecode, arguments: ['Share Wealth']}) //specifying argument necessary to deploy the  contract
    .send ({from : accounts[0], gas: '1000000'}) //specify element to create the "deploy contract" trabsaction 
});
//Testing our deployement
describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address); // Check if the contract has an address if yes the transaction was successful 
  });
  // Check if the contract has an initial string in the message variable from solidity contract
  it('has a default message', async () => {
    const message = await inbox.methods.message().call(); // store the updated variable in js variable 
    assert.equal(message, 'Share Wealth');                //Check if the variable is the one set in line 19
  });

  it ('Can change the message ', async () => {
    await inbox.methods.setMessage('Share love').send({ from: accounts[0]}); // Update message variable in the contract
    const message = await inbox.methods.message().call(); // store the updated variable in js variable 
    assert.equal(message, 'Share love'); //Check the message variable was updated
  });
});