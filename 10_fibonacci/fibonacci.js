const fibonacci = function(targetValue) {
    if (typeof targetValue == 'string') {
        parseInt(targetValue);
    }

    if (targetValue < 0) {
        return "OOPS";
    }
    else if (targetValue == 0) {
        return 0;
    }

    fibonacciSequence = [0,1];

    for (let i = 2; i <= targetValue; i++) {
      fibonacciSequence.push(fibonacciSequence[i-1] + fibonacciSequence[i-2]);  
    }
    return fibonacciSequence.pop();
};

// Do not edit below this line
module.exports = fibonacci;
