import Web3 from 'web3'
import { getContract } from '../web3/getContract'
import InvestmentVaultAbi from './artifacts/InvestmentVault.json'

export * from './types/InvestmentVault'
import { InvestmentVault } from './types/InvestmentVault'

export function getInvestmentVault(web3: Web3): InvestmentVault {
    const address = import.meta.env.VITE_CONTRACT_INVESTMENT_VAULT_ADDRESS
    if(!address){
        throw new Error('InvestmentVault contract do not have address in enviroment variable VITE_CONTRACT_INVESTMENT_VAULT_ADDRESS')
    }

    return getContract<InvestmentVault>(web3, InvestmentVaultAbi.abi as any, address)
}