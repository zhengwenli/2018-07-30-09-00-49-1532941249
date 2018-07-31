module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
    o) 最小值 = ${sequence.maximum()}
    o) 最小值 = ${sequence.serial_number()}
    o) 最小值 = ${sequence.serial_mean()}`);
};

class Sequence {
  constructor(sequence) {
    // Write your code here
    this.isequence = sequence
  }

  minimum() {
    // Write your code here
    var arrmin = sequence[0];
    for(var i = 1; i <sequence.length; i++){
      if(sequence[i]<arrmin){
        arrmin = sequence[i];
      }
    }
    return arrmin;
  }

  // Write your code here
  maximum(){
    var arrmax = sequence[0];
    for(var i = 1; i <sequence.length; i++){
      if(sequence[i]>arrmax){
        arrmax = sequence[i];
      }
    }
    return arrmax; 
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
    return ave;
  }
}
