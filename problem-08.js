function swapKeysAndValues(obj) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    result[value] = key;
  }

  return result;
}

// Examples
console.log(swapKeysAndValues({ a: "x", b: "y" }));
// Output: { x: "a", y: "b" }

console.log(swapKeysAndValues({ a: "x", b: "x" }));
// Output: { x: "b" }

console.log(swapKeysAndValues({ a: 1, b: 2, c: 1 }));
// Output: { "1": "c", "2": "b" }
