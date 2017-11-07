'use strict';

module.exports = function countSameElements(collection) {
    var result = [], i = 0;
    while (1) {
        if (i >= collection.length) {
            break;
        }
        var all ={};
        if (collection[i].indexOf("-") > -1) {

             var The_Spcial = collection[i].split("-");
            all["key"] = The_Spcial[0];
            all["count"] = parseInt(The_Spcial[1]);
            i = i + 1;
            result.push(all);
            continue;
        }
        else {

            all["key"] = collection[i];
            all["count"] = collection.lastIndexOf(collection[i]) - collection.indexOf(collection[i]) + 1;
            i = collection.lastIndexOf(collection[i]) + 1;
            result.push(all);
        }


    }

    return result;
}
