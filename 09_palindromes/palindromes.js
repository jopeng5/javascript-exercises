// turn the string into an array of chars
// reverse the array
// convert the array back into a string

const palindromes = function (str) {
  revStr = str.toLowerCase().replaceAll(' ', '').replaceAll(',', '');
  strToArray = revStr.split('');
  revArray = strToArray.reverse();
  finalStr = revArray.toString().replaceAll(',', '');
  if (revStr === finalStr) {
    return true;
  }
  else if (revStr.slice(0, revStr.length - 1) === finalStr.slice(1)) {
    return true;
  }
  else {
    return false;
  }
};



// Do not edit below this line
module.exports = palindromes;
