const sumAll = function(startingRange, endingRange) {
    let totalValue = 0;

    // Error checking

    if (startingRange > endingRange) {
        // Swaps their values
        [startingRange, endingRange] = [endingRange, startingRange];
    }

    else if (startingRange < 0 || endingRange < 0) {
        return "ERROR";
    }

    else if (!(Number.isInteger(startingRange)) || !(Number.isInteger(endingRange))) {
        return "ERROR";
    }


    for (startingRange; startingRange <= endingRange; startingRange++) {
        totalValue += startingRange;
    }
    return totalValue;
};

// Do not edit below this line
module.exports = sumAll;
