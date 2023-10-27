// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ]

// const getTheTitles = function(arr) {
//   titlesArr = arr.map(function (book) {
//     return arr[arr.indexOf(book)].title;
//   });
//   return titlesArr;
// };

const getTheTitles = function(arr) {
  return arr.map(book => book.title);
}

// Do not edit below this line
module.exports = getTheTitles;
