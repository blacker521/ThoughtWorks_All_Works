'use strict';

function get_integer_interval_2(number_a, number_b) {
    var reslut = [], i=0;
  if (number_a < number_b){
    for(i = number_a; i <= number_b; i++){
      if(i % 2 == 0){
        reslut.push(i);
      }
    }
  }else if(number_a > number_b){
    for(i = number_a; i >= number_b; i--){
      if(i % 2 == 0){
        reslut.push(i);
      }
    }
  }else if(number_a == number_b){
    if(number_a % 2 == 0){
      reslut.push(number_a);
    }
  }
  return reslut;
}

module.exports = get_integer_interval_2;
