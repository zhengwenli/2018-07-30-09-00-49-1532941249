module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
    o) 最大值 = ${sequence.maximum()}
    o) 元数数量 = ${sequence.serial_number()}
    o) 平均数 = ${sequence.serial_mean()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.input = input
  }

  minimum() {
    // Write your code here
    var arrmin = input[0];
    for(var i = 1; i <input.length; i++){
      if(input[i]<arrmin){
        arrmin = input[i];
      }
    }
    this.arrmin=arrmin;
    return this.arrmin;
  }

  // Write your code here
  maximum(){
    var arrmax = input[0];
    for(var i = 1; i <input.length; i++){
      if(input[i]>arrmax){
        arrmax = input[i];
      }
    }
    this.arrmax = arrmax;
    return this.arrmax; 
  }

  serial_number(){
    return this.input.length;
  }

  serial_mean(){
    var ave=0;
    var sum=0;
    for(var i = 1; i <input.length; i++){
      sum +=input[i];
    }
    ave = (sum / input.length).toFixed(2);
    this.ave = ave;
    return this.ave;
  }
}
