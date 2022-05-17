<template>
  <main class="home">
    <Login v-if="!web3 || !account" />
    <Staking v-else :web3="web3" :account="account" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Web3 from 'web3'
import { getAccount } from '../web3/getAccount'
import {getWeb3} from '../web3/getWeb3'
import Staking from './Staking.vue'
import Login from '../components/Login.vue'

export interface AppData {
  web3: Web3 | null;
  account: string,
}

export default defineComponent({
  name: 'app',

  components: {
    Staking,
    Login
  },

  data(): AppData {
    return {
      web3: null,
      account: ""
    }
  },
  
  async created() {
    this.web3 = await getWeb3()

    this.account = await getAccount(this.web3 as Web3)
  }
})
</script>

<style lang="stylus" scoped>
.home
  height 100%
  width 100%
</style>

