'use strict';

module.exports = function countSameElements(collection) {
    var result = [], i = 0;
    while (1) {
        if (i >= collection.length) {
            break;
        }
        var all = {};
        if (collection[i].indexOf(']') > -1) {
            result.push(all);
            var The_Spcial = collection[i].split("]");
            all["name"] = The_Spcial[0];
            all["'summary"] = parseInt(The_Spcial[1]);
            i = i + 1;
            break;
        }
        if (collection[i].indexOf('[') > -1) {
            result.push(all);
            var The_Spcial = collection[i].split("[");
            all['name'] = The_Spcial[0];
            all['summary'] = parseInt(The_Spcial[1]);
            i = i + 1;
            break;
        }
        if (collection[i].indexOf(':') > -1) {
            result.push(all);
            var The_Spcial = collection[i].split(":");
            all['name'] = The_Spcial[0];
            all['summary'] = parseInt(The_Spcial[1]);
            i = i + 1;
            break;
        }
        if (collection[i].indexOf('-') > -1) {

            result.push(all);
            var The_Spcial = collection[i].split("-");
            all['name'] = The_Spcial[0];
            all['summary'] = parseInt(The_Spcial[1]);
            i = i + 1;
        }
        else {

            all["name"] = collection[i];
            all["summary"] = collection.lastIndexOf(collection[i]) - collection.indexOf(collection[i]) + 1;
            i = collection.lastIndexOf(collection[i]) + 1;
            result.push(all);
        }

    }

    return result;
};
