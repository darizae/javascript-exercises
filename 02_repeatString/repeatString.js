const repeatString = function(str, num) {

    if (num < 0) return "ERROR";

    let toReturn = "";

    for (var i = 0; i < num; i++) {
        toReturn += str;
    }

    return toReturn;
};

// Do not edit below this line
module.exports = repeatString;
