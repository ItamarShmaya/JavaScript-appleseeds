const people = ["Greg", "Mary", "Devon", "James"];

// for(person of people) {
//   console.log(person);
// }

// people.shift();

// people.pop();

// people.unshift("Matt");

// people.push("Itamar");

for(person of people) {
  console.log(person);
  if(person.toLowerCase() === "mary") 
    break;
}
console.log(people);
const diffPeople = people.slice(2)
console.log(diffPeople);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

const withBob = people + "Bob";
console.log(withBob);