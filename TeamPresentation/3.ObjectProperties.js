const user = {
  firstName: "John",
  lastName: "Doe",
  "favorite-color": "blue"  // key with hyphen
};

// Dot notation
console.log(user.firstName); // "John"

// Bracket notation (required for special keys)
console.log(user["favorite-color"]); // "blue"

// Dynamic property access
const key = "lastName";
console.log(user[key]); // "Doe"

// Check if property exists
console.log("age" in user);                  // false
console.log(user.hasOwnProperty("firstName")); // true