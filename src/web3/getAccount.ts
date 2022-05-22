import Web3 from 'web3'

export async function getAccount(web3: Web3): Promise<string> {
    const accounts = await web3.eth.getAccounts();
    if (accounts.length == 0) {
        throw new Error("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
    }

    return accounts[0]
}