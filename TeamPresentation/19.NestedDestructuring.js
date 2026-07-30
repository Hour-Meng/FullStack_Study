// ===== NESTED DESTRUCTURING =====
// Destructuring mirrors the shape of the data structure,
// making it possible to extract deeply nested values in one line.

const response = {
  status: 200,
  data: {
    user: {
      id: 1,
      profile: {
        name: "Alice",
        address: { city: "NYC", zip: "10001" }
      }
    }
  }
};

// Flatten a deeply nested structure — the destructuring pattern
// looks exactly like the object shape, but with variables on the left
const {
  status,                         // top-level: response.status
  data: {                         // drill into response.data
    user: {                       // drill into response.data.user
      profile: { name,            // response.data.user.profile.name
        address: { city, zip }    // response.data.user.profile.address.city
      }
    }
  }
} = response;

console.log(name, city, zip); // "Alice" "NYC" "10001"

// Nested array + object mixing — array of objects
const users = [
  { name: "Bob", scores: [90, 85] }
];
// First destructure the array ([]), then the object ({}), then scores ([])
const [{ name: n1, scores: [s1] }] = users;
console.log(n1, s1); // "Bob" 90
