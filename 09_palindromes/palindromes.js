const palindromes = function (str) {

    cleanStr = removeNonLetters(str).toLowerCase();

    let reverse = function(str) {
        let toReturn = "";
        for (let i = str.length - 1; i >= 0; i--) {
            toReturn += str[i];
        }
        return toReturn;
    }
    return cleanStr === reverse(cleanStr);
};

function removeNonLetters(str) {
    return str.replace(/[^a-zA-Z]/g, "");
}


// Do not edit below this line
module.exports = palindromes;
