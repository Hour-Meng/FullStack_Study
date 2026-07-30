// ===== ABSTRACTION =====
// Abstraction hides complex details and exposes only essentials.
// JS has no native "abstract" keyword, so we simulate it by
// throwing errors in methods the child class MUST override.

class Database {
  constructor(url) {
    // new.target === Database means someone tried to call
    // "new Database()" directly — which is forbidden for an abstract class
    if (new.target === Database) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.url = url;
  }

  // Abstract methods — will throw if child doesn't override them
  connect() {
    throw new Error("Method 'connect' must be implemented");
  }

  query(sql) {
    throw new Error("Method 'query' must be implemented");
  }
}

// PostgresDB provides concrete implementations of the abstract methods
class PostgresDB extends Database {
  connect() { console.log("Connected to " + this.url); }
  query(sql) { console.log("Executing: " + sql); }
}

const db = new PostgresDB("localhost:5432");
db.connect(); // "Connected to localhost:5432"

// const bad = new Database("bad");  // Would throw — abstract class
