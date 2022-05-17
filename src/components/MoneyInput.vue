<script setup lang="ts">
import { ref } from 'vue'
import Currency from './Currency.vue'
import { compactInteger } from '../humanize/compactInteger'

export interface MoneyProps {
    value: string
    address: string
    balance: string
}

const {value, address, balance} = defineProps<MoneyProps>()

const displayBalance = balance && compactInteger(balance)

const emit = defineEmits(['update:value'])

const updateValue = (event: any) => {
    emit('update:value', event.target.value)
}
</script>

<template>
    <div class="container">
        <input :value="value" @input="updateValue" placeholder="0.0" class="money" />
        <p class="balance">/ {{displayBalance || '0'}}</p>
        <Currency :address="address" class="currency"><slot></slot></Currency>
    </div>
</template>

<style lang="stylus" scoped>
.container 
    width 100%
    font-size 4rem
    display flex
    flex-direction row

input.money
    margin-left auto
    width 20rem
    background-color transparent
    text-align right
    margin-right 1rem

    &:active, &:hover, &, &:focus
        border 0
        outline none

.balance
    margin-bottom auto
    margin-top auto
    margin-right 1rem
    min-width 5rem

.symbol
    height 3rem
    margin-bottom 0.5rem

.currency
    margin-right auto
</style>
