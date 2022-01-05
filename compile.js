// Using path for cross coompatibily 
const path = require('path');
//Using the file system module
const fs = require('fs');
//Using the solidity compiler
const solc = require('solc');
// Getting the path
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
//reading the raw source code from the contract
const source = fs.readFileSync(inboxPath, 'utf8');
//Compiling and exporting the contract
module.exports = solc.compile(source, 1).contracts[':Inbox'];