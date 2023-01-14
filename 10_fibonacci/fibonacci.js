const fibonacci = function(limit) {
    if (limit < 0) return "OOPS";
    return generateFibonacci(limit)[limit-1];
};

function generateFibonacci(limit) {
    let fibonacci = [1,1];

    for (var i = 1; i < limit; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i-1]);
    }

    return fibonacci;
}

// Do not edit below this line
module.exports = fibonacci;
