// ===== MIXINS =====
// Mixins share functionality between unrelated classes WITHOUT
// inheritance. Object.assign copies methods from mixin objects
// onto the target's prototype, enabling multiple "inheritance".

// Mixin objects with reusable behavior
var Serializable = {
  toJSON: function() { return JSON.stringify(this); }
};

var Loggable = {
  log: function() {
    console.log("[" + this.constructor.name + "]", this);
  }
};

// A simple class — no reference to Serializable/Loggable
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Apply mixins via Object.assign on the prototype
// This copies toJSON and log methods onto User.prototype,
// making them available to all User instances
Object.assign(User.prototype, Serializable, Loggable);

const u = new User("Alice", "a@b.com");
u.log();             // [User] { name: "Alice", email: "a@b.com" }
console.log(u.toJSON()); // '{"name":"Alice","email":"a@b.com"}'
