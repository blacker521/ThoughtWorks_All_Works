'use strict';

function even_to_letter(collection) {
 return collection.filter(function(item){if(item % 2 == 0){return item;}}).map(function(e){return String.fromCharCode(96 + parseInt(e));});
}

module.exports = even_to_letter;
