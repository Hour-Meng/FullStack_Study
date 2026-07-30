// ===== ES5 OBJECT METHODS =====
// ES5 added static helper methods on Object for common tasks:
// merging, listing keys/values, freezing, and safe comparisons.

const target = { a: 1 };
const source = { b: 2, c: 3 };

// Object.assign — merge objects into a new target (shallow copy)
// First arg is the target; later args are sources whose properties
// are copied into the target. Returns the target.
const merged = Object.assign({}, target, source);
console.log(merged); // { a: 1, b: 2, c: 3 }

// Object.keys / values / entries — get an array of an object's data
const obj = { x: 10, y: 20 };
console.log(Object.keys(obj));    // ["x", "y"]        — property names
console.log(Object.values(obj));  // [10, 20]          — property values
console.log(Object.entries(obj)); // [["x",10], ["y",20]] — [key, value] pairs

// Object.freeze — makes an object immutable (no add/delete/edit)
const frozen = Object.freeze({ a: 1 });
frozen.a = 99; // silently fails in sloppy mode, throws in strict mode
console.log(frozen.a); // 1  — unchanged because object is frozen

// Object.is — strict equality that handles NaN correctly
// Unlike ===, Object.is treats NaN as equal to itself
console.log(Object.is(NaN, NaN)); // true (NaN === NaN is false)
