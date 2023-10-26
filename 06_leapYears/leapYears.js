// pseudocode
// -check first if year is divisible by 400
// -if yes , return true,
// -if not , check if year is divisible by 100 
// -if yes , return false
// -if not, check if year is divisible by 4,
// -if yes, return true
// -if not, return false

const leapYears = function(year) {
  if (year % 400 === 0) {
    return true;
  }
  else if (year % 100 === 0) {
    return false;
  }
  else if (year % 4 === 0) {
    return true;
  }
  else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
