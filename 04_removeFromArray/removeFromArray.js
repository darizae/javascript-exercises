const removeFromArray = function(first, ...rest) {

    //Indefinite number of arguments are received
    let theArray = first;
    let toRemove = rest;
    
    //Returns an array where only elements that are not in the toRemove array are present
    return theArray.filter(element => !(toRemove.includes(element)));

};

// Do not edit below this line
module.exports = removeFromArray;
