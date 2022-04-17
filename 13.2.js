/*
Instructions
Answer the following questions:
a. Array of words
const foods = ["falafel", "sabich", "hummus", "pizza with extra 
pineapple"];
a.1. Sort the array of strings from descending to ascending 
order
a.2. Sort the array of strings from ascending to descending 
order.
b. Lets sort an array of words that includes a word with an 
uppercase:
const foodsWithUpperCase = [
 "falafel",
 "Sabich",
 "hummus",
 "pizza with extra pineapple",
];
const foods = ["falafel", "sabich", "hummus", "pizza with extra 
pineapple"];
b.1. Sort the array of strings from descending to ascending 
order.
b.2. Sort the array of strings from ascending to descending 
order.
c. Longest word
c.1. Sort the array of strings from the longest word to the 
shortest word only using the sort function
*/

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// a.1

console.log(foods.sort());

// a.2

console.log(foods.sort().reverse());


const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

// b.1

 console.log(foodsWithUpperCase.sort((a, b) => {
   let valA = a.toLowerCase();
   let valB = b.toLowerCase();
   if(valA < valB) return -1;
   if(valA > valB) return 1;
   return 0; 
 }));

//  b.2

console.log(foodsWithUpperCase.sort((a, b) => {
  let valA = a.toLowerCase();
  let valB = b.toLowerCase();
  if(valA < valB) return 1;
  if(valA > valB) return -1;
  return 0; 
}));

// c.1 

console.log(foods.sort((a, b) => {
  if(a.length < b.length) return 1;
  if(a.length > b.length) return -1;
  return 0;
}));