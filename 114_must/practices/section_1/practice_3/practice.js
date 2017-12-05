function collect_same_elements(collection_a, object_b) {
    var result = collection_a.filter(function(item){
  	 for (var i=0;i<object_b["value"].length; i++) {
  	 	if(item == object_b["value"][i]){
  	 		return item;
  	 	}
  	 }
  });
  return result;
}
module.exports = collect_same_elements;
