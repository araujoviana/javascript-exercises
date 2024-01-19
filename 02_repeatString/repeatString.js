const repeatString = function(inputString, repetitionNumber ) {
    if (repetitionNumber < 0 ) {
        return "ERROR";
    }
    
    let concatenatedString = '';
    for (let i = 0; i < repetitionNumber; i++) {
        concatenatedString += inputString; 
    }
    return concatenatedString;
};

// Do not edit below this line
module.exports = repeatString;
