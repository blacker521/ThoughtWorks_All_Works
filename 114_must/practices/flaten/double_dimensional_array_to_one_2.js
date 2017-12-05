'use strict';

function double_to_one(collection) {
  var collectionA = [];
  var result = collection.join().split(",")
  		 .map(function(item){
  		 	return parseInt(item);
  		 }).filter(function(e){
  		 	if(collectionA.indexOf(e) == -1){
  		 		collectionA.push(e);
  		 	}
  		 });
  return collectionA;
}

module.exports = double_to_one;
