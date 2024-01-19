const convertToCelsius = function(fahrenheitDegree) {
  // (0°F − 32) × 5/9 = -17.78°C  
  let celsius = (fahrenheitDegree - 32) * 5/9;
  return celsius % 1 !== 0 ? parseFloat(celsius.toFixed(1)) : parseInt(celsius);
};

const convertToFahrenheit = function(celsiusDegree) {
  // (0°C × 9/5) + 32 = 32°F
  let fahrenheit = celsiusDegree * 9/5 + 32;
  return fahrenheit % 1 !== 0 ? parseFloat(fahrenheit.toFixed(1)) : parseInt(fahrenheit);
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
