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
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Share Wealth']}) //specifying argument necessary for the contract
    .send ({from : accounts[0], gas: '1000000'})
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox);
  });
});