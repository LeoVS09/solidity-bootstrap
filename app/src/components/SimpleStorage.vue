<template>
  <div class="simplestorage">
    <div class="content">
      <h3>Example of a simple storage contract</h3>
      <p v-if="contractAddress">The contract is deployed at {{contractAddress}}</p>
      <p v-if="!contractAddress">No contracts found</p>
      <p v-if="account">Current account: {{account}}</p>
      <p v-if="!account">No accounts found</p>
      <input v-model="newValue" type="number">
      <button @click="updateValue">Update value in the contract</button>
      <p v-if="currentNumber">Value read from the contract: {{currentNumber}}</p>
      <p v-if="!currentNumber">Value not set</p>
    </div>
    <div class="message" v-if="message">{{message}}</div>
  </div>
</template>

<script lang="ts">
import Web3 from 'web3'
import { defineComponent } from 'vue'
import {SimpleStorage} from '../types'
import artifact from '../contracts/SimpleStorage.json'
import { Contract } from 'web3-eth-contract'


async function getWeb3(): Promise<Web3> {
    const global: { web3?: Web3, ethereum?: any } = window as any

    // Modern dapp browsers...
    if (global.ethereum) {
      global.web3 = new Web3(global.ethereum!);
      await global.ethereum.enable();

      return global.web3
    }

    // Legacy dapp browsers...
    if (typeof global.web3 !== 'undefined') {
      console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 Fluyd, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
      // Use Mist/MetaMask's provider
      global.web3 = new Web3(global.web3!.currentProvider)
      return global.web3
    } 

    console.warn("No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask")
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    global.web3 = new Web3(new Web3.providers.HttpProvider(import.meta.env.DEV_RPC_URL || "http://127.0.0.1:8545"))

    return global.web3
}

export interface SimpleStorageData {
  message: string | null,
  contractAddress: string | null,
  account: string | null,
  newValue: number,
  currentNumber: number
  instance: SimpleStorage | null
}

export default defineComponent({
  name: 'SimpleStorage',

  data(): SimpleStorageData {
    return {
      message: null,
      contractAddress: null,
      account: null,
      newValue: 0,
      currentNumber: 0,
      instance: null
    }
  },
  
  async created() {
    const web3 = await getWeb3()

    try {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length == 0) {
          this.message = "Couldn't get any accounts! Make sure your Ethereum client is configured correctly."
          return
      }
      this.account = accounts[0]
      const networkId = await web3.eth.net.getId();

      const deployedNetwork = (artifact.networks as any)[networkId];
      this.instance = new web3.eth.Contract(
          artifact.abi as any,
          deployedNetwork?.address
      ) as any as SimpleStorage;

      // @ts-ignore
      this.contractAddress = this.instance._address
      this.updateCurrentNumber()
    } catch (e) {
      console.error(e)
      this.message = "Error during connection to blockchain"
    }
  },

  methods: {
    async updateValue() {
      this.message = "Transaction started";

      try {
        await this.instance!.methods.set(this.newValue).send({ from: this.account! })
        this.message = "Transaction done"
        this.updateCurrentNumber()

      } catch(e) {
        console.error(e)
        this.message = "Transaction failed"
      }
    },
    
    async updateCurrentNumber() {
      const r = await this.instance!.methods.get().call()

      console.log(r)
      this.currentNumber = +r
    },
  },
})
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.content {
  padding: 13px 13px 39px 13px;
}

.message {
  background: #eee;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 13px;
  line-height: 1;
  padding: 13px;
}
</style>