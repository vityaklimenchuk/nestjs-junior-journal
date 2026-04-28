// =============================================================================
// Day 4 — Array methods (map, filter, reduce, find, some, every)
// =============================================================================
// Run with:  node week-01-js-fundamentals/day-04-arrays/exercises.js
// =============================================================================

// Test data — use these arrays in the exercises below
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const users = [
  { id: 1, name: "Alice", age: 28, role: "admin", active: true },
  { id: 2, name: "Bob", age: 17, role: "user", active: true },
  { id: 3, name: "Charlie", age: 34, role: "user", active: false },
  { id: 4, name: "Diana", age: 22, role: "moderator", active: true },
  { id: 5, name: "Eve", age: 45, role: "user", active: true },
];

// -----------------------------------------------------------------------------
// EXERCISE 1 — forEach vs map
// (a) Use forEach to print each number from `numbers`.
// (b) Use map to create a NEW array where each number is doubled.
// Log both results.
// -----------------------------------------------------------------------------

numbers.forEach(function (n, index) {
  console.log(n);
});
const newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers);

// -----------------------------------------------------------------------------
// EXERCISE 2 — map: extract names
// Get an array of just the names from `users`: ["Alice", "Bob", ...].
// HINT: users.map(user => ...)
// -----------------------------------------------------------------------------

const usersNames = users.map((user) => user.name);
console.log(usersNames);

// -----------------------------------------------------------------------------
// EXERCISE 3 — filter: only adults
// Get an array of users whose age is 18 or older.
// Log how many adults there are.
// -----------------------------------------------------------------------------

const checkAge = users.filter((user) => user.age >= 18);
console.log(checkAge);

// -----------------------------------------------------------------------------
// EXERCISE 4 — filter + map (chaining)
// Get an array of NAMES of users who are active AND adults.
// Expected result: ["Alice", "Diana", "Eve"]
// HINT: chain .filter(...).map(...)
// -----------------------------------------------------------------------------

const activeAndAdultsUsers = users
  .filter((user) => user.active === true && user.age >= 18)
  .map((user) => user.name);

console.log(activeAndAdultsUsers);

// -----------------------------------------------------------------------------
// EXERCISE 5 — find vs filter
// (a) Use find to get the FIRST user with role === "admin"
// (b) Use filter to get ALL users with role === "user"
// What's the difference in what they return?
// -----------------------------------------------------------------------------

const findFristAdmin = users.find((user) => user.role === "admin");
const allUsers = users.filter((user) => user.role === "user");

console.log(findFristAdmin);
console.log(allUsers);

// -----------------------------------------------------------------------------
// EXERCISE 6 — some / every
// (a) Use `some` to check: is there at least one inactive user?
// (b) Use `every` to check: are all users adults (>=18)?
// Log both results (true/false).
// -----------------------------------------------------------------------------

const isInactiveUser = users.some((user) => !user.active);
const areAllUsers = users.every((user) => user.age >= 18);

console.log(isInactiveUser);
console.log(areAllUsers);

// -----------------------------------------------------------------------------
// EXERCISE 7 — reduce: sum
// Use reduce to calculate the sum of all numbers in `numbers`.
// Expected: 55
//
// HINT:
//   numbers.reduce((accumulator, currentValue) => ..., 0);
//
//   - accumulator: the running total (starts at 0)
//   - currentValue: the current element being processed
//   - 0: initial value of the accumulator
// -----------------------------------------------------------------------------

const sumNumbers = numbers.reduce((sum, count) => sum + count, 0);
console.log(sumNumbers);

// -----------------------------------------------------------------------------
// EXERCISE 8 — reduce: count by role
// Use reduce to build an object like:
//   { admin: 1, user: 3, moderator: 1 }
// where the number is how many users have that role.
//
// HINT:
//   users.reduce((acc, user) => {
//     // increment acc[user.role] by 1
//     return acc;
//   }, {});  <-- start with empty object
// -----------------------------------------------------------------------------

const reduceUsers = users.reduce((acc, user) => {
  acc[user.role] = (acc[user.role] || 0) + 1;
  return acc;
}, {});
console.log(reduceUsers);

// -----------------------------------------------------------------------------
// EXERCISE 9 — practical chain
// Get the SUM of ages of all active adult users.
// Expected: 28 (Alice) + 22 (Diana) + 45 (Eve) = 95
// HINT: filter -> map (extract age) -> reduce (sum)
// -----------------------------------------------------------------------------

const sumOfAllActive = users
  .filter((user) => user.active === true && user.age >= 18)
  .map((user) => user.age)
  .reduce((sum, age) => sum + age, 0);

console.log(sumOfAllActive);

// -----------------------------------------------------------------------------
// EXERCISE 10 — write your own .map()
// Implement a function `myMap(arr, callback)` that does the same as Array.map
// without using .map itself. Use a regular for-loop.
//
// Test:
//   myMap([1, 2, 3], x => x * 10)  ->  [10, 20, 30]
//
// This shows you UNDERSTAND map, not just memorize the name.
// -----------------------------------------------------------------------------

function myMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const transformedValue = callback(arr[i], i, arr);

    result.push(transformedValue);
  }
  return result;
}

const output = myMap([1, 2, 3], (x) => x * 10);
console.log(output);
