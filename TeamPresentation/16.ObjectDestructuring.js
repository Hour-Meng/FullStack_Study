// ===== OBJECT DESTRUCTURING =====
// Extract properties into variables with renaming, defaults,
// and rest patterns — all in one expression.

const config = {
  host: "localhost",
  port: 3000,
  debug: false
};

// Basic destructuring — variable name must match property name
const { host, port } = config;

// Rename with colon — "host" becomes "serverHost"
const { host: serverHost, port: serverPort } = config;
console.log(serverHost); // "localhost"

// Default values — "timeout" doesn't exist, so it gets 5000
const { host: h, timeout = 5000 } = config;
console.log(timeout); // 5000 (not in config, uses default)

// Combined: rename + default — "isDebug" gets config.debug (false)
const { debug: isDebug = true } = config;
console.log(isDebug); // false (value exists in config, default not used)

// Rest pattern — collects all remaining properties into a new object
const { host: ho, ...rest } = config;
console.log(rest); // { port: 3000, debug: false }
