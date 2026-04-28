# Day 4 — Array methods (map, filter, reduce, find, some, every)

## 📚 Theory (~30 min)

Read in order:

1. https://javascript.info/array — Array basics (skip if you remember from Day 2)
2. https://javascript.info/array-methods — focus on:
   - `forEach`, `map`, `filter`
   - `find`, `findIndex`
   - `some`, `every`
   - `reduce` (most powerful, takes a bit to click)
   - `includes`, `indexOf`
3. Quick read on arrow functions in callbacks: https://javascript.info/arrow-functions-basics

## ❓ Q&A (in your own words, in English)

### Q1. What's the difference between `forEach` and `map`?

> forEach call fun for every elements but does not return athything
> map create anew array from result of calling function for every elements

### Q2. When would you use `filter` vs `find`?

> I'll use find when I need find one element or is this elevent present in array
> And filter when I need all elements from array

### Q3. Explain `reduce` in your own words. What are the 2 arguments of the callback?

> The function is applied to all array elements one after another and “carries on” its result to the next call.
> 2 argument is accumulator and currentValue

### Q4. What does `some` return? What does `every` return?

> some return true when one element pass condition, every return true when all elements pass the condition

### Q5. Do `map` and `filter` change the original array? (i.e. are they mutating or pure?)

> They are pure

### Q6. Bonus: write `[1, 2, 3, 4].filter(x => x > 2)` in pseudo-English: "for each element, ..."

> For each element in the list, keep it if the element is greater than 2.

## 🤔 Extra to think about

- Why do we chain methods like `.filter(...).map(...)`? What's the order of execution?
- What's the difference between `for` loop and `forEach`? When is each better?
