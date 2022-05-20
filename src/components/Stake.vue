<template>
    <div>
        <PayButton @click="putInStake" :disabled="disabled">Stake</PayButton>
    </div>
</template>

<script lang="ts">
import {defineComponent, defineEmits} from 'vue'
import Web3 from 'web3'
import { USDT, getUSDT, fromUSDT } from '../contracts/USDT'
import { InvestmentVault, getInvestmentVault } from '../contracts/InvestmentVault'
import PayButton from './PayButton.vue'
import { ERC20DforceStrategy, getStrategy } from '../contracts/ERC20DforceStrategy'

export interface StakeProps {
    web3: Web3
    account: string
    amount: string
}

export interface StakeData {
    vault: InvestmentVault | null
    strategy: ERC20DforceStrategy | null
    usdt: USDT | null
}

export enum StakeSteps {
    Approve = 0,
    Deposit = 1,
    Invest = 2,
    Finished = 3,
}

defineEmits<{(event: 'step', step: StakeSteps): void}>()

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
            strategy: null
        }
    },

    async created() {
        this.vault = await getInvestmentVault(this.web3 as Web3);
        this.usdt = await getUSDT(this.web3 as Web3);
        this.strategy = await getStrategy(this.web3 as Web3);

        console.log('check is strategy and tokens connected', (await this.strategy.methods.want().call()) === (this.usdt as any)._address)
    },

    computed: {
        disabled() {
            return (+(this.amount || '0') ) <= 0
        }
    },

    methods: {
        async putInStake() {
            if(this.disabled){
                return
            }

            const amount = fromUSDT(this.amount!)
            // @ts-ignore
            const vaultAddress = this.vault!._address

            this.$emit('step', StakeSteps.Approve)
            await this.usdt!.methods.approve(vaultAddress, amount).send({ from: this.account })
            
            this.$emit('step', StakeSteps.Deposit)
            await this.vault!.methods.deposit(amount).send({ from: this.account })

            this.$emit('step', StakeSteps.Invest)
            await this.strategy!.methods.work().send({ from: this.account })

            this.$emit('step', StakeSteps.Finished)
        }
    }

})
</script>