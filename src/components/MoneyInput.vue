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
        <div class="money-row">
            <Currency :address="address" class="currency"><slot></slot></Currency>
            <input :value="value" @input="updateValue" placeholder="100.0" class="money" />
        </div>
        <div class="currency-info">
            <p class="currency-name">{{currency}}</p>
            <p class="balance"><span class="secondary">Balance:</span> {{displayBalance || '0'}}</p>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.container 
    width 100%
    font-size 3rem
    display flex
    flex-direction column
    align-items center

.money-row
    display flex
    flex-direction row
    width 30%
    align-items left

.currency-info
    width 30%
    display flex
    flex-direction row
    align-items center
    justify-content left 
    font-size 0.9rem
    font-weight 200
    color #7c7b7b
    position relative
    top -0.7rem

input.money
    width 100%
    background-color transparent
    text-align left
    margin-right 0

    &:active, &:hover, &, &:focus
        border 0
        outline none

.currency
    width 3rem
    display flex
    flex-direction column
    align-items center
    justify-content center
    margin-right 1rem


.currency-name
    margin-left 0
    text-align center
    margin-right 1rem
    margin-bottom 0
    width 3rem

.balance
    margin-bottom 0
    min-width 5rem
    margin-left 0.3rem
    
</style>
