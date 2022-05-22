<template>
    <div>
        <SecondaryButton @click="withdraw" :disabled="disabled">Withdraw</SecondaryButton>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Web3 from 'web3'
import { USDT, getUSDT } from '../contracts/USDT'
import { InvestmentVault, getInvestmentVault } from '../contracts/InvestmentVault'
import SecondaryButton from '../components/SecondaryButton.vue'

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
    name: "Withdraw",

    props: {
        web3: Object,
        account: String,
        amount: String,
    },

    components: {
        SecondaryButton
    },

    data(): StakeData {
        return {
            vault: null,
            usdt: null
        }
    },

    async created() {
        this.vault = await getInvestmentVault(this.web3 as Web3);
        this.usdt = await getUSDT(this.web3 as Web3);
    },

    computed: {
        disabled() {
            return (+(this.amount || '0') ) <= 0
        }
    },

    methods: {
        async withdraw() {
            if(this.disabled){
                return
            }
            const {toBN} = (this.web3 as Web3)!.utils
            const amount = toBN(this.amount!)

            await this.vault!.methods.withdraw(amount, '1').send({ from: this.account })

        }
    }

})
</script>