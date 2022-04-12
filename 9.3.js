const food = ["Noodle", "Pasta", "Ice-cream", "Meat", 
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", 
"Hamburgers"];

// const food = [1, 2, 3, 4];
// const food1 = [5, 6, 7, 8];

function compare(arr1, arr2) {
  const sameItems = [];
  for(let itemOfArr1 of arr1) {
    for(let itemOfArr2 of arr2) {
      if(itemOfArr1 === itemOfArr2)
        sameItems.push(itemOfArr1);
    }
  }
  return (sameItems[0] === undefined) ? false : sameItems;
}

console.log(compare(food, food1));