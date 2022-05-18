import Web3 from 'web3'
import { getContract } from '../web3/getContract'
import ERC20DforceStrategyAbi from './artifacts/ERC20DforceStrategy.json'

export * from './types/ERC20DforceStrategy'
import { ERC20DforceStrategy } from './types/ERC20DforceStrategy'

export function getStrategy(web3: Web3): ERC20DforceStrategy {
    const address = import.meta.env.VITE_CONTRACT_INVESTMENT_STRATEGY
    if(!address){
        throw new Error('InvestmentVault contract do not have address in enviroment variable VITE_CONTRACT_INVESTMENT_STRATEGY')
    }

    return getContract<ERC20DforceStrategy>(web3, ERC20DforceStrategyAbi.abi as any, address)
}