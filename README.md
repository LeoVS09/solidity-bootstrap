# Solidity Bootstrap

Simple example project for solidity based contracts development

> Project based on [Truffle](https://github.com/trufflesuite/truffle) and [Vue](https://vuejs.org/) build on [Vite](https://vitejs.dev/)

## Bostrap Variants

* [Plain JavaScript](https://github.com/LeoVS09/solidity-bootstrap/tree/plain-javascript) - dApp without any front-end framework.
* [React](https://github.com/LeoVS09/solidity-bootstrap/tree/react) - dApp with React framework.
* [React Redux](https://github.com/LeoVS09/solidity-bootstrap/tree/react-redux) - dApp with React and Redux frameworks.
* [Hardhat](https://github.com/LeoVS09/solidity-bootstrap/tree/hardhat) - smart contract development enviroment.

## Requirements

* [Truffle](https://github.com/trufflesuite/truffle) - Solidity development tool suit, install by `npm install -g truffle`
* [Ganache](https://trufflesuite.com/ganache/) - a personal blockchain for Ethereum development you can use to deploy contracts, [tip to install](https://gist.github.com/GoodnessEzeokafor/e3a2665bb482addbb603269428424967)

## First Start Guide

* Install requirements
* Instal dependencies by `npm i`
* Start Ganache local blockchain
* Run `truffle compile && truffle migrate` for setup contracts
* Start dev server by `npm run dev`
* Configure crypto wallet for interact with application, [tutorial](https://trufflesuite.com/tutorial/index.html#interacting-with-the-dapp-in-a-browser)

## Development

### Project Structure

Based on default Truffle directory structure:

* `contracts/`: Contains the Solidity source files for our smart contracts. There is an important contract in here called Migrations.sol, which we'll talk about later.
* `migrations/`: Truffle uses a migration system to handle smart contract deployments. A migration is an additional special smart contract that keeps track of changes.
* `test/`: Contains both JavaScript and Solidity tests for our smart contracts
* `truffle-config.js`: Truffle configuration file

### Commands

* `truffle compile` - Compile
* `truffle migrate` - Migrate
* `truffle test` - Test contracts
* `npm run dev` - Run dev server
* `truffle develop` - launch test blockchain with the Truffle Develop console
* `truffle create contract YourContractName` - scaffold a contract
* `truffle create test YourTestName` - scaffold a test
* `ganache` - start etherum light node

### First Start Guide

* Run `ganache` for start etherum node
* Run `truffle migrate` for deploy contracts
* Run `cd app && yarn dev` for start dApp development server
