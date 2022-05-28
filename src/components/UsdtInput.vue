<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import Web3 from 'web3'
import MoneyInput from './MoneyInput.vue'
import { USDT, getUSDT, toUSDT } from '../contracts/USDT'

export interface UsdtBalanceProps {
    balance: string
    contractAddress: string
    value: string
}

defineProps<UsdtBalanceProps>()

const emit = defineEmits(['update:value'])

const updateValue = (event: any) => {
    emit('update:value', event.target.value)
}

</script>

<template>
    <MoneyInput 
        :value="value" @input="updateValue"
        :address="contractAddress" 
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
