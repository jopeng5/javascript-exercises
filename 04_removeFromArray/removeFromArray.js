// pseudocode
// -compare each item from first array to each item from args array
// -if the items match, remove that item from the first array
// -return the first array once matching items are removed

const removeFromArray = function(ogArray, ...args) {
  for (let i = 0; i < args.length; i++) {
    if (ogArray.includes(args[i])) {
      ogArray.splice(ogArray.indexOf(args[i]),1);
    }
  }
  return ogArray;
};

// Do not edit below this line
module.exports = removeFromArray;
