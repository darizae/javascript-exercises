const findTheOldest = function(arr) {
    return arr.reduce((prev, curr) => {
        
        if(!curr.hasOwnProperty("yearOfDeath")) {
            curr.yearOfDeath = new Date().getFullYear();
        }
        if (!prev.hasOwnProperty("yearOfDeath")) {
            prev.yearOfDeath = new Date().getFullYear();
        }

        return (curr.yearOfDeath - curr.yearOfBirth) > (prev.yearOfDeath - prev.yearOfBirth) ? curr : prev;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
