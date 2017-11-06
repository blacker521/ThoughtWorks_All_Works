'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var A_Words,B_Words,result = [];
  for (var i=0;i<collectionA.length;i++)
  {
      A_Words = collectionA[i];
      for (var j=0;j<collectionB.length;j++){
        B_Words = collectionB[j];
          if (A_Words == B_Words){
              result.push(A_Words)
          }
      }
  }
  return result;
};
