/*
Instructions
1. Build your own filter method with the help of prototypes
2. Build your own find method with the help of prototypes
Extra
3. Build your own reduce method with the help of 
prototypes
*/

Array.prototype.filter1 = function (func, thisArg) {
  const array = [];
  for(let i = 0; i < this.length; i++) {
    if(func.call(thisArg||this.this, this[i], i, this)) {
      array.push(this[i]);
    } 
  }
  return array;
}

Array.prototype.find1 = function(func, thisArg) {
  for(let i = 0; i < this.length; i++) {
     if(func.call(thisArg||this.this, this[i], i, this)) return this[i];
  }
  return undefined;
}

Array.prototype.reduce1 = function(func, initialValue) {
  if(arguments.length === 1) {
    if(this.length < 1) { throw "Reduce of empty array with no initial value" }

    let acc = this[0];
    for(let i = 1; i < this.length; i++) {
      acc = func(acc, this[i], i, this);
    }
    return acc;
  } else {
    let acc = initialValue;
    for(let i = 0; i < this.length; i++) {
      acc = func(acc, this[i], i, this);
    }
    return acc;
  }
}

const array = [1,2,3,4,5,6,7,8,9,10];

// console.log(array.filter1(function(x) {return x > this.a}, {a: 5}))
// console.log(array.filter(function(x) {return x > this.a}, {a: 5}))
// console.log(array.find1(function(x) {return x > this.a}, {a: 5}))
// console.log(array.find1((x => x > 2)));
// console.log(array.find((x => x > 2)));
// console.log(array.reduce1((a, b) => a + b, undefined));
// console.log(array.reduce((a, b) => a + b, undefined));