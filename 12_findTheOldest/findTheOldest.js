// if every person has a death year, store death year and birth year in variables
// create function calcAge = death year - birth year
// store each person's calcAge into an array
// else person does NOT have a death year
// find current age by using Date function, add to age array
// else, do the same as above with death year
// use Math.max on ages array to find oldest
// add age to each person object

const findTheOldest = function(peopleArray) {
  let oldest = '';
  let age = 0;
  let updArray = [];

  // returns new array with updated person objects
  updArray = peopleArray.map(person => {
    let deathYear = person.yearOfDeath;
    let birthYear = person.yearOfBirth;
    if (deathYear) {
      age = deathYear - birthYear;
      person.age = age;
    }
    else {
      const now = new Date();
      let currentYear = now.getFullYear();
      age = currentYear - birthYear;
      person.age = age;
    }
    return person;
  });
  
  let maxAge = 0;
  let maxIndex = 0;
  for (let i = 0; i < updArray.length; i++) {
    if (updArray[i].age > maxAge) {
      maxAge = updArray[i].age;
      maxIndex = i;
    }
  }
  return oldest = updArray[maxIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
