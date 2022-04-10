const arr = ["asdas", "asdasdasd", "asa", "asdasdxz"]

function stringsLength(arr) {
  let newArr = [];
  let i;
  for (i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].length;
  }
  return newArr;
}

console.log(stringsLength(arr));