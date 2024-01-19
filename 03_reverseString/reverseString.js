const reverseString = function(inputString) {
    let resultString = '';
    for (let i = 0; i < inputString.length; i++) {
        resultString += inputString[inputString.length-i-1];
    }
    return resultString;
};

// Do not edit below this line
module.exports = reverseString;
