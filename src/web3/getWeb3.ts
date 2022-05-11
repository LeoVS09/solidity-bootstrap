import Web3 from 'web3'

export async function getWeb3(): Promise<Web3> {
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
    global.web3 = new Web3(new Web3.providers.HttpProvider(import.meta.env.VITE_DEV_RPC_URL || "http://127.0.0.1:8545"))

    return global.web3
}