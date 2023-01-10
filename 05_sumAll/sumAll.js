const sumAll = function(num1, num2) {

    if (!isValidArg(num1) || !isValidArg(num2)) 
        return "ERROR";

    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    let sum = 0;

    for (var i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

//Determines if an argument is of type "number" and, if so, if it's greater than 0
const isValidArg = function(arg) {
    return ((typeof arg === "number") && (Number.isInteger(arg)) && (arg > 0)); 
}

// Do not edit below this line
module.exports = sumAll;
//module.exports = isValidArg;
