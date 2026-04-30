// =============================================================================
// Day 5 — Objects: deep dive
// =============================================================================
// Run: node week-01-js-fundamentals/day-05-objects/exercises.js
// =============================================================================

const user = {
  id: 42,
  name: "Viktor",
  email: "viktor@example.com",
  address: {
    city: "Kyiv",
    country: "Ukraine",
    zip: "01001",
  },
  hobbies: ["coding", "reading"],
};
const key = "id";

// -----------------------------------------------------------------------------
// EXERCISE 1 — Property access (dot vs bracket)
// (a) Log user.name
// (b) Log user["email"]
// (c) Log user.address.city
// (d) Read property whose name is in a variable:
//     const key = "id";  →  log user[key]
// -----------------------------------------------------------------------------

console.log(user.name);
console.log(user["email"]);
console.log(user.address.city);
console.log(user[key]);

// -----------------------------------------------------------------------------
// EXERCISE 2 — Add / update / delete property
// (a) Add `age = 25` to user
// (b) Update name to "Viktor K."
// (c) Delete `email`
// (d) Log final user object
// -----------------------------------------------------------------------------

user.age = 25;
user.name = "Viktor K.";
delete user.email;
console.log(user);

// -----------------------------------------------------------------------------
// EXERCISE 3 — Destructuring basics
// Use destructuring to extract `name` and `id` from `user` into local variables.
// Then log them.
// -----------------------------------------------------------------------------

const { name, id } = user;

console.log(name, id);

// -----------------------------------------------------------------------------
// EXERCISE 4 — Destructuring with rename + default
// Destructure `name` (rename to `userName`) and `phone` (default = "no phone")
// from `user`. Then log both.
// HINT: const { name: userName, phone = "no phone" } = user;
// -----------------------------------------------------------------------------

const { name: userName, phone = "no phone" } = user;
console.log(userName, phone);

// -----------------------------------------------------------------------------
// EXERCISE 5 — Nested destructuring
// Extract `city` and `country` from user.address using destructuring.
// HINT: const { address: { city, country } } = user;
// -----------------------------------------------------------------------------

const {
  address: { city, country },
} = user;

console.log(city, country);

// -----------------------------------------------------------------------------
// EXERCISE 6 — Spread: copy + merge
// (a) Make a SHALLOW copy of user into `userCopy` using spread.
// (b) Make a NEW object `userWithRole` that merges user + { role: "admin" }
//     without mutating the original.
// (c) Log both, and confirm user is NOT mutated.
// -----------------------------------------------------------------------------

const userCopy = { ...user };

const userWithRole = { ...user, role: "admin" };

console.log("Original User:", user);
console.log("User Copy:", userCopy);
console.log("User with Role:", userWithRole);

console.log("Is original mutated?", user.role !== undefined);

// -----------------------------------------------------------------------------
// EXERCISE 7 — Optional chaining (?.)
// Given:
//   const a = { profile: { username: "a1" } };
//   const b = { /* no profile */ };
//
// (a) Try a.profile.username  → works
// (b) Try b.profile.username  → throws TypeError (Cannot read 'username' of undefined)
// (c) Use ?. to safely access:
//       a?.profile?.username   → "a1"
//       b?.profile?.username   → undefined (no error!)
// Log all 4 results.
// -----------------------------------------------------------------------------

const a = { profile: { username: "a1" } };
const b = {
  /* no profile */
};
try {
  console.log(a.profile.username);
  console.log(a?.profile?.username);
  console.log(b?.profile?.username);
} catch (e) {}

try {
  console.log(b.profile.username);
} catch (e) {
  console.log(e);
}

// -----------------------------------------------------------------------------
// EXERCISE 8 — Object.keys / values / entries
// Given:
//   const scores = { math: 90, english: 85, history: 78 };
//
// (a) Log all keys (use Object.keys)
// (b) Log all values (use Object.values)
// (c) Log all entries (use Object.entries)
// (d) Use Object.entries + .map to build:
//     ["math: 90", "english: 85", "history: 78"]
// -----------------------------------------------------------------------------

const scores = { math: 90, english: 85, history: 78 };

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));
console.log(
  Object.entries(scores).map(([subject, score]) => `${subject}: ${score}`),
);
