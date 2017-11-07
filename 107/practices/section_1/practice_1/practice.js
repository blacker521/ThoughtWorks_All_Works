function collect_same_elements(collection_a, collection_b) {
    var result = collection_a.filter(function(item){
  	 for (var i=0;i<collection_b.length;i++) {
  	 	if(item == collection_b[i]){
  	 		return item;
  	 	}
  	 }
  });
  return result;
}

module.exports = collect_same_elements;
