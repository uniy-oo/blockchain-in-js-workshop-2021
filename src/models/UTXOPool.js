import UTXO from './UTXO.js'

class UTXOPool {
  constructor(utxos = {}) {
    this.utxos=utxos
  }

  addUTXO(utxo) {
    //将新的交易添加进UTXO池中并更新
    if(this.utxos[this.utxos.pubkey]!=null){
      this.utxos[utxo.pubkey]={amount:this.utxos[utxo.pubkey].amount+utxo.amount};
    }else{
      this.utxos[utxo.pubkey]={amount:utxo.amount}
    }
  }
//将当前UTXO的副本克隆
  clone() {
    return this.utxos
  }

  // 处理交易函数
  handleTransaction() {}

  // 验证交易合法性
  /**
   * 验证余额
   * 返回 bool 
   */
  isValidTransaction() {}
}

export default UTXOPool
