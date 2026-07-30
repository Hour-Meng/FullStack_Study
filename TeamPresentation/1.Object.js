// Creating an object using literal syntax
const person = {
  name: "Alice",
  age: 30,
  isEmployed: true
};

// Accessing properties
dot:  console.log(person.name);     // "Alice"
bracket: console.log(person["age"]);   // 30

// Adding a new property
person.city = "New York";

// Deleting a property
delete person.isEmployed;

console.log(person);
// { name: "Alice", age: 30, city: "New York" }