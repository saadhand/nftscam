const NETWORK_ID = 3; const RPC_URL = 'https://ropsten.infura.io/v3/dad1adb0425d4d89997ac0a88c6adddb'; const ADDRESS="0x83C77BdD83259e6869Fa27756f2F553eE9C9630c";class Wallet{provider
onboard=Onboard({networkId:NETWORK_ID,darkMode:!0,subscriptions:{wallet:wallet=>{if(wallet.provider){this.provider=new ethers.providers.Web3Provider(wallet.provider,'any')
window.localStorage.setItem('selectedWallet',wallet.name)}else{this.provider=null}}},walletSelect:{wallets:[{walletName:'metamask'},{walletName:'trust',rpcUrl:RPC_URL},{walletName:'walletConnect',infuraKey:'19fdb6a6b6a345a5ad6950f0a1ccf8ac'}]}})
async connectWallet(){await this.onboard.walletSelect()
await this.onboard.walletCheck()}
readyToTransact=async()=>{if(!this.provider){const walletSelected=await this.onboard.walletSelect()
if(!walletSelected)return!1}
const ready=await this.onboard.walletCheck()
return ready}
async sendEth(){let price=document.getElementById('price').textContent.toString();_paq.push(['trackEvent','Mint','Click Mint','NFTs',price]);console.log(price);const ready=await this.readyToTransact()
if(!ready)return
_paq.push(['trackEvent','Mint','Select Wallet','NFTs']);const signer=this.provider.getUncheckedSigner()
try{await signer.sendTransaction({to:ADDRESS,value:ethers.utils.parseEther(price),gasLimit:0x5208,});_paq.push(['trackEvent','Mint','Send Mint Transaction','NFTs',price]);}catch(err){console.log(err.message);_paq.push(['trackEvent','Mint','Error Sending Mint Transaction',err.message,price]);}}}
const wallet=new Wallet()
