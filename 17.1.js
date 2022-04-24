/*
Instructions
Without running the code below, explain in your own words what the result 
of each block of code will be and why.
*/

// Block 1

var b = 1;
function someFunction(number) {
 function otherFunction(input) {
 return b;
 }
 b = 5;
//  global variable
 return otherFunction;
//  returns a function
}
var firstResult = someFunction(9);
//  firstResult = otherFunction 
// b = 5;
var result = firstResult(2);
// result = b = 5


// Block 2

var a = 1;
// global variable
function b2() {
 a = 10;
// a update the a() to be 10 
 return;
 function a() { }
//  a() is being hosited
}
b2();
console.log(a);
// output 1


// Block 3

let i;
// declare i outside as global variable
for (i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
//  creating a function that console logs i
 setTimeout(log, 100);
//  calling log function with setTimeout every 100ms
}

// output 3 3 3, because by the time setTimeout calls the log function the loop
// is done and 'i' as a global variable keeps the last value of 3
// and then the log function is being executed 3 times with 'i' being 3