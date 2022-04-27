/*
Instructions
You are given a function, Pokeman, that takes three parameters, 
pokemonName, pokemonType, an array of different pokemon attack methods, 
pokemonAttackList.
1. Create three instances of the Pokemon and save them in a variable.
2. Using prototype properties, add the following methods:
• A method called callPokemon that will print the following: “I choose 
you, <pokemon name>
• A method called attack that takes one parameter, an attack number, 
that will print the specific attack method from the pokemonAttackList 
array as the following: “<pokemon name> used <attack method>”
*/

function Pokemon(pokemonName, pokemonType, pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
  }

  Pokemon.prototype.callPokeman = function() {
    console.log(`I choose you ${this.name}`);
  }

  Pokemon.prototype.attack = function (n) {
    console.log(`${this.name} used ${this.attackList[n-1]}`);
  }

  const squirtle = new Pokemon("Squirtle", "Water", ["Bubble", "Aqua Jet", "Water Pulse"]);
  const charmander = new Pokemon("Charmander", "Fire", ["Ember", "Flamethrower", "Flame Burst"]);
  const bulbasaur  = new Pokemon("Bulbasaur ", "Grass", ["Vine Whip", "Seed Bomb", "Power Whip"]);


  // squirtle.callPokeman();
  // squirtle.attack(1);
  // charmander.callPokeman();
  // charmander.attack(2);
  // bulbasaur.callPokeman();
  // bulbasaur.attack(3);