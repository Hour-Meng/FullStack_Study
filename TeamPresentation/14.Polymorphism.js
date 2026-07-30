// ===== POLYMORPHISM =====
// Polymorphism ("many forms") means different objects respond to
// the same method call in their own way. Code written against a
// shared interface works with any implementation.

class PaymentProcessor {
  // Base method — acts as a contract; subclasses MUST override it
  process(amount) { throw new Error("Not implemented"); }
}

class StripeProcessor extends PaymentProcessor {
  process(amount) {
    console.log("Stripe: Charging $" + amount);
  }
}

class PaypalProcessor extends PaymentProcessor {
  process(amount) {
    console.log("PayPal: Sending $" + amount);
  }
}

// Same interface (process()), different behavior per type
const processors = [
  new StripeProcessor(),
  new PaypalProcessor()
];

// We don't care which concrete class each object is —
// we just call .process() and each does its own thing
processors.forEach(function(p) {
  p.process(99.99);
});
// Stripe: Charging $99.99
// PayPal: Sending $99.99
