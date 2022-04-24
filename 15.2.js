function findSmallest(a, b, c){
  if (a > b > c){
  return c;
  } else if (a > c > b) {
  return a;
 } else {
  return b;
  }
 }
 console.log(findSmallest(52,66, 2));

// 1. inspect --> sources --> page --> 15.2.js
// 2. red underline on findSmalest(52,66, 2) --> uncaught referenceError findSmalest is not defined
// 3. fixing findSmalest typo