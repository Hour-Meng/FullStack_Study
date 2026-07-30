// ===== INHERITANCE =====
// Inheritance lets a child class reuse and extend a parent class.
// "extends" establishes an "is-a" relationship. The child must
// call super() before accessing "this" in its constructor.

class Shape {
  constructor(color) {
    this.color = color;
  }

  describe() {
    return "A " + this.color + " shape";
  }
}

// Circle "is a" Shape — inherits color and describe()
class Circle extends Shape {
  constructor(color, radius) {
    super(color); // Must call super() first — sets this.color
    this.radius = radius;
  }

  // New method specific to Circle
  area() {
    return Math.PI * this.radius ** 2;
  }

  // Override parent's describe() with an extended version
  describe() {
    return super.describe() + " (r=" + this.radius + ")";
  }
}

const c = new Circle("red", 5);
console.log(c.describe()); // "A red shape (r=5)"  — calls overridden method
console.log(c.area());       // 78.5398...        — calls Circle-specific method
