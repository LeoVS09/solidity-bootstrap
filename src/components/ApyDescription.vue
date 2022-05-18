<script setup lang="ts">
import { ref } from 'vue'

const {apyMetric, tokens} = defineProps<{ apyMetric: number, tokens: number }>()

const stakedAmount = ref(0)
if(tokens > 0) {
    stakedAmount.value = tokens
} else {
    stakedAmount.value = 100
}

const expectedReward = ref(0)

expectedReward.value = stakedAmount.value * apyMetric
</script>

<template>
    <p class="apy-description">With current <Highlight>APY {{apyMetric * 100}}%</Highlight> in next year you will have <Highlight>{{expectedReward}} USDT</Highlight> for staked <Highlight>{{stakedAmount}} USDT</Highlight><Highlight></Highlight></p>
</template>

<style lang="stylus">

.apy-description 
    font-size 1.2rem

</style>