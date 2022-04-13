const { __esModule } = require("browser-sync/dist/utils");

const data = [
  {
  name: "John",
  birthday: "1-1-1995",
  favoriteFoods: {
  meats: ["hamburgers", "sausages"],
  fish: ["salmon", "pike"],
  },
  },
  {
  name: "Mark",
  birthday: "10-5-1980",
  favoriteFoods: {
  meats: ["hamburgers", "steak", "lamb"],
  fish: ["tuna", "salmon", "barracuda"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["ham", "chicken"],
  fish: ["pike"],
  },
  },
  {
  name: "Thomas",
  birthday: "1-10-1990",
  favoriteFoods: {
  meats: ["bird", "rooster"],
  fish: ["salmon"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["hamburgers", "lamb"],
  fish: ["anchovies", "tuna"],
  },
  },
 ];

//  1.

function names(arr) {
  const namesArr = arr.map(person => {
    return person.name;
  })
  return namesArr;
}

// console.log(names(data));

// 2.

function year(arr) {
  let birthdayArr;
  const before1990 = [];
  arr.forEach(person => {
    birthdayArr = person.birthday.split("-");
    if(birthdayArr[2] < 1990) {
       before1990.push(person);
    }
  })
  return before1990;
}

// console.log(year(data));

// 3.

function foods(arr) {
  const foodsObj = {};
  arr.forEach(person => {
    for(let food in person.favoriteFoods) {
      const foodList = person.favoriteFoods[food];
      for(let i = 0; i < foodList.length; i++) {
        let type = foodList[i];
        if(foodsObj[type] > 0) {
          foodsObj[type]++;
        } else {
          foodsObj[type] = 1;
        }
      }
    }
  })
  return foodsObj;
}

console.log(foods(data));