import Web3 from 'web3'
import { getContract } from '../web3/getContract'
import USDTAbi from './artifacts/USDT.json'

export * from './types/USDT'
import {USDT } from './types/USDT'

export function getUSDT(web3: Web3): USDT {
    const address = import.meta.env.VITE_CONTRACT_USDT_ADDRESS
    if(!address){
        throw new Error('USDT contract do not have address in enviroment variable CONTRACT_USDT_ADDRESS')
    }

    console.log('USDTAbi', USDTAbi  )

    return getContract<USDT>(web3, USDTAbi as any, address)
}