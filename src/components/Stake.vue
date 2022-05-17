<template>
    <div>
        <PayButton @click="putInStake">Stake</PayButton>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Web3 from 'web3'
import { USDT, getUSDT } from '../contracts/USDT'
import { InvestmentVault, getInvestmentVault } from '../contracts/InvestmentVault'
import PayButton from './PayButton.vue'

export interface StakeProps {
    web3: Web3
    account: string
    amount: string
}

export interface StakeData {
    vault: InvestmentVault | null
    usdt: USDT | null
}

export default defineComponent({
    name: "Stake",

    props: {
        web3: Object,
        account: String,
        amount: String
    },

    components: {
        PayButton,
    },

    data(): StakeData {
        return {
            vault: null,
            usdt: null,
        }
    },

    async created() {
        this.vault = await getInvestmentVault(this.web3 as Web3);
        this.usdt = await getUSDT(this.web3 as Web3);
    },

    methods: {
        async putInStake() {
            const {toBN} = (this.web3 as Web3)!.utils
            const usdtBasis = toBN('1000000')
            const amount = toBN(this.amount!).mul(usdtBasis)
            // @ts-ignore
            const vaultAddress = this.vault!._address
            await this.usdt!.methods.approve(vaultAddress, amount).send({ from: this.account })

            await this.vault!.methods.deposit(amount).send({ from: this.account })

        }
    }

})
</script>