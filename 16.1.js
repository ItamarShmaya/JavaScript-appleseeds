/*
Instructions
Without running the code below, explain in your own words what the result 
of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix them.
*/

// Block 1

function funcA() {
  console.log(a);
  // output undefined, because var a is being hoisted 
  console.log(foo());
  // output 2, because foo() is being hoisted
  var a = 1;
  function foo() {
  return 2;
  }
 }
 funcA();

//  Block 2

var fullName = 'John Doe';
var obj = {
 fullName: 'Colin Ihrig',
 prop: {
 fullName: 'Aurelio De Rosa',
 getFullName: function () {
 return this.fullName;
 }
 }
};
console.log(obj.prop.getFullName());
// output "Aurelio De Rose", becuase we're getting getFullName() inside of 'prop' object inside 'obj' 
// and 'this' refers to 'prop' object
var test = obj.prop.getFullName;
console.log(test());
// output "John Doe", because we're setting test to be getFullName() and then calling it 
// in the global scope so 'this' refers to the global object

// Block 3

function funcB() {
  let a = b = 0;
  a++;
  return a;
 }
 funcB();
 console.log(typeof a);
// output undefined, because 'a' is only declared inside funcB() and can't be accessed outisde
// so trying to access it gives an error and the typeof error is undefined?
 console.log(typeof b);
// output 'number', because we declare b = 0 which makes it global and sets it to be a number

// Block 4

function funcC() {
  console.log("1");
 }
 funcC();
//  output 2, both function being hoisted then called so the last function is overwriting the first
 function funcC() {
  console.log("2");
 }
 funcC();
 //  output 2, both function being hoisted then called so the last function is overwriting the first

//  block 5

function funcD1() {
  d = 1;
 }
 funcD1();
 console.log(d);
//  output 1, calling funcD1() sets d to be 1 as global variable
 function funcD2() {
  var e = 1;
 }
 funcD2();
 console.log(e);
//  output error, var is function scope so it can't be accessed outside

// Block 6

function funcE() {
  console.log("Value of f in local scope: ", f);
 }
 console.log("Value of f in global scope: ", f);
//  output f is undefined, because var f is hoisted
 var f = 1;
 funcE();
//  output f is 1, because calling funcE() after 1 is assigned to 'f'
 


