<script setup lang="ts">
import { ref } from 'vue'
import Web3 from 'web3'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons-vue';
import UsdtInput from '../components/UsdtInput.vue'
import SharesInput from '../components/SharesInput.vue'
import Stake from '../components/Stake.vue'
import Withdraw from '../components/Withdraw.vue'
import ApyDescription from '../components/ApyDescription.vue'

defineProps<{ account: string, web3: Web3 }>()

const tokens = ref('')
const shares = ref('')



</script>

<template>
    <div class="staking">
        <h1>Stake overview</h1>
        <ApyDescription :apyMetric="1.2" :tokens="+tokens"/>

        <a-divider />

        <Suspense>
            <UsdtInput v-model:value="tokens" :web3="web3" :address="account" />        
        </Suspense>
        <div class="actions">
            <Stake :web3="web3" :account="account" :amount="tokens" />
            <arrow-down-outlined />
            <arrow-up-outlined />
            <Withdraw :web3="web3" :account="account" :amount="shares" />
        </div>
        <Suspense>
            <SharesInput v-model:value="shares" :web3="web3" :address="account" />
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
    box-shadow 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
    background rgb(250,250,250)
    background radial-gradient(circle, rgba(250,250,250,1) 0%, rgba(245,245,245,1) 30%, rgba(224,224,224,1) 100%)
    

h1
    font-size 3rem
    font-weight bold

.actions
    display flex
    flex-direction row
    width 100%
    align-items space-around
    justify-content center
    position relative
    z-index 0
</style>