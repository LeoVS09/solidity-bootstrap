<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import Web3 from 'web3'
import MoneyInput from './MoneyInput.vue'
import { InvestmentVault, getInvestmentVault } from '../contracts/InvestmentVault'
import { ERC20DforceStrategy, getStrategy } from '../contracts/ERC20DforceStrategy'
import { USDT, getUSDT } from '../contracts/USDT'

export interface VaultInfoProps {
    web3: Web3
    address: string
}

const {web3, address} = defineProps<VaultInfoProps>()

const totalAssets = ref('0')
const investedAssets = ref('0')
const contractAddress = ref('0')

onBeforeMount(async () => {
    const contract = await getInvestmentVault(web3);
    contractAddress.value = (contract as any)?._address

    const strategy = await getStrategy(web3)

    const usdt = await getUSDT(web3)

    async function updateInfo(){
        totalAssets.value = await contract.methods.totalAssets().call()
        investedAssets.value = await strategy.methods.totalAssets().call()
        // investedAssets.value = await usdt.methods.balanceOf((strategy as any)._address).call()
    }
    await updateInfo()

    contract.events.Transfer(async () => {
        await updateInfo()
    })

    contract.events.Deposit(async () => {
        await updateInfo()
    })

    strategy.events.Borrowed(async () => {
        await updateInfo()
    })

    strategy.events.PutInStake(async () => {
        await updateInfo()
    })

    
})


</script>

<template>
    <p>Invested Assets: {{investedAssets}} \ Total Vault Assets: {{totalAssets}}</p>
</template>

<style lang="stylus" scoped>


</style>
