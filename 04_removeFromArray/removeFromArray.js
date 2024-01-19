const removeFromArray = function(inputArray, removedElement) {
    for (let i = 1; i < arguments.length; i++) {
        if (!(inputArray.includes(arguments[i]))) {
            continue;
        }
        inputArray.splice(inputArray.indexOf(arguments[i]),1);
    }
    console.log(inputArray);
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
