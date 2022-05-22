<script setup lang="ts">
import { ref } from 'vue'

export interface ContractProps {
    address: string
    class: string
}

defineProps<ContractProps>()
</script>

<template>
    <div :class="class">
        <a-tooltip>
            <template #title>
                Contract address at {{address}}
            </template>
                <div><slot></slot></div>
        </a-tooltip>
    </div>
</template>

<style lang="stylus">


</style>