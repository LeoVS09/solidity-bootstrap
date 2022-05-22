<script setup lang="ts">
import { ref } from 'vue'

export interface ContractProps {
    address: string
}

defineProps<ContractProps>()
</script>

<template>
    <a-tooltip>
        <template #title>
            Contract address at {{address}}
        </template>
            <a-badge dot color="blue"><span class="contract"><slot></slot></span></a-badge>
    </a-tooltip>
</template>

<style lang="stylus">

.contract
    color #1890FF
</style>