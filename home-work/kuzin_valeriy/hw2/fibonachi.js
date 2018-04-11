function* generatorFibonachi(number) {
  let first = 1,
    second = 0;

  for (let i = 1; i <= number; i += 1) {
    therd = first + second;// Missing variable declaration and the 'third'
    first = second;
    second = therd;
    yield therd;
  }

}

// Rafactor this method. Too much ifs // Done
function rangeFibodathi(number) {
  if (number < 0) return [];

  let range = [...generatorFibonachi(number)];
  range.unshift(0);// Do not use unsift use push.
  return range;
}

console.log(rangeFibodathi(-3)); // []
console.log(rangeFibodathi(0)); // [0]
console.log(rangeFibodathi(1)); // [0, 1]
console.log(rangeFibodathi(10)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]