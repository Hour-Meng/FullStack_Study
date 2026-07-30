const calculator = {
  value: 0,

  add(n) {
    this.value += n;
    return this;  // enable chaining
  },

  subtract(n) {
    this.value -= n;
    return this;
  },

  getResult() {
    return this.value;
  },


  my_add(a, b) {
    this.value = a + b;

    return this.value;
  }

};

// Method chaining
calculator.add(10).add(5).subtract(3);
console.log(calculator.getResult()); // 12

console.log(calculator.my_add(20,10));