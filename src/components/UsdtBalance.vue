<script setup lang="ts">
import { ref } from 'vue'
import Web3 from 'web3'
import Contract from './Contract.vue'
import { USDT, getUSDT } from '../contracts/USDT'

export interface UsdtBalanceProps {
    web3: Web3
    address: string
}

const {web3, address} = defineProps<UsdtBalanceProps>()

const {toBN} = web3.utils
const usdtBasis = toBN('1000000')

function toUSDT(amount: string) {
    return toBN(amount).div(usdtBasis).toString()
}

const contract = await getUSDT(web3 as Web3);
const contractAddress: string = (contract as any)?._address

const balance = ref('')
async function updateBalance(){
    balance.value = toUSDT(await contract.methods.balanceOf(address!).call())
}

await updateBalance()
contract.events.Transfer(async () => {
    await updateBalance()
})

</script>

<template>
    <div>
        <p v-if="balance">Your <Contract :address="contractAddress">USDT</Contract> balance is: {{balance}}            
        </p>
        <p v-else> Cannot connect to USDT contract</p>
    </div>
</template>

