// ===== DESTRUCTURING ASSIGNMENT =====
// Destructuring can also assign to ALREADY-DECLARED variables
// (not just declarations). Parentheses are required for objects
// so the {} isn't mistaken for a block.

// Destructuring in declaration
let { a, b } = { a: 1, b: 2 };

// Destructuring assignment to EXISTING variables
// Parentheses around the whole expression are REQUIRED
let x = 10, y = 20;
({ x, y } = { x: 100, y: 200 });
console.log(x, y); // 100 200

// Swap variables without a temp variable
// Array destructuring makes this a one-liner
let p = "hello", q = "world";
[p, q] = [q, p];
console.log(p, q); // "world" "hello"

// Destructuring in for...of loops — unpack each pair automatically
const pairs = [["a", 1], ["b", 2]];
for (const [key, val] of pairs) {
  console.log(key + " = " + val);
}
// "a = 1"
// "b = 2"
