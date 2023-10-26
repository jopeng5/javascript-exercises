const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
};

const multiply = function(numArray) {
  let result = 1;
  for (let i = 0; i < numArray.length; i++) {
    result *= numArray[i];
  }
  return result;
};

const power = function(base, pwr) {
  let i = 1;
  let result = base;
  while (i < pwr) {
    result *= base;
    i++;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
	for (let i = 0; i < num; i++) {
    result *= num - i;
  }
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
