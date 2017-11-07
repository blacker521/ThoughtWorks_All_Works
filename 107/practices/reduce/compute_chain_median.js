'use strict';

function compute_chain_median(collection) {
    var result = collection.split("->")
  						.map(function(item){
  							return parseInt(item);
   				}).sort(function(a,b){
   					return a - b;
   				});
  // console.log(result);
  if(result.length % 2 == 0){
  	  return (result[result.length / 2] + result[result.length/2 -1])/2;
  } else{
  	return (result[result.length/2]);
  }

}

module.exports = compute_chain_median;
