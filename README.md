# Solidity Bootstrap

Simple example project for solidity based contracts development

> Project based on [Vue](https://vuejs.org/) and build on [Vite](https://vitejs.dev/). It uses Web3 as RPC client

## Bostrap Variants

* [Plain JavaScript](https://github.com/LeoVS09/solidity-bootstrap/tree/plain-javascript) - dApp without any front-end framework.
* [React](https://github.com/LeoVS09/solidity-bootstrap/tree/react) - dApp with React framework.
* [React Redux](https://github.com/LeoVS09/solidity-bootstrap/tree/react-redux) - dApp with React and Redux frameworks.
* [Hardhat](https://github.com/LeoVS09/solidity-bootstrap/tree/hardhat) - smart contract development enviroment.

## Requirements

* [Hardhat](https://hardhat.org/getting-started/#installation) - development environment to compile, deploy, test, and debug your Ethereum software

## Development

### Recommended IDE Setup

* [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## First Start Guide

* Install requirements
* Instal dependencies by `npm i`
* Compile contracts by `npx hardhat compile`
* Run tests `npx hardhat test`

### Commands

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

## Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

## Performance optimizations

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
