// ===== PROXIES =====
// A Proxy wraps an object and intercepts operations (reads, writes,
// etc.) via "trap" functions. Useful for validation, logging,
// and reactive data (Vue 3 uses Proxies under the hood).

// Create a handler object with traps (interceptor functions)
var handler = {
  // Trap: property read — fires every time a property is accessed
  get: function(target, prop) {
    console.log("Accessing: " + String(prop));
    return Reflect.get(target, prop);  // Reflect passes through to the original
  },

  // Trap: property write — fires on every assignment
  set: function(target, prop, value) {
    if (typeof value === "number" && value < 0) {
      throw new Error("No negative values allowed");
    }
    return Reflect.set(target, prop, value);  // apply the write
  }
};

var data = { score: 0, level: 1 };
var proxy = new Proxy(data, handler);  // Wrap data with the handler

proxy.score = 100;  // Logs: "Accessing: score"  then sets to 100
proxy.score = -5;   // Throws: Error: No negative values allowed
