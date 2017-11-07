function count_same_elements(collection) {
    var result = collection.reduce(function(prev,next){
  		prev[next] = (prev[next]) + 1 || 1;
  		return prev;
  },{});
  var arr = [];
  for(var i in result){
  	var map = {};
  	map.key = i;
  	map.count = result[i];
  	arr.push(map);
  }
  return arr;
}

module.exports = count_same_elements;
