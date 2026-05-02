# Day 6 — Loops & Control flow

## 📚 Theory (~20 min)

1. https://javascript.info/while-for — `while`, `do...while`, `for`
2. https://javascript.info/switch — `switch` statement
3. https://javascript.info/ifelse — `if/else`, ternary `? :`
4. _(quick read)_ https://javascript.info/array#loops — `for...of` for arrays/strings, `for...in` for objects

## ❓ Q&A (in your own words, in English)

### Q1. What are the 4 main loops in JS? When would you use each?

> for, while, do...while, for...of / for...in
> for - Iterates over values and expressions
> while = Iterates over a condition
> do ... whiler - Iterates over a condition
> for .. of - iterates over values
> for ... in - iterates over property keys

### Q2. What's the difference between `for...of` and `for...in`?

> For ... of iterate over values, for ..in iterate oper propertt keys

### Q3. What do `break` and `continue` do inside a loop?

> break (Stop): Completely stops the loop from running any further, often used to exit when a target is found or a critical condition is met
> continue (Skip): Bypasses the rest of the current loop body but allows the loop to continue with the next cycle, useful for skipping specific, unwanted values..

### Q4. When would you use `switch` instead of `if/else if`?

> I Use switch when you’re comparing one value against many specific cases.
> Use if/else if when: conditions are more complex , you need ranges (score > 90) , you combine conditions with && or ||, different variables are involved

### Q5. Write a ternary equivalent of:

```js
let label;
if (age >= 18) label = "adult";
else label = "minor";
```

const label = age >= 18 ? "adult" : "minor"

## 🤔 Bonus

- What's an "infinite loop"? Show example.
- Why is `for...in` bad for arrays? (hint: order, prototype keys)
