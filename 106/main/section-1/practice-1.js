'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var A_words,B_words,result = [];
    for (var i=0 ;i<collectionA.length; i++){
        A_words=collectionA[i];
        for (var j=0;j<collectionB.length;j++){
            B_words=collectionB[j]
            if (A_words==B_words){
                result.push(A_words)
            }
        }
    }
  return result;
}
