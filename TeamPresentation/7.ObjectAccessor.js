class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter — accessed like a property
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  // Setter — assigned like a property
  set fullName(value) {
    var parts = value.split(" ");
    console.log(parts);
    this.firstName = parts[0];
    this.lastName = parts.slice(1).join(" ");

    "John Jane Doe"
    ["John", "Jane", "Doe"]
  }
}

const user = new User("John", "Doe");
console.log(user.fullName); // "John Doe" (getter)

user.fullName = "Jane Smith";  // (setter)
console.log(user.firstName);   // "Jane"