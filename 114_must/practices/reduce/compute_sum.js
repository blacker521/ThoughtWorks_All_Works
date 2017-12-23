'use strict';

function calculate_elements_sum(collection) {
    return collection.reduce(function(a,b){
  	return a + b ;
  });
}

module.exports = calculate_elements_sum;

