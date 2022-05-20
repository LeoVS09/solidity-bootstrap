<script setup lang="ts">
import { ref } from 'vue'
import Web3 from 'web3'
import MoneyInput from './MoneyInput.vue'
import { USDT, getUSDT, toUSDT } from '../contracts/USDT'

export interface UsdtBalanceProps {
    web3: Web3
    address: string
    value: string
}

const {web3, address} = defineProps<UsdtBalanceProps>()

const contract = await getUSDT(web3 as Web3);
const contractAddress: string = (contract as any)?._address

const balance = ref('')
async function updateBalance(){
    balance.value = toUSDT(await contract.methods.balanceOf(address!).call()), 1
}

await updateBalance()
contract.events.Transfer(async () => {
    await updateBalance()
})

const emit = defineEmits(['update:value'])

const updateValue = (event: any) => {
    emit('update:value', event.target.value)
}

</script>

<template>
    <MoneyInput 
        :value="value" @input="updateValue"
        :address="contractAddress" 
        :key="balance"
        :balance="balance"
        currency="USDT"
        ><img alt="USDT Symbol" class="symbol" src="../assets/usdt-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment_95467.svg"/>
    </MoneyInput>
</template>

<style lang="stylus" scoped>

.symbol
    height 3rem
    margin-bottom 0.5rem
    background #26A17B
    border-radius 3px

</style>
