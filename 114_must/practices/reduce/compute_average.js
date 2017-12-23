'use strict';

function compute_average(collection) {
   return collection.reduce(function(a,b){
  		return a+b;
  }) / collection.length;
}

module.exports = compute_average;

