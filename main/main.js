module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
    o) 最大值 = ${sequence.maximum()}
    o) 元数数量 = ${sequence.serial_number()}
    o) 平均数 = ${sequence.serial_mean()}`);
};

class Sequence {
  constructor(sequence) {
    // Write your code here
    this.sequence = sequence
  }

  minimum() {
    // Write your code here
    var arrmin = sequence[0];
    for(var i = 1; i <sequence.length; i++){
      if(sequence[i]<arrmin){
        arrmin = sequence[i];
      }
    }
    this.arrmin=arrmin;
    return this.arrmin;
  }

  // Write your code here
  maximum(){
    var arrmax = sequence[0];
    for(var i = 1; i <sequence.length; i++){
      if(sequence[i]>arrmax){
        arrmax = sequence[i];
      }
    }
    this.arrmax = arrmax;
    return this.arrmax; 
  }

  serial_number(){
    return this.sequence.length;
  }

  serial_mean(){
    var ave=0;
    var sum=0;
    for(var i = 1; i <sequence.length; i++){
      sum +=sequence[i];
    }
    ave = (sum / sequence.length).toFixed(2);
    this.ave = ave;
    return this.ave;
  }
}
