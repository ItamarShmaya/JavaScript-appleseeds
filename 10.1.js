// 1.

function isString(str, func) {
  if(typeof str === "string")
    func(str);
}

function logString(str) {
  console.log(str);
}

// isString("wassuuuuuuuuuup", logString);

// 2.

function firstWordUpperCase(str, func) {
  let wordArr = str.split(" ");
  wordArr[0] = wordArr[0].toUpperCase(); 
  str = wordArr.join();
  return func(str);

}

function dash(str) {
  return str.replaceAll(",", "-");
}

// console.log(firstWordUpperCase("asdasda sdasd asdas dasd asd asd as das", dash));

// 3.

function star(str) {
  return str.replaceAll(",", "*");
}
// console.log(firstWordUpperCase("asdasda sdasd asdas dasd asd asd as das", star));

// 4.



function calculateArray(arr, operationFunc) {
  let total = arr[0];
  for(let i = 1; i < arr.length; i++) {
    total = operationFunc(total, arr[i]);
  }
  return total;
}

console.log(calculateArray([4,7,2,8,9,23,34,99], subtract));

function multiply(x, y) {
  return x * y;
}

function add(x, y) {
  return x + y;
}

function divide(x, y) {
  return x / y;
}

function subtract(x, y) {
  return x - y;
}