// ===== GLOBAL OBJECT =====
// The global object provides variables and functions available
// everywhere. Which object it is depends on the environment:
//   - Browser:  window
//   - Node.js:  global
//   - Universal: globalThis (ES2020)

// Environment-specific global objects
console.log(typeof window);  // "object" in browser, "undefined" in Node
console.log(typeof global);  // "object" in Node, "undefined" in browser

// Universal access (ES2020) — works in ALL environments
console.log(globalThis); // Window / global / ...

// Common global properties
console.log(globalThis.NaN);       // NaN
console.log(globalThis.Infinity);  // Infinity
console.log(globalThis.undefined); // undefined

// Global functions — available without any prefix
setTimeout(function() { console.log("1s later"); }, 1000);
parseInt("42"); // 42

// Defining a truly global variable via globalThis
globalThis.myGlobal = "everywhere";
console.log(myGlobal); // "everywhere" — accessible without prefix
