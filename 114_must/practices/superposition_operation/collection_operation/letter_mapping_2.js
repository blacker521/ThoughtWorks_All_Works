'use strict';

function average_to_letter(collection) {
  var result = collection.reduce(function(a,b){
  	return a+b;
  });
  return String.fromCharCode(96 + Math.ceil(result/collection.length));

}

module.exports = average_to_letter;

