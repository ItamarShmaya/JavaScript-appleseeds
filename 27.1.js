/*
Instructions
Write a function that takes a number as an argument and returns a Promise 
that tests if the value is less than or greater than the value 10.
If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
Call the function and print the resolve and reject in a .then, .catch.
*/

const lessOrGreaterThan10Promise = (n) => {
  return new Promise((resolve, reject) => {
    if(n > 10) {
      resolve(n);
    } else {
      reject(n);
    }
  })
}

lessOrGreaterThan10Promise(11).then((res) => console.log("resolved " + res)).catch((res) => console.log("rejected " + res))