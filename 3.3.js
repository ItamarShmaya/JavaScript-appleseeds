function percentageOfWorld1 (population) {
  return population / 7900  * 100;
}

let china = percentageOfWorld1(1441);
let england = percentageOfWorld1(329.5);
let usa = percentageOfWorld1(55.98);

console.log(china.toFixed(2));
console.log(england.toFixed(2));
console.log(usa.toFixed(2));

const percentageOfWorld2 = population => population / 7900 * 100;

let china2 = percentageOfWorld1(1441);
let england2 = percentageOfWorld1(329.5);
let usa2 = percentageOfWorld1(55.98);

console.log(china2.toFixed(2));
console.log(england2.toFixed(2));
console.log(usa2.toFixed(2));