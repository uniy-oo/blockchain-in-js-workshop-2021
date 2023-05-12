import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 3

class Block {
  // 1. 完成构造函数及其参数

  constructor(blockchain,preHash,index,hash) {
    this.blockchain = blockchain
    this.preHash = preHash
    this.height = index
    this.hash = hash
  }

  isValid() {
    const str = "0".repeat(DIFFICULTY)

    return (this.nonce+"").startsWith(str)
  }

  setNonce(nonce) {
    this.nonce = nonce
  }
   /**
     * 获得父区块的方法
     * @returns 父区块
     */
   getPreviousBlock(){
    return this.blockchain.blocks[this.preHash]
  }
}

export default Block

