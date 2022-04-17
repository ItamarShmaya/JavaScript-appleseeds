/*
Instructions
Write the following functions using the reduce built-in function. 
1. max
2. sum of even numbers
3. average
*/

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// 1.

function max(arr) {
  let max = arr.reduce((a, b) => {
    return Math.max(a, b);
  })
  
  return max;
}

console.log(max(array));

// 2.

function sumOfEven(arr) {
  let sum = arr.reduce((a, b) => {
    if(b % 2 == 0) return a + b;
    else return a;
  }, 0)

  return sum;
}

console.log(sumOfEven(array));

// 3.

function avg(arr) {
  let avg = arr.reduce((a, b) => {
    return a + b;
  })
  return avg / arr.length;
}

console.log(avg(array));