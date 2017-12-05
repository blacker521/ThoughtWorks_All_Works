'use strict';

function double_to_one(collection) {
  return collection.join().split(",")
  		 .map(function(item){
  		 	return parseInt(item);
  		 });
}

module.exports = double_to_one;
