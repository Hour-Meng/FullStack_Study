// ===== DESTRUCTURING =====
// Destructuring unpacks values from objects or arrays into
// distinct variables, making code cleaner and more concise.

const user = { name: "Alice", email: "a@b.com", age: 25 };

// Before destructuring — verbose, repetitive property access
const name = user.name;
const email = user.email;

// After destructuring — unpack in one line, rename with ":"
const { name: n, email: e } = user;
console.log(n, e); // "Alice" "a@b.com"

// Destructuring also works with arrays (positional, not by name)
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second); // "red" "green"

// Destructuring in function parameters — extract only what you need
function greet({ name, age }) {
  console.log(name + " is " + age + " years old");
}
greet(user); // "Alice is 25 years old"
