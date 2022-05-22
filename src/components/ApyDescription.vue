<script setup lang="ts">
import { ref, toRefs, computed} from 'vue'

const props = defineProps<{ apyMetric: number, tokens: number }>()
const {apyMetric, tokens} = toRefs(props)

const stakedAmount = computed(() => {
    if(tokens.value > 0) {
        return tokens.value
    } else {
        return 100
    }
})

const expectedReward =  computed(() => (stakedAmount.value * apyMetric.value) + stakedAmount.value)

</script>

<template>
    <p class="apy-description">With current <Highlight>APY {{(apyMetric * 100).toFixed(2)}}%</Highlight> in next year you will have <Highlight>{{expectedReward.toFixed(2)}} USDT</Highlight> for staked <Highlight>{{stakedAmount}} USDT</Highlight><Highlight></Highlight></p>
</template>

<style lang="stylus">

.apy-description 
    font-size 1.2rem

</style>