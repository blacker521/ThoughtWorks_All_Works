'use strict';

module.exports = function countSameElements(collection) {
    var result = [],i = 0,all = {};
    while (1) {
        if (i >= collection.length){
            break;
        }
        all["key"] = collection[i];
        all["count"] = collection.lastIndexOf(collection[i]) - collection.indexOf(collection[i]) + 1;
        i = collection.lastIndexOf(collection[i]) + 1;
        result.push(all);
    }

    return result;
}