const reverseString = function(str) {

    let output = "";

    //Iterates backwards
    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i];
      }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
