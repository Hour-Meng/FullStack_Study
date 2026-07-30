function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

// Add methods to prototype (shared, memory-efficient)
Car.prototype.describe = function() {
  return this.year + " " + this.brand + " " + this.model;
};

Car.prototype.age = function() {
  return new Date().getFullYear() - this.year;
};

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.describe()); // "2020 Toyota Corolla"
console.log(myCar.age());       // 5 (depends on current year)