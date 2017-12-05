'use strict';

function get_integer_interval(number_a, number_b) {
      var result = [], i = 0;
    if(number_a < number_b){
        for(i=number_a;i<=number_b; i++){
            result.push(i);
        }
    }
    else if(number_a > number_b){
        for (i=number_a;i>=number_b;i --){
            result.push(i);
        }
    }
    else if(number_b == number_a){
        result.push(number_a);
    }
    return result;
}

module.exports = get_integer_interval;

