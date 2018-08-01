module.exports = function main() {
  let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
  console.log(`o) 最小值 = ${sequence.minimum()}`);
  console.log(`o) 最大值 = ${sequence.maximum()}`);
  console.log(`o) 元数数量 = ${sequence.Sequence_length()}`);
  console.log(`o) 平均数 = ${sequence.Sequence_mean()}`); 
};

/*Sequence类，用来表示序列，包含最小值arrmin，最大值arrmax，序列长度arrlen，平均值arrave这四个属性
  有minimum、maximum、Sequence_length、Sequence_mean四种操作方法，分别用
  来求最小值、最大值、序列长度、平均值*/
class Sequence {
  constructor(input) {
    // Write your code here
    this.input = input;
    this.arrmin = 0;
    this.arrmax = 0;
    this.arrlen = 0;
    this.arrave = 0;

  }

  minimum() {
    // Write your code here
    this.arrmin = this.input[0];
    for(var i = 1; i <this.input.length; i++){
      if(this.input[i]<this.arrmin){
        this.arrmin = this.input[i];
      }
    }
    return this.arrmin;
  }

  // Write your code here
  maximum(){
    this.arrmax = this.input[0];
    for(var i = 1; i <this.input.length; i++){
      if(this.input[i]>this.arrmax){
        this.arrmax = this.input[i];
      }
    }
    return this.arrmax;
  }

  Sequence_length(){
    this.arrlen = this.input.length;
    return this.arrlen;
  }

  Sequence_mean(){
    var sum=0;
    for(var i = 1; i <this.input.length; i++){
      sum +=this.input[i];
    }
    this.arrave = (sum / this.input.length).toFixed(2);
    return this.arrave;
  }  
}

