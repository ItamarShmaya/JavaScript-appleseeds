const { get } = require("browser-sync");

const candyStore = {
  candies: [
  {
  name: "mint gum",
  id: "as12f",
  price: 2,
  amount: 2
  },
  {
  name: "twix",
  id: "5hd7y",
  price: 5,
  amount: 4
  },
  ],
  cashRegister: 200
 }

//  1.

 function getCandy(candyStore, id){ 
   for(let candy of candyStore.candies) {
     if(candy.id === id) {
       return candy;
     } 
   }
  }

  // console.log(getCandy(candyStore, "as12f"));

  // 2.

  function getPrice(candyStore, id){ 
    for(let candy of candyStore.candies) {
      if(candy.id === id) {
        return candy.price;
      }
    } 
  } 

  // console.log(getPrice(candyStore, "5hd7y"));

  // 3.

  function addCandy(candyStore, id, name, price, amount = 1){
    const obj = {};
    obj.name = name;
    obj.id = id;
    obj.price = price;
    obj.amount = amount;
    candyStore.candies.push(obj);
  }

  addCandy(candyStore, "as241", "Shuli", 4)
  // console.log(candyStore);

  // 4.

  function buy(candyStore, id){
    const candy = getCandy(candyStore, id);
    const price = getPrice(candyStore, id);
    candy.amount--;
    candyStore.cashRegister -= price;
  }
  
  buy(candyStore, "5hd7y");
  console.log(candyStore);