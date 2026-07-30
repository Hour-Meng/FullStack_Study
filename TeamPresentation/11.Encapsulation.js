// ===== ENCAPSULATION =====
// Encapsulation hides internal state and only exposes a controlled
// interface. In modern JS, the # prefix creates true private fields
// that cannot be accessed from outside the class.

class BankAccount {
  #balance;  // Private field (ES2022) — only accessible inside the class

  constructor(initialBalance) {
    this.#balance = initialBalance;  // Set the private value
  }

  // deposit — validates then updates the private balance
  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid amount");
    this.#balance += amount;
  }

  // withdraw — checks sufficient funds before deducting
  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient funds");
    this.#balance -= amount;
  }

  // Getter exposes #balance as a read-only property (no setter)
  get balance() { return this.#balance; }
}

const acct = new BankAccount(100);
acct.deposit(50);
acct.withdraw(30);
console.log(acct.balance); // 120

// The next line would cause a SyntaxError — # fields are truly private
// acct.#balance; // SyntaxError — truly private
