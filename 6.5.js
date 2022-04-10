const fillArr = new Array(100).fill("as");

const newArr = Array.from(fillArr.keys(), x => x + 1);
// console.log(newArr);

const obj = {name: "john", age: 24, height: 123};
const objValues = Object.values(obj);
// console.log(objValues);

const obj1 = Object.assign({}, newArr);
const obj2 = {...newArr};
// console.log(obj1);
// console.log(obj2);

console.log(Array.isArray(newArr));

const noMod = newArr.slice();
noMod.push("asd");
// console.log(noMod);
// console.log(newArr);

const copy = newArr;
copy.push("asd");
// console.log(copy);
// console.log(newArr);

