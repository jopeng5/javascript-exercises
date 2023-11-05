// updated on 11/05/2023, after I went through JS Fundamentals Part 5
const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

// from before JS 5
// const sum = function(numArray) {
// 	let sum = 0;
//   for (let i = 0; i < numArray.length; i++) {
//     sum += numArray[i];
//   }
//   return sum;
// };
const sum = arr => arr.reduce((sum, current) => sum + current, 0);

// from before JS 5
// const multiply = function(numArray) {
//   let result = 1;
//   for (let i = 0; i < numArray.length; i++) {
//     result *= numArray[i];
//   }
//   return result;
// };
const multiply = arr => arr.reduce((total, current) => total * current, 1);

// from before JS 5
// const power = function(base, pwr) {
//   let i = 1;
//   let result = base;
//   while (i < pwr) {
//     result *= base;
//     i++;
//   }
//   return result;
// };
const power = (base, power) => Math.pow(base, power);

// no change
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
