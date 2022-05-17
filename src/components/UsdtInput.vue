<script setup lang="ts">
import { ref } from 'vue'
import Web3 from 'web3'
import MoneyInput from './MoneyInput.vue'
import { USDT, getUSDT } from '../contracts/USDT'

export interface UsdtBalanceProps {
    web3: Web3
    address: string
    value: string
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
        :balance="balance"><img alt="USDT Symbol" class="symbol" src="../assets/tether-usdt-cryptocoins-icon.png"/>
    </MoneyInput>
</template>

<style lang="stylus" scoped>

.symbol
    height 3rem
    margin-bottom 0.5rem

</style>
