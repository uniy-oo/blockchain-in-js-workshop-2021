import UTXO from './UTXO.js'
import Transaction from './Transaction.js';
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
  handleTransaction(tra) {
    if(this.isValidTransaction(tra.miner,tra.num)){
      this.addUTXO(new utxo(tra.receiverPubkey,tra.num))
      this.utxos[tra.miner]={amount:this.utxos[tra.miner].amount-tra.num}
    }
    
  }

  // 验证交易合法性
  /**
   * 验证余额
   * 返回 bool 
   */
  isValidTransaction(miner,num) {
    console.log(this.utxos)
    return this.utxos[miner].amount>num
  }
}

export default UTXOPool
