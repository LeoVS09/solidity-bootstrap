<template>
    <div>
        <p v-if="balance">Your <Contract :address="(contract as any)?._address">Shares</Contract> balance is: {{balance}}
        </p>
        <p v-else> Cannot connect to InvestmentVault contract</p>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Web3 from 'web3'
import Contract from './Contract.vue'
import { InvestmentVault, getInvestmentVault } from '../contracts/InvestmentVault'


export interface UsdtBalanceProps {
    web3: Web3
    address: string
}

export interface UsdtBalanceData {
    balance: string | null
    contract: InvestmentVault | null
}

export default defineComponent({
    name: "SharesBalance",

    props: {
        web3: Object,
        address: String
    },

    data(): UsdtBalanceData {
        return {
            balance: null,
            contract: null
        }
    },

    async created() {
        this.contract = await getInvestmentVault(this.web3 as Web3);

        console.log('this.address', this.address)

        this.balance = await this.contract.methods.balanceOf(this.address!).call()
    }

})
</script>