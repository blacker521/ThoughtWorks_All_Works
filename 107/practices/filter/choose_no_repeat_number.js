'use strict';

function choose_no_repeat_number(collection) {
  var collectionA = [];
  for (var i = 0; i < collection.length; i++) {
    if(collectionA.indexOf(collection[i]) == -1){
    	collectionA.push(collection[i]);
    }
  }
  return collectionA
}

module.exports = choose_no_repeat_number;
