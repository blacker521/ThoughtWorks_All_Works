'use strict';

module.exports = function test() {
    let i, result = "";
    for (i = 99; i > 1; i--) {
            result += i + " bottles of beer on the wall, " + i + " bottles of beer.\n" +
                "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.\n"
    }
    result +="1 bottle of beer on the wall, 1 bottle of beer.\n" +
        "Take one down and pass it around, no more bottles of beer on the wall.\n" +
        "No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n"

    return result;
};
