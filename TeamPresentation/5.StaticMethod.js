class MathUtils {
  static clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static mySubstract(a, b) {
    return a - b;
  }
}

// Called on the class, NOT on an instance
console.log(MathUtils.clamp(15, 0, 10));  // 10
console.log(MathUtils.randomInt(1, 6));   // e.g. 4

// Instance cannot access static methods
const m = new MathUtils();
m.clamp(5, 0, 10); // TypeError: m.clamp is not a function


console.log(MathUtils.mySubstract(10,20));

// For class you cannot access static method by creating an instance