import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 2

class Block {
  // 1. 完成构造函数及其参数

  constructor(blockchain,preHash,index,hash) {
    this.blockchain = blockchain
    this.preHash = preHash
    this.height = index
    this.hash = hash
    //矿工
    this.coinbaseBeneficiary=miner
    //创建交易池
    this.utxoPool=new UTXOPool({})
  }

  isValid() {
    var str="0".repeat(DIFFICULTY)
    this._setHash()
    return this.hash.startWith(str)
  }

  setNonce(nonce) {
    this.nonce = nonce
  }
  /**
     * 获得父区块的方法
     * @returns 父区块
     */
  getPreviousBlock(){
    if(this.height==1){
      return this.blockchain.genesis
    }
    return this.blockchain.blocks[this.preHash]
  }
  _setHash(){
    this.hash=sha256(this.nonce+this.preHash+this.height+this.blockchain).toString()
  }
  

}

export default Block
