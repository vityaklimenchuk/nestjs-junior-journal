function fizzbuzzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FіzzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fіzz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

const n = 15;
const result = fizzbuzzz(n);
console.log(result);
