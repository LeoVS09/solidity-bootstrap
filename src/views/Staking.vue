getApy<script setup lang="ts">
import { ref, onBeforeMount, computed } from 'vue'
import Web3 from 'web3'
import { SwapOutlined } from '@ant-design/icons-vue';
import UsdtInput from '../components/UsdtInput.vue'
import SharesInput from '../components/SharesInput.vue'
import Stake, {StakeSteps} from '../components/Stake.vue'
import Withdraw from '../components/Withdraw.vue'
import ApyDescription from '../components/ApyDescription.vue'
import VaultInfo from '../components/VaultInfo.vue'
import InvestmentInfo from '../components/InvestmentInfo.vue'
import {getInvestmentVault} from '../contracts/InvestmentVault'
import {getStrategy, getApy} from '../contracts/ERC20DforceStrategy'
import { toUSDT } from '../contracts/USDT';

const {account, web3} = defineProps<{ account: string, web3: Web3 }>()

const tokens = ref('')
const shares = ref('')

const stakeStep = ref(-1)

function updateStateStep(value: number){
    if(value === StakeSteps.Invest) {
        tokens.value = ''
    }

    if(value === StakeSteps.Finished) {
        stakeStep.value = -1
        return
    }

    stakeStep.value = value
}

const sharesBalance = ref('0')
const vaultContractAddress = ref('0')

const totalAssets = ref('0')
const investedAssets = ref('0')

const apy = ref(0)

onBeforeMount(async () => {
    const vault = await getInvestmentVault(web3);
    vaultContractAddress.value = (vault as any)?._address

    const strategy = await getStrategy(web3)

    async function updateInfo(){
        sharesBalance.value = await vault.methods.balanceOf(account!).call()
        totalAssets.value = toUSDT(await vault.methods.totalAssets().call())
        investedAssets.value = toUSDT(await strategy.methods.totalAssets().call())
    }
    await updateInfo()
    vault.events.Transfer(async () => {
        await updateInfo()
    })

    vault.events.Deposit(async () => {
        await updateInfo()
    })

    strategy.events.Borrowed(async () => {
        await updateInfo()
    })

    strategy.events.PutInStake(async () => {
        await updateInfo()
    })

    apy.value = await getApy(strategy)
    console.log('apy.value', apy.value)
})

const hasShares = computed(() => sharesBalance.value !== '0')

console.log('sharesBalance.value', sharesBalance.value, hasShares.value, totalAssets.value, investedAssets.value)

// Summary of current staking and value which will be staked
const stakeValue = computed(() => ((+tokens.value) + (+totalAssets.value)) || 0)
console.log('stakeValue', +stakeValue.value, tokens.value, +totalAssets.value)


</script>

<template>
    <div class="staking">
        <div class="header">
            <div class="name">
                <h1>Stake to Earn More</h1>
                <ApyDescription :apyMetric="apy" :tokens="stakeValue"/>
            </div>
            <Transition>
                <VaultInfo 
                    v-if="totalAssets !== '0'" 
                    :totalAssets="+totalAssets" 
                    :investedAssets="+investedAssets" 
                />
            </Transition>
        </div>

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
        
        <div class="workspace-container">
            <div class="workspace">
                <TransitionGroup name="wsp">
                    <UsdtInput key="to-stake" v-model:value="tokens" :web3="web3" :address="account" />  

                    <div class="actions" key="action">
                        <Stake :web3="web3" :account="account" :amount="tokens" @step="updateStateStep" />
                        <div v-if="hasShares" class="actions-divider">
                            <swap-outlined :rotate="90"/>
                        </div>
                        <Withdraw v-if="hasShares"  :web3="web3" :account="account" :amount="shares" />
                    </div>
                    
                    <SharesInput v-if="hasShares" key="to-withdraw" v-model:value="shares" :balance="sharesBalance" :contractAddress="vaultContractAddress" />
                </TransitionGroup>
            </div>

            <Transition appear mode="out-in">
                <InvestmentInfo v-if="stakeValue" :apy="apy" :tokens="stakeValue" />
            </Transition>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.staking
    width 100%
    height 100%
    background-color #FAF7FF
    padding 5rem
    padding-top 3rem
    display flex
    flex-direction column
    border-radius 5px
    box-shadow 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
    background rgb(250,250,250)
    background radial-gradient(circle, rgba(256,256,256,1) 0%, rgba(250,250,250,1) 10%, rgba(245,245,245,1) 60%, rgba(224,224,224,1) 80%)
    
.header
    display flex
    flex-direction row
    justify-content space-between

.name
    display flex
    flex-direction column


h1
    font-size 3rem
    font-weight bold
    margin-bottom 0.1rem

.workspace-container
    display flex
    flex-direction row
    width 100%
    height 100%
    align-items center
    justify-content space-between

.workspace
    display flex
    flex-direction column
    width 30%
    height 100%
    margin-left 35%
    justify-content center

.investment-info
    width 30%
    height 100%
    margin-left 5%

@media screen and (max-width: 1080px) 
    .workspace
        width 65%
        margin-left 0


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

.wsp-move, /* apply transition to moving elements */
.wsp-enter-active,
.wsp-leave-active {
  transition: all 0.5s ease;
}

.wsp-enter-from,
.wsp-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.wsp-leave-active {
  position: absolute;
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