# Day 3 — Functions, Scope, Hoisting

## 📚 Theory (~30 min)

Read these in order:

1. https://javascript.info/function-basics
2. https://javascript.info/function-expressions
3. https://javascript.info/arrow-functions-basics
4. https://javascript.info/var (only the "var has no block scope" section)

## ❓ Q&A (answer in your own words, in English)

### Q1. What are the 3 ways to create a function in JS? Give one example of each.

let welcome = function(){}
function show(){}
const giveMe = () => {}

### Q2. What's the difference between **parameters** and **arguments**?

> Parameter is the variable listed inside the parentheses in the function declaration
> And Arguments is the value that is passed to the function when it is called

### Q3. What does a function return if you don't write `return`?

> function will return undefined

### Q4. Explain in one sentence: what is **scope** in JavaScript?

> it's space where we declarated variable and can use it? but can use this variable otside

function testScope(){
let test = 1

    console.log(test) // 1

}

conlose.log(test) // undefined

### Q5. What is the difference between **block scope** and **function scope**?

> in function scope var ignored breakets and we can use value which declared inside cycle, but i block spoce we can't use outside varaible which declared inside cycle

### Q6. What is **hoisting**? Which gets hoisted: function declarations, function expressions, or both?

> JS scan file and up call function before start

## 🤔 Bonus

- What is the value of `this` inside an arrow function?
- What happens if you call a function with FEWER arguments than parameters?
- What happens if you call a function with MORE arguments than parameters?
