<script setup lang="ts">
import { ref } from 'vue'
import Web3 from 'web3'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons-vue';
import UsdtInput from '../components/UsdtInput.vue'
import SharesInput from '../components/SharesInput.vue'
import Stake, {StakeSteps} from '../components/Stake.vue'
import Withdraw from '../components/Withdraw.vue'
import ApyDescription from '../components/ApyDescription.vue'


defineProps<{ account: string, web3: Web3 }>()

const tokens = ref('')
const shares = ref('')

const stakeStep = ref(-1)

function updateStateStep(value: number){
    if(value === StakeSteps.Finished) {
        stakeStep.value = -1
        return
    }

    stakeStep.value = value
}

</script>

<template>
    <div class="staking">
        <h1>Stake overview</h1>
        <ApyDescription :apyMetric="1.2" :tokens="+tokens"/>

        <div class="transactions-progress">
            <Transition>
                <a-divider v-if="stakeStep < 0"/>
                <a-steps v-else :current="stakeStep" size="default">
                    <a-step title="Approve" />
                    <a-step title="Deposit" />
                    <a-step title="Invest" />
                </a-steps>
            </Transition>
        </div>
        

        <Suspense>
            <UsdtInput v-model:value="tokens" :web3="web3" :address="account" />        
        </Suspense>
        <div class="actions">
            <Stake :web3="web3" :account="account" :amount="tokens" @step="updateStateStep" />
            <div class="actions-divider">
                <arrow-down-outlined />
                <arrow-up-outlined />
            </div>
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
    flex-direction column
    width 100%
    align-items space-around
    justify-content center
    position relative
    z-index 0

    &-divider
        margin-top 1rem
        margin-bottom 1rem
        display flex
        flex-direction row
        align-items center
        justify-content center
        font-size 2rem

.transactions-progress
    width 100%
    min-height 5rem

.v-enter-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>

<style>

.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after,
.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after,
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-tail::after,
.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-tail::after {
    background-color: #565454;
}
</style>