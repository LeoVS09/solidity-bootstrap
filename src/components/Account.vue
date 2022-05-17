<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ account: string }>()

</script>

<template>
    <p class="account" v-if="account">Your account is {{account}}</p>
    <p class="account" v-else>Cannot find account</p>
</template>

<style scoped>
.account {
  padding: 1rem;
}

</style>