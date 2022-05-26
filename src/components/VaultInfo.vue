<script setup lang="ts">
import { computed, toRefs} from 'vue'

export interface VaultInfoProps {
    investedAssets: number
    totalAssets: number
}
const props = defineProps<VaultInfoProps>()
const {investedAssets, totalAssets} = toRefs(props)

const investmentRatio = computed(() => investedAssets.value / totalAssets.value)

console.log('investmentRatio', investmentRatio.value, investedAssets, totalAssets)

</script>

<template>
    <div class="container">
        <p class="description">Total Locked Value</p>
        <h2 class="tlv">$ {{`${totalAssets}`.includes('.') ? (+totalAssets).toFixed(2) : `${totalAssets}` + '.00'}}</h2>
        <p class="additional-info">Invested {{(investmentRatio * 100).toFixed(2)}}%</p>
    </div>
</template>

<style lang="stylus" scoped>
.container
    display flex
    flex-direction column
    text-align right
    min-width 8rem
    
.tlv
    font-size 2.5rem
    margin-bottom 0rem

.description, .additional-info
    font-size 0.8rem
    color #7c7b7b

.description
    margin-bottom -0.7rem
    text-align left

.additional-info
    margin-top -1rem
    font-size 0.8rem
</style>
