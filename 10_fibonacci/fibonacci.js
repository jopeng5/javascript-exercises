// check that num is positive integer
// make sum variable
// make previous number variable = 1
// make previous number 2 variabe = 1
// start for loop
// in each iteration, 
// sum = prev num and prev num 2
// the Fibonacci sequence used is 1, 1, 2, 3, 5, 8,

const fibonacci = function(num) {
  intNum = parseInt(num);
  if (intNum <= 0) {
    return 'OOPS';
  }
  else if (intNum === 1 || intNum === 2) {
    return 1;
  }
  else {
    let prevNum = 1;
    let prevNum2 = 1;
    let result = 0;
    for (let i = 2; i < intNum; i++) {
      result = prevNum + prevNum2;
      prevNum2 = prevNum;
      prevNum = result;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = fibonacci;
