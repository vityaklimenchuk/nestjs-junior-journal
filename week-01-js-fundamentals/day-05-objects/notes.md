# Day 5 — Objects: deep dive

## 📚 Theory (~25 min)

1. https://javascript.info/object — Objects basics (15 min)
2. https://javascript.info/destructuring-assignment — Destructuring (10 min)
3. _(skim)_ https://javascript.info/optional-chaining — Optional chaining `?.`

## ❓ Q&A (in your own words, in English)

### Q1. What are 2 ways to access a property of an object? Show with an example.

> The dot nation and square brackets, obj.nation ogn[natioon]

### Q2. What does **destructuring** do? Show how to destructure `{ name, age }` from a `user` object.

const user = { name: "Viktor", age: 25 };
const { name, age } = user;
console.log(name, age); // "Viktor" 25

> that allows us to “unpack” arrays or objects into a bunch of variables,

### Q3. What does the **spread operator** `...` do for objects? Show how to merge `{ a: 1 }` with `{ b: 2 }`.

> This spread operator copy or merge proprties from one or more objects into a new object literal.
> const obj1 = {a:1}
> const obj2 = {b:2}

const merged = {...obj1, ...obj2}

console.log(merged)

### Q4. What does **optional chaining** `?.` do? Why is it useful?

> The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

### Q5. What's the difference between `Object.keys()`, `Object.values()`, `Object.entries()`?

> They differ in how they provide access to object properties: Object. keys() returns an array of a given object's own enumerable property names, while Object. entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs., while Object.value() returns an array of a given object's own enumerable values

### Q6. What's the difference between `dot.notation` and `bracket["notation"]`? When MUST you use brackets?

Dot notation (obj.prop) uses static, literal names, while bracket notation (obj["prop"]) evaluates expressions to access properties.
When the property name is stored in a variable.

## 🤔 Bonus

- What does `Object.freeze()` do?
- How would you copy an object without sharing reference? (shallow copy)
