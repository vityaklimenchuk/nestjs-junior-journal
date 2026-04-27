// =============================================================================
// Day 3 — Functions, Scope, Hoisting
// =============================================================================
// Run with:  node week-01-js-fundamentals/day-03-functions/exercises.js
// =============================================================================

// -----------------------------------------------------------------------------
// EXERCISE 1 — Three ways to define a function
// Write the SAME function `square(n) -> n*n` in three styles:
//   (a) function declaration
//   (b) function expression (assigned to a const)
//   (c) arrow function (assigned to a const)
// Test all three: console.log(squareA(4), squareB(4), squareC(4));
// -----------------------------------------------------------------------------

function squareA(n) {
  return n * n;
} // declaration
const squareB = function (n) {
  return n * n;
}; // expression
const squareC = (n) => n * n; // arrow

console.log(squareA(4), squareB(4), squareC(4)); // 16 16 16
console.log(squareA(7), squareB(10), squareC(0));
// -----------------------------------------------------------------------------
// EXERCISE 2 — Default parameters
// Write a function `greet(name, greeting)` that returns a greeting string.
// `greeting` should default to "Hello" if not provided.
// greet("Viktor")           -> "Hello, Viktor!"
// greet("Viktor", "Hi")     -> "Hi, Viktor!"
// -----------------------------------------------------------------------------

function greet(name, greeting) {
  if (greeting === undefined) {
    greeting = "Hello, ";
  }

  return greeting + "," + name;
}

console.log(greet("Viktor", "Hi, "));
console.log(greet("Viktor"));

// -----------------------------------------------------------------------------
// EXERCISE 3 — Return vs print
// Write a function `add(a, b)` that RETURNS the sum (does NOT console.log inside).
// Then console.log the result of calling it.
// Why? Because functions that print are useless to other functions.
// -----------------------------------------------------------------------------

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

// -----------------------------------------------------------------------------
// EXERCISE 4 — No return = ?
// Write a function `sayHi()` that just does console.log("Hi") and has no return.
// Capture its return value: const result = sayHi();
// Log `result`. What is it?  (Predict in a comment first)
// -----------------------------------------------------------------------------

// Prediction: function returns undefined (no return statement)

function sayHi() {
  console.log("Hi");
}

const result = sayHi();
console.log(result); // undefined
console.log(typeof result); // "undefined"

// -----------------------------------------------------------------------------
// EXERCISE 5 — Scope challenge
// Predict the output of this code BEFORE running. Write your prediction in a
// comment. Then run and see if you were right.
//
//   let x = 10;
//   function changeX() {
//     x = 99;            // does this affect outer x?
//     let y = 5;         // is y visible outside?
//   }
//   changeX();
//   console.log(x);
//   console.log(typeof y);   // hint: typeof on undeclared returns "undefined" without throwing
// -----------------------------------------------------------------------------
// Yes, this affect outer to x
// No y is not visible outside
let x = 10;
function changeX() {
  x = 99; // does this affect outer x?
  let y = 5; // is y visible outside?
}
changeX();
console.log(x);
console.log(typeof y);

// -----------------------------------------------------------------------------
// EXERCISE 6 — Block scope (let vs var)
// Predict the output. Then run.
//
//   if (true) {
//     let a = 1;
//     var b = 2;
//   }
//   console.log(typeof a);   // ?
//   console.log(typeof b);   // ?
//
// Why are they different? Answer in a comment.

// let is blocked in if it's block scope, but var is function scope and it can see cycle if
// -----------------------------------------------------------------------------

if (true) {
  let a = 1;
  var b = 2;
}
console.log(typeof a); // ?
console.log(typeof b); // ?

// -----------------------------------------------------------------------------
// EXERCISE 7 — Hoisting puzzle
// Predict the output BEFORE running. Then run.
//
//   sayHello();   // does this work?
//   function sayHello() { console.log("Hello!"); }
//
//   sayBye();     // does this work?
//   const sayBye = function () { console.log("Bye!"); };
//
// In a comment: explain WHY one works and the other doesn't.
// (HINT: function declarations are hoisted; function expressions are not)
// -----------------------------------------------------------------------------

// The first one works because function declarations are hoisted fully.
// The second fails because const sayBye is in the Temporal Dead Zone
// until line 154 — only the name is hoisted, not the value.

sayHello(); // ✅ works thanks to hoisting
function sayHello() {
  console.log("Hello!");
}

try {
  sayBye(); // ❌ ReferenceError — function expressions are not hoisted
} catch (e) {
  console.log("Error caught:", e.message);
}

const sayBye = function () {
  console.log("Bye!");
};

// -----------------------------------------------------------------------------
// EXERCISE 8 — Pure function challenge
// A "pure function" returns the same output for the same input AND has no
// side effects. Write a pure `double(arr)` that returns a NEW array with each
// element multiplied by 2 — without mutating the original.
//
// Test:
//   const original = [1, 2, 3];
//   const doubled = double(original);
//   console.log(doubled);    // [2, 4, 6]
//   console.log(original);   // still [1, 2, 3] — NOT mutated!
//
// HINT: use .map()  (we'll learn it tomorrow but try it!)
// -----------------------------------------------------------------------------

function double(arr) {
  return arr.map((x) => x * 2);
}
const original = [1, 2, 3];
const doubled = double(original);

console.log(original);
console.log(doubled);

// -----------------------------------------------------------------------------
// EXERCISE 9 — Rest parameters
// Write a function `sum(...numbers)` that takes any number of arguments and
// returns their sum.
//
// Test:
//   sum(1)              -> 1
//   sum(1, 2, 3)        -> 6
//   sum()               -> 0
//   sum(1, 2, 3, 4, 5)  -> 15
//
// HINT: ...numbers collects all arguments into an array.
// -----------------------------------------------------------------------------

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0); // ✅ ПОВЕРТАЄМО число
}

console.log(sum(1, 2, 3)); // 6   ← console.log зовні
console.log(sum() + 100); // 100 ← тепер можна використати в виразах!
const totalCost = sum(10, 20, 30);

// -----------------------------------------------------------------------------
// EXERCISE 10 — Real-world function
// Write `formatPrice(amount, currency)` that returns a nicely formatted string.
//   formatPrice(1999.5)         -> "$1999.50"
//   formatPrice(1999.5, "EUR")  -> "EUR 1999.50"
//   formatPrice(0)              -> "$0.00"
//
// Default currency = "$".
// HINT: .toFixed(2) for 2 decimals.
// -----------------------------------------------------------------------------

function formatPrice(amount, currency) {
  if (currency === undefined) {
    currency = "$";
  }
  return currency + amount.toFixed(2);
}
console.log(formatPrice(1999.5));
console.log(formatPrice(1999.5, "EUR "));
console.log(formatPrice(0));
