import "./Blockchain.js"
class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
    所属链
    父节点的Hash
    当前快的索引值
    当前节点的Hash
  */
  constructor(blockchain,preHash,index,hash) {
    this.blockchain = blockchain
    this.preHash = preHash
    this.index = index
    this.hash = hash
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
