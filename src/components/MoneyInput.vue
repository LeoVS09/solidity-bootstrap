<script setup lang="ts">
import { computed } from 'vue'
import Currency from './Currency.vue'
import { compactInteger } from '../humanize/compactInteger'

export interface MoneyProps {
    value: string
    address: string
    balance: string
    currency: string
}

const {value, address, balance} = defineProps<MoneyProps>()
console.log('props', balance)
const displayBalance = computed(() => balance && compactInteger(balance))

const emit = defineEmits(['update:value'])

const updateValue = (event: any) => {
    emit('update:value', event.target.value)
}
</script>

<template>
    <div class="container">
        <input :value="value" @input="updateValue" placeholder="0.0" class="money" />
        <Currency :address="address" class="currency"><slot></slot></Currency>
        <div class="currency-info">
            <p class="currency-name">{{currency}}</p>
            <p class="balance"><span class="secondary">Balance:</span> {{displayBalance || '0'}}</p>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.container 
    width 100%
    font-size 4rem
    display flex
    flex-direction row

input.money
    width 50%
    background-color transparent
    text-align right
    margin-right 1rem

    &:active, &:hover, &, &:focus
        border 0
        outline none

.currency
    width 5rem
    display flex
    flex-direction column
    align-items center
    justify-content center
    margin-right 1rem


.currency-info
    display flex
    flex-direction column
    align-items center
    justify-content center
    font-size 1rem

.currency-name
    text-align left
    margin-bottom 0
    width 100%
    margin-top auto

.balance
    margin-bottom auto
    margin-top auto
    margin-right 1rem
    min-width 5rem
    margin-top 0

.secondary
    color #616161
</style>
