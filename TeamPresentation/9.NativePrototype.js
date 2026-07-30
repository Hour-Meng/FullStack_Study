// Built-in methods live on prototypes

// check whether map property exist
console.log([].hasOwnProperty("map"));       // false
console.log(Array.prototype.hasOwnProperty("map")); // true

// Extending native prototypes (use with caution!)
Array.prototype.last = function() {
  return this[this.length - 1];
};

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Now available on ALL instances
console.log([1, 2, 3].last());      // 3
console.log("hello".capitalize());   // "Hello"