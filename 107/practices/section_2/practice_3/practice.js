function count_same_elements(collection) {
  function getNum(str) {
    var arr = new Array();

    if (str.indexOf('[') >= 0) {
      arr.push(str[0])
      var num = str.substring(str.indexOf('[') + 1, str.indexOf(']'));
      arr.push(num);
      return arr;
    } else if (str.indexOf('-') >= 0) {
      return str.split('-');
    } else if (str.indexOf(':') >= 0) {
      return str.split(':');
    }
  }

  var result = [];
  var orthers = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].length > 1) {
      orthers.push(collection[i]);
      collection.splice(i, 1);
    }
  }

  i = 0;
  while (true) {
    if (i >= collection.length) {
      break;
    }

    var info = {};
    info["name"] = collection[i];
    info["summary"] = collection.lastIndexOf(collection[i]) - collection.indexOf(collection[i]) + 1;
    i = collection.lastIndexOf(collection[i]) + 1;
    result.push(info);
  }

  for (i=0;i<orthers.length;i++) {
    var arr = getNum(orthers[i]);
    for (var j=0;j<result.length;j++) {
      if (arr[0] == result[j]["name"]) {
        result[j]["summary"] += parseInt(arr[1]);
        break;
      }
    }
    if (j == result.length) {
      result.push({"name": arr[0], "summary": parseInt(arr[1])});
    }
  }
  info = result.splice(7, 1)[0];
  result.splice(5, 0, info);
  return result;
}

module.exports = count_same_elements;
