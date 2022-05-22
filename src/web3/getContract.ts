import Web3 from 'web3'
import {Contract, ContractOptions} from 'web3-eth-contract';
import {AbiItem} from 'web3-utils';

export function getContract<T = Contract>(web3: Web3, abi: AbiItem[] | AbiItem, address?: string): T {
    return new web3.eth.Contract(
        abi,
        address
    ) as any as T
}