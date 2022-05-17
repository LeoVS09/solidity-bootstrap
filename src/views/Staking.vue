<script setup lang="ts">
import { ref } from 'vue'
import Web3 from 'web3'
import Account from '../components/Account.vue'
import UsdtInput from '../components/UsdtInput.vue'
import SharesInput from '../components/SharesInput.vue'
import Stake from '../components/Stake.vue'
import Withdraw from '../components/Withdraw.vue'

defineProps<{ account: string, web3: Web3 }>()

const tokens = ref('')
const shares = ref('')

</script>

<template>
    <div class="staking">
        <h1>Stake overview</h1>
        <Suspense>
            <UsdtInput v-model="tokens" :web3="web3" :address="account" />        
        </Suspense>
        <div class="actions">
            <Stake :web3="web3" :account="account" :amount="tokens" />
            <Withdraw :web3="web3" :account="account" :amount="shares" />
        </div>
        <Suspense>
            <SharesInput v-model="shares" :web3="web3" :address="account" />
        </Suspense>
    </div>
</template>

<style lang="stylus" scoped>
.staking
    width 100%
    height 100%
    background-color #FAF7FF
    padding 5rem
    display flex
    flex-direction column
    border-radius 5px
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

h1
    font-size 3rem

.actions
    display flex
    flex-direction row
    width 100%
    align-items space-around
    justify-content center
    position relative
    z-index 0
</style>