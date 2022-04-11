const obj = {
  a: 1,
  b: 2,
  c: 3
}

function swapper(obj) {
  const swappedObj = {};
  const keys = Object.keys(obj);
  let i = 0
  for(let key in obj) {
      swappedObj[obj[key]] = keys[i];
      i++;
  }
  return swappedObj;
}

console.log(obj);
console.log(swapper(obj));