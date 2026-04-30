// =============================================================================
// Day 6 — Loops & control flow
// =============================================================================
// Run: node week-01-js-fundamentals/day-06-loops/exercises.js
// =============================================================================

// -----------------------------------------------------------------------------
// EXERCISE 1 — for loop basics
// Use a classic `for` loop to print numbers 1 to 10.
// -----------------------------------------------------------------------------

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// -----------------------------------------------------------------------------
// EXERCISE 2 — while loop
// Use a `while` loop to count down from 5 to 1.
// -----------------------------------------------------------------------------
let i = 5;
while (i > 0) {
  console.log(i);
  i--;
}

// -----------------------------------------------------------------------------
// EXERCISE 3 — for...of (iterate array)
// Given:
//   const fruits = ["apple", "banana", "cherry"];
// Use `for...of` to log each fruit.
// -----------------------------------------------------------------------------

const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

// -----------------------------------------------------------------------------
// EXERCISE 4 — for...in (iterate object)
// Given:
//   const car = { brand: "Tesla", model: "Y", year: 2024 };
// Use `for...in` to log each "key: value" pair.
// Expected output:
//   "brand: Tesla"
//   "model: Y"
//   "year: 2024"
// -----------------------------------------------------------------------------
const car = { brand: "Tesla", model: "Y", year: 2024 };

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

// -----------------------------------------------------------------------------
// EXERCISE 5 — break + continue
// Given:
//   const nums = [3, 7, 11, 4, 9, 13, 2, 18, 5];
// Loop through nums and:
//   - Use `continue` to skip ODD numbers
//   - Use `break` to stop the loop the moment you find a number > 15
//   - Log each number you process (only evens, until you hit one > 15)
// Expected output:  4, then 18 → break (18 > 15)
// -----------------------------------------------------------------------------

const nums = [3, 7, 11, 4, 9, 13, 2, 18, 5];

for (let num of nums) {
  if (num % 2 !== 0) continue;
  console.log(num);

  if (num > 15) break;
}

// -----------------------------------------------------------------------------
// EXERCISE 6 — switch statement
// Write a function `dayName(num)` that returns the name of the day:
//   1 → "Monday"
//   2 → "Tuesday"
//   3 → "Wednesday"
//   4 → "Thursday"
//   5 → "Friday"
//   6 → "Saturday"
//   7 → "Sunday"
//   anything else → "Invalid"
// Test with: dayName(1), dayName(5), dayName(9)
// -----------------------------------------------------------------------------

function dayName(num) {
  switch (num) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 7:
      return "Sunday";
      break;
    default:
      return "Invalid";
  }
}
console.log(dayName(1));
console.log(dayName(5));
console.log(dayName(9));
// -----------------------------------------------------------------------------
// EXERCISE 7 — Ternary practice
// Rewrite this if/else as a single-line ternary:
//
//   function getStatus(score) {
//     if (score >= 50) return "pass";
//     else return "fail";
//   }
//
// Then test: getStatus(75), getStatus(20)
// -----------------------------------------------------------------------------

function getStatus(score) {
  return score >= 50 ? "pass" : "fail";
}
console.log(getStatus(75));

console.log(getStatus(20));

// -----------------------------------------------------------------------------
// EXERCISE 8 — Combine: FizzBuzz with switch
// Rewrite FizzBuzz from Day 0, but use:
//   - a `for` loop
//   - a `switch (true)` pattern OR if/else if/else (your choice)
//
// Print 1..30:
//   - multiples of 15 → "FizzBuzz"
//   - multiples of 3  → "Fizz"
//   - multiples of 5  → "Buzz"
//   - else            → the number
// -----------------------------------------------------------------------------

function fizzBuzz() {
  const result = [];

  for (let i = 1; i <= 30; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

console.log(fizzBuzz());
