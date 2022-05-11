<script lang="ts">
import { defineComponent } from 'vue'
import Web3 from 'web3'
import { getAccount } from '../web3/getAccount'
import {getWeb3} from '../web3/getWeb3'
import Account from '../components/Account.vue'

export interface AppData {
  web3: Web3 | null;
  account: string,
}

export default defineComponent({
  name: 'app',

  components: {
    Account
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

<template>
  <div class="home">
    <h1>Greetings!</h1>
    <Account :account="account" />
  </div>
</template>

