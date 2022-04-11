const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const obj = {};
function whatever(arr) {
  for(let word of arr) {
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i++) {
      let letter = word[i];
      (obj[letter] > 0) ? obj[letter]++ : (letter !== " ") ? obj[letter] = 1 : null;
    }
  }
}
whatever(array);
console.log(obj);
