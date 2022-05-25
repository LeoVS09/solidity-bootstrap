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

const {toBN} = Web3.utils
const apyBasis = 10 ** 18 // USDT have basis of 18

export function fromApy(amount: number) {
    return amount / apyBasis
}

// Etherium Mainnet
// const BLOCKS_PER_YEAR = 6_500 * 365

// BSC Mainnet
const BLOCKS_PER_YEAR = 28683 * 365

export async function getApy(strategy: ERC20DforceStrategy) {
    const supplyRate = fromApy(+(await strategy.methods.supplyRatePerBlock().call()));

    const perYear = supplyRate * BLOCKS_PER_YEAR
    console.log('supplyRate', {supplyRate, perYear})
    return perYear
}