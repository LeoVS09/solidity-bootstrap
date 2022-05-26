import Web3 from 'web3'
import { getContract } from '../web3/getContract'
import USDTAbi from './artifacts/USDT.json'

export * from './types/USDT'
import { USDT } from './types/USDT'

export function getUSDT(web3: Web3): USDT {
    const address = import.meta.env.VITE_CONTRACT_USDT_ADDRESS
    if(!address){
        throw new Error('USDT contract do not have address in enviroment variable CONTRACT_USDT_ADDRESS')
    }

    return getContract<USDT>(web3, USDTAbi as any, address)
}

const {toBN, toWei, fromWei} = Web3.utils
// USDT in Etherium have basis of 6
// const usdtBasis = toBN(`${10 ** 6}`)  
// const usdtUnit = 'mwei'

// USDT in BSC have basis of 18
// const usdtBasis = toBN(`${10 ** 18}`) 
const usdtUnit = 'ether'

export function toUSDT(amount: string) {
    return fromWei(amount, usdtUnit).toString()
}

export function fromUSDT(amount: string ) {
    // correct only for basis 10^18
    return toWei(amount, usdtUnit).toString()
}