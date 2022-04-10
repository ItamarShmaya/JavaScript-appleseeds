const arr = [1,7,3,0,-5,7,3,9];

// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

function arrLength(arr) {
  let length = 0;
  for(let item of arr) {
    length++;
  }
  return `Array Length is ${length}`;
}

function arrSum(arr) {
  let total = 0;
  for(let item of arr) {
    total += item;
  }
  return `Array Sum is ${total}`;
}

function arrMulti(arr) {
  let total = 1;
  for(let item of arr) {
    total *= item;
  }
  return `Array Product is ${total}`;
}