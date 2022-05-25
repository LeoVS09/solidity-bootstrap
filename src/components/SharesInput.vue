<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import Web3 from 'web3'
import MoneyInput from './MoneyInput.vue'
import { InvestmentVault, getInvestmentVault } from '../contracts/InvestmentVault'

export interface SharesInputProps {
    value: string
    balance: string
    contractAddress: string
}

defineProps<SharesInputProps>()

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
        currency="Shares"><div class="symbol"><span>S</span></div>
    </MoneyInput>
</template>

<style lang="stylus" scoped>

.symbol
    height 3rem
    width 3rem
    margin-bottom 0.5rem
    color white
    background-color #212121
    border-radius 3px
    display flex
    flex-direction column
    align-items center
    justify-content center

</style>
