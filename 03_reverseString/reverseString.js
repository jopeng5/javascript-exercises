// pseudocode
// -store string in variable
// -take the string variable and split it into an array 
// -reserve the items in the array 
// -convert array back into a string
// -return the string

const reverseString = function(str) {
  return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
