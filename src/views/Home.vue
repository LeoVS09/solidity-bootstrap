<template>
  <main class="home">
    <Transition>
      <div v-if="!started"></div>
      <Login v-else-if="!web3 || !account" />
      <Staking v-else :web3="(web3 as any)" :account="account" />
    </Transition>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Web3 from 'web3'
import { getAccount } from '../web3/getAccount'
import {getWeb3} from '../web3/getWeb3'
import Staking from './Staking.vue'
import Login from './Login.vue'

export interface AppData {
  web3: Web3 | null;
  account: string,
  started: boolean, // delay first render to remove blinking
}

export default defineComponent({
  name: 'app',

  components: {
    Staking,
    Login,
  },

  data(): AppData {
    return {
      web3: null,
      account: "",
      started: false
    }
  },
  
  async created() {
    setTimeout(() => {
      this.started = true
    }, 300)
    this.web3 = await getWeb3()

    this.account = await getAccount(this.web3 as Web3)
  }
})
</script>

<style lang="stylus">
.home
  height 100%
  width 100%

.v-enter-active {
  transition: opacity 0.3s ease;
  animation: bounce-in 0.3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
</style>

