/*
Instructions
Write two functions that use Promises that you can chain. 
The first function, makeAllCaps(), will take in an array of words and capitalize
them, and then the second function, sortWords(), will sort the words in 
alphabetical order. If the array contains anything but strings, it should throw 
an error.
Call the functions once with an array of words and call it once with an array 
that includes at least one item that is not a word. Print the resolve and reject 
in a .then, .catch.
*/

const words = ["when", "the", "days", "are", "cold", "and", "the", "cards", "all", "fold"];
const words1 = ["when", "the", "days", "are", 12, "and", "the", "cards", "all", "fold"];

const makeAllCaps = (arr) => {
  const capitalizedWords = [];
  return new Promise ((resolve, reject) => {
    for(let i = 0; i < arr.length; i++) {
      if(typeof arr[i] !== "string") {
        reject("Array must contain only strings");
      }
      capitalizedWords.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
    resolve(capitalizedWords);
  });
}

const sortWords = (arr) => {
  return new Promise((resolve) => {
    resolve(arr.sort((a, b) => a.localeCompare(b)));
  })
  // return arr.sort((a, b) => a.localeCompare(b));
}

// makeAllCaps(words)
// .then((response) => sortWords(response))
// .then((response) => console.log(response))
// .catch((console.log))

makeAllCaps(words)
.then((response) => sortWords(response))
.then((response) => console.log(response))
.catch((console.log))

// makeAllCaps(words)
// .then((response) => console.log(sortWords(response)))
// .catch((console.log));

// makeAllCaps(words1)
// .then((response) => console.log(sortWords(response)))
// .catch((console.log));