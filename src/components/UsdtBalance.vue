<template>
    <div>
        <p v-if="balance">Your USDT balance is: {{balance}}
            <br /> 
            Contract address at {{(contract as any)?._address}}
        </p>
        <p v-else> Cannot connect to USDT contract</p>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Web3 from 'web3'
import {USDT, getUSDT } from '../contracts/USDT'


export interface UsdtBalanceProps {
    web3: Web3
    address: string
}

export interface UsdtBalanceData {
    balance: string | null
    contract: USDT | null
}

export default defineComponent({
    name: "UsdtBalance",

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
        this.contract = await getUSDT(this.web3 as Web3);

        console.log('this.address', this.address)

        this.balance = await this.contract.methods.balanceOf(this.address!).call()
    }

})
</script>