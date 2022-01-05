//Using assert to make assertion about test
const assert = require('assert');
//Using ganache as local ether test network
const ganache = require('ganache-cli');
//Using web3 to create instance of the web3 library
const Web3 = require('web3');
//Web3 instance creation
const web3 = new Web3(ganache.provider())

