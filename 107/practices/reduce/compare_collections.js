'use strict';

function compare_collections(collection_a, collection_b) {
    if(collection_b.join() == collection_a.join()){
  		return true;
  }
}

module.exports = compare_collections;


