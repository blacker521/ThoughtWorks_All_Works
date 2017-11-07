'use strict';

function find_last_even(collection) {
    for (var i=collection.length-1;i>0;i--) {
  	if(collection[i] % 2 == 0){
  		return collection[i];
  		break;
  	}
  }
}

module.exports = find_last_even;
