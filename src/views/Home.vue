<template>
  <div class="home">
    <h1>Greetings!</h1>
    <Account :account="account" />
    <div v-if="account && web3">
      <UsdtBalance :web3="web3" :address="account" />
      <Stake :web3="web3" :account="account" />
      <Withdraw :web3="web3" :account="account" />
      <SharesBalance :web3="web3" :address="account" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Web3 from 'web3'
import { getAccount } from '../web3/getAccount'
import {getWeb3} from '../web3/getWeb3'
import Account from '../components/Account.vue'
import UsdtBalance from '../components/UsdtBalance.vue'
import SharesBalance from '../components/SharesBalance.vue'
import Stake from '../components/Stake.vue'
import Withdraw from '../components/Withdraw.vue'

export interface AppData {
  web3: Web3 | null;
  account: string,
}

export default defineComponent({
  name: 'app',

  components: {
    Account,
    UsdtBalance,
    SharesBalance,
    Stake,
    Withdraw
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



