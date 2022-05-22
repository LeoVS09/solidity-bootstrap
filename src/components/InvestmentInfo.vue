<script setup lang="ts">
import {computed, toRefs, defineProps} from 'vue'

const props = defineProps<{ apy: number, tokens: number }>()
const {apy, tokens} = toRefs(props)

console.log({apy, tokens})

const perYear = computed(() => tokens.value * apy.value)
const perMonth = computed(() => perYear.value / 12)
const perDay = computed(() => perYear.value / 356)

</script>

<template>
    <div class="investment-info">
        <h3>You will receive reward</h3>
        <table>
            <tr><td>Per Day</td> <td class="money">+ ${{perDay.toFixed(2)}}</td></tr>
            <tr><td>Per Month</td> <td class="money">+ ${{perMonth.toFixed(2)}}</td></tr>
            <tr><td>Per Year</td> <td class="money">+ ${{perYear.toFixed(2)}}</td></tr>
        </table>

    </div>
</template>

<style lang="stylus" scoped>

.investment-info
    display flex
    flex-direction column
    justify-content center
    align-items end

    h3
        margin-top -8rem
        margin-bottom 1rem
        font-size 1.1rem
        max-width 18rem
        width 100%

    table
        max-width 18rem
        width 100%
        font-size 1rem

        tr > td
            padding-bottom 0.6rem

        .money
            color #43a047

</style>