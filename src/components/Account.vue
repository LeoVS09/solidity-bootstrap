<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ account: string }>()

</script>

<template>
    <p v-if="account">Your account is {{account}}</p>
    <p v-else>Cannot find account</p>
</template>

<style scoped>
p {
  padding: 1rem;
}

</style>