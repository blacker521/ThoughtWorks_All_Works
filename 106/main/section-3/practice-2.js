'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    for(var i=0;i<collectionA.length;i++){
        if(objectB.value.indexOf(collectionA[i]['key']) >= 0){
            collectionA[i]['count'] -= Math.floor(collectionA[i]['count']/3);
        }
    }
    return collectionA;
}
