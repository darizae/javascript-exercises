const convertToCelsius = function(fahrenheitTemp) {
  return round((fahrenheitTemp - 32) * (5/9));
};

const convertToFahrenheit = function(celsiusTemp) {
  return round((celsiusTemp * 9/5) + 32);
};

const round = function(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
