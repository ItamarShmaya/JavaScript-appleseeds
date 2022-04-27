/*
Question 1:
In your own words what will this point to and why?(Note 
this is the global scope)
console.log(this);
*/
// window object


/*
Question 2:
a. In your own words what will this point to and why.
b. How can you fix this code.
const myObj = {
 name: "Timmy",
 greet: () => {
 console.log(`Hello ${this.name}`);
 },
};
myObj.greet();
*/
// a. window object, becuase it's an arrow function
// b. change it to regular function


/*
Question 3:
In your own words what will this point to and why?
const myFuncDec = function () {
 console.log(this);
};
*/
// window object

/*
Question 4:
In your own words what will this point to and why?
const myFuncArrow = () => {
 console.log(this);
};
myFuncArrow();
*/
// window object

/*
Question 5:
a. In your own words what will this point to and why.
b. How can you fix this code.
document.querySelector(".element").addEventListener(() => {
 console.log(this);
});
*/
// a. window object
// b. change arrow function to regular function