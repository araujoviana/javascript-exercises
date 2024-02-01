const add = function(firstNumber = 0, secondNumber = 0) {
  return parseInt(firstNumber + secondNumber);
};

const subtract = function(firstNumber = 0, secondNumber = 0) {
	return firstNumber - secondNumber;
};

const sum = function(numberArray) {
  let result = 0;
  for (let number of numberArray) {
    result += number;
  }
  return result
};

const multiply = function(numberArray) {
  let result = 1;
  for (let number of numberArray) {
    result *= number;
  }
  return result
};

const power = function(firstNumber, secondNumber) {
  
  return firstNumber ** secondNumber;
};

const factorial = function(rval) {
  let result = 1;
  for (let i = 2; i <= rval; i++)
      result *= i;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
