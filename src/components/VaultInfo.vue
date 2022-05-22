<script setup lang="ts">
import { ref, onBeforeMount, computed} from 'vue'
import Web3 from 'web3'
import MoneyInput from './MoneyInput.vue'
import { InvestmentVault, getInvestmentVault } from '../contracts/InvestmentVault'
import { ERC20DforceStrategy, getStrategy } from '../contracts/ERC20DforceStrategy'
import { USDT, getUSDT, toUSDT } from '../contracts/USDT'

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
        totalAssets.value = toUSDT(await contract.methods.totalAssets().call())
        investedAssets.value = toUSDT(await strategy.methods.totalAssets().call())
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


const investmentRatio = computed(() => (+investedAssets.value) / (+totalAssets.value))

</script>

<template>
    <div v-if="totalAssets !== '0'" class="container">
        <p class="description">Total Locked Value</p>
        <h2 class="tlv">$ {{totalAssets.includes('.') ? totalAssets : totalAssets + '.00'}}</h2>
        <p class="additional-info">Invested {{investmentRatio * 100}}%</p>
    </div>
</template>

<style lang="stylus" scoped>
.container
    display flex
    flex-direction column
    text-align right
    min-width 8rem
    
.tlv
    font-size 2.5rem
    margin-bottom 0rem

.description, .additional-info
    font-size 0.8rem
    color #7c7b7b

.description
    margin-bottom -0.7rem
    text-align left

.additional-info
    margin-top -1rem
    font-size 0.8rem
</style>
