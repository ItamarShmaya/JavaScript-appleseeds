const arr = [1,2,3,4,5,6,7,8,9,10];

// 1.
function doubleValues(arr) {
  return arr.map(x => x * 2)
}

// console.log(doubleValues(arr));

// 2.

function onlyEvenValues(arr) {
  const newArr = [];
  arr.forEach(x => {
    if(x % 2 === 0) {
      newArr.push(x);
    }
  });
  return newArr;
}

// console.log(onlyEvenValues(arr));

// 3.

function showFirstAndLast(arr) {
  const placeHolderArr = [];
  const firstAndLast = [];
  arr.forEach(x => {
    if(typeof x === "string") {
      placeHolderArr.push(x);
    }
  })
  firstAndLast.push(placeHolderArr[0]);
  firstAndLast.push(placeHolderArr[placeHolderArr.length-1]);
  return firstAndLast;
}

const array = ["asd", 12, "ASDXXC", "123sa", 43]
// console.log(showFirstAndLast(array));

// 4.

function vowelCount(str) {
  str = str.toLowerCase();
  const stringArray = str.split("");
  const vowels = {};
  stringArray.forEach(letter => {
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
      if(vowels[letter] > 0) {
        vowels[letter]++;
      } else {
        vowels[letter] = 1;
      } 
    }
  })
  return vowels;
}

// console.log(vowelCount("xxmczposdi aposeqwiszc zxcasdy"));

// 5.

function capitalize(str) {
  let strArr = str.split(" ").map(word => {
    return word = word[0].toUpperCase() + word.slice(1);
  })
  return strArr.join(" ");
}

// console.log(capitalize("asda asasds"));

// 6.

function shiftLetters(str) {
  const regex = /^[a-zA-Z]+$/;
  let result = "";
  if(regex.test(str)) {
    str = str.toLowerCase();
    const stringArray = str.split("");
    stringArray.forEach(letter => {
      if(letter === "a") {
        charcode = 122;
      } else {
        charcode = (letter.charCodeAt()) - 1;
      }
      result += String.fromCharCode(charcode);
    })
  } else {
    return "Invalid string";
  }
  return result;
}

console.log(shiftLetters("AGDSLD"));

// 7.

function swapCase(str) {
  let strArr = str.split(" ").map((word, index) => {
    if(index % 2 === 1) {
      word = word[0].toUpperCase() + word.slice(1);
    }
    return word;
  })
  return strArr.join(" ");
}

// console.log(swapCase("asdasd asdas dasdasdasdas d asd as dasd asd asdas"));