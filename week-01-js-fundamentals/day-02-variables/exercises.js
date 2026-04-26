// =============================================================================
// Day 2 — Variables, Types, Operators
// =============================================================================
// Run with:  node week-01-js-fundamentals/day-02-variables/exercises.js
// Do every exercise. Use console.log() to print results so you can see them.
// =============================================================================

// -----------------------------------------------------------------------------
// EXERCISE 1 — Declarations
// Declare three variables: a constant `PI` set to 3.14, a let `radius` set
// to 5, and another let `area`. Calculate area of a circle (PI * radius * radius)
// and assign it to `area`. Log all three.
// -----------------------------------------------------------------------------

const PI = 3.14;

let radius = 5;

let area;

area = PI * radius * radius;

console.log(PI, radius, area);

// -----------------------------------------------------------------------------
// EXERCISE 2 — String concatenation vs template literals
// Create variables: firstName = "Viktor", age = 25.
// Print: "Hello, my name is Viktor and I am 25 years old."
// Do it TWO ways:
//   (a) using +  concatenation
//   (b) using template literals (backticks `` and ${...})
// -----------------------------------------------------------------------------

const firstName = "Viktor";
const age = 25;

console.log(
  "Hello my name is " + firstName + " and I am " + age + " years old",
);
console.log(`Hello my name is ${firstName} and I am ${age} years old`);

// -----------------------------------------------------------------------------
// EXERCISE 3 — typeof challenge
// For each of the following, predict the typeof result BEFORE running.
// Then log them with console.log(typeof X) and check.
//   1) 42
//   2) "hello"
//   3) true
//   4) null            <-- this one is famous
//   5) undefined
//   6) []              <-- surprising
//   7) {}
//   8) function(){}
// Write your prediction in a comment next to each line.
// -----------------------------------------------------------------------------

// your code here
console.log(typeof 42);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});

// -----------------------------------------------------------------------------
// EXERCISE 4 — Number weirdness
// Log all of these. Don't fix anything — just observe.
//   - 0.1 + 0.2
//   - 0.1 + 0.2 === 0.3
//   - 1 / 0
//   - "5" * 2
//   - "5" + 2
//   - true + true
//   - "10" - 5
// In a comment under each line, write what surprised you.
// -----------------------------------------------------------------------------

// your code here
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(1 / 0);
console.log("5" * 2);
console.log("5" + 2);
console.log(true + true);
console.log("10" - 5);

// -----------------------------------------------------------------------------
// EXERCISE 5 — Comparison ==  vs  ===
// Predict (in comments), then log:
//   - 1 == "1"
//   - 1 === "1"
//   - null == undefined
//   - null === undefined
//   - 0 == false
//   - 0 === false
// In one sentence in a comment: when should I use === ?
// -----------------------------------------------------------------------------

// your code here

/* 1: true
   2: false
   3: true 
   4: false
   5: true
   6: false


   i use === always, == always convert types before  compare, === compare value without convert
   */

console.log(1 == "1");
console.log(1 === "1");
console.log(null == undefined);
console.log(null === undefined);
console.log(0 == false);
console.log(0 === false);

// -----------------------------------------------------------------------------
// EXERCISE 6 — Reassignment rules
// Try to do all of these and watch what errors. Comment out the ones that
// throw an error so the file still runs to the end.
//   const x = 10;
//   x = 20;            // does this work?
//   let y = 10;
//   y = 20;            // does this work?
//   const arr = [1, 2];
//   arr.push(3);       // does this work? (tricky! const + mutating method)
//   arr = [4, 5, 6];   // does this work?
// In a comment at the end: what does `const` actually protect?
// -----------------------------------------------------------------------------

// your code here

/* x = 20 it's not work

y= 20 it work

arr.push(3) work good

arr= [4,5,6] it's not working

const protects the binding (the variable can't be reassigned to point to something else), but it does NOT protect the contents. You can still mutate an object or array stored in a const variable."
*/

// -----------------------------------------------------------------------------
// EXERCISE 7 — Practical mini-task
// Imagine a shop: price = 199.99, vatRate = 0.20 (20% VAT), quantity = 3.
// Compute and log:
//   - subtotal (price * quantity)
//   - vat amount (subtotal * vatRate)
//   - total (subtotal + vat)
// Format the total nicely:  "Total: $599.97" using a template literal.
// HINT: use .toFixed(2) on the number to round to 2 decimal places.
// -----------------------------------------------------------------------------

// your code here

const price = 199.99;
const vatRate = 0.2;
const quantity = 3;

const subtotal = price * quantity;
const vatAmount = subtotal * vatRate;
const total = subtotal + vatAmount;

console.log(`Total: $${total.toFixed(2)}`);

// -----------------------------------------------------------------------------
// EXERCISE 8 — Type coercion bug fix
// This function is supposed to add two numbers, but it returns a string when
// given strings. Fix it so it ALWAYS returns a number, even if input is "5".
// HINT: Number(x) or +x converts a string to a number.
// -----------------------------------------------------------------------------

function addTwo(a, b) {
  return Number(a) + Number(b); // "5" + "10" returns "510" (string concat). Fix it!
}

// Tests — these should both pass when fixed
console.log(addTwo(5, 10)); // expect: 15
console.log(addTwo("5", "10")); // expect: 15
console.log(addTwo("5", 10)); // expect: 15
