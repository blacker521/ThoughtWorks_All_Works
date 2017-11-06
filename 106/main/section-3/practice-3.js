'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result = [], i = 0;
    while (1) {
        if (i >= collectionA.length) {
            break;
        }
        var all = {};
        all["key"] = collectionA[i];
        all["count"] = collectionA.lastIndexOf(collectionA[i]) - collectionA.indexOf(collectionA[i]) + 1;
        i = collectionA.lastIndexOf(collectionA[i]) + 1;
        result.push(all);
    }
    for (var j=0; j<result.length; j++) {
        if (objectB.value.indexOf(result[j]['key']) >= 0) {
            result[j]['count'] -= Math.floor(result[j]['count'] / 3);
        }
    }

    return result;
}
