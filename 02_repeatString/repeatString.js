// pseudocode
// -get string and store it in a variable
// -get number and store it in a variable
// -loop through the string as many times as number
// -for each iteration of the loop, append the current string to the previous string
// -return the cocatenated string and store it in a new variable


const repeatString = function(str, num) {
  let finalStr = '';
  if (num < 0) return 'ERROR';
  for (let i = 0; i < num; i++) {
    finalStr += str;
  }
  return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
