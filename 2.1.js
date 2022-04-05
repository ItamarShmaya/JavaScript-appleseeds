function describeCountry (country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

let china = describeCountry("China", "1.402 billion", "Beijing");
let usa = describeCountry("USA", "329.5 million", "Washington, D.C.");
let england = describeCountry("Endland", "55.98 million", "London");

console.log(china);
console.log(usa);
console.log(england);