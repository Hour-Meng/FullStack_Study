// ===== ARRAY DESTRUCTURING =====
// Array destructuring extracts elements by position (index),
// not by name. Commas skip elements, ... gathers the rest.

const scores = [95, 87, 72, 68, 91];

// Positional extraction — first, second, third elements
const [first, second, third] = scores;
console.log(first, third); // 95 72

// Skip elements with extra commas — just the 3rd element (index 2)
const [, , bronze] = scores;
console.log(bronze); // 72

// Rest element — collect everything after gold and silver
const [gold, silver, ...others] = scores;
console.log(gold, silver, others); // 95 87 [72, 68, 91]

// Default values — if there's no 6th element, f2 gets 0
const [a2, b2, c2, d2, e2, f2 = 0] = scores;
console.log(f2); // 0 (no 6th element)

// Practical: function returning multiple values as an array
function parseName(str) {
  const parts = str.split(" ");
  return [parts[0], parts.slice(1).join(" ")];
}
