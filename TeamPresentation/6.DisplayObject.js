const person = { name: "Alice", age: 30 };

// String coercion — NOT useful for objects
console.log("" + person); // "[object Object]"

// Best: console.log (inspectable in devtools)
console.log(person); // { name: "Alice", age: 30 }

// JSON.stringify — serializable snapshot
console.log(JSON.stringify(person));
// '{"name":"Alice","age":30}'

// Pretty-printed JSON
// value, replacer, space
console.log(JSON.stringify(person, null, 2));
// {
//   "name": "Alice",
//   "age": 30
// }

// Object.entries — iterate key-value pairs
Object.entries(person).forEach(function(pair) {
  console.log(pair[0] + ": " + pair[1]);
});
