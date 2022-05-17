<script setup lang="ts">
import { ref } from 'vue'
import Web3 from 'web3'
import MoneyInput from './MoneyInput.vue'
import { InvestmentVault, getInvestmentVault } from '../contracts/InvestmentVault'

export interface SharesInputProps {
    web3: Web3
    address: string
    value: string
}

const {web3, address} = defineProps<SharesInputProps>()

const contract = await getInvestmentVault(web3);
const contractAddress = (contract as any)?._address

const balance = ref('')
async function updateBalance(){
    balance.value = await contract.methods.balanceOf(address!).call()
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
        :balance="balance">sUSDT
    </MoneyInput>
</template>

<style lang="stylus" scoped>

.symbol
    height 3rem
    margin-bottom 0.5rem

</style>
