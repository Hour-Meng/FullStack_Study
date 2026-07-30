// ===== OPTIONAL CHAINING =====
// The ?. operator safely accesses nested properties. If any
// link in the chain is null/undefined, it short-circuits and
// returns undefined — no more "Cannot read property of null".

const user = {
  name: "Alice",
  address: {
    street: "123 Main St"
    // No "city" property
  }
};

// Without optional chaining — verbose && checks at every level
const city = user && user.address && user.address.city;

// With optional chaining — clean and safe
// If user.address were null, it would return undefined instead of throwing
const city2 = user?.address?.city;
console.log(city2); // undefined (no error!)

// Optional method call — only calls if the property is a function
const result = user.getName?.(); // undefined (getName doesn't exist, no error)

// Optional dynamic property access — works with bracket notation too
const key = "name";
console.log(user?.[key]); // "Alice"

// With nullish coalescing (??) for defaults — uses default only for
// null/undefined, NOT for other falsy values like 0 or ""
const cityName = user?.address?.city ?? "Unknown";
console.log(cityName); // "Unknown"
