// Not right - generator has to retorn factorials. Not function. Please rework

// Done
function* factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i += 1) {
    result *= i;
    yield result;
  }
}


console.log([...factorial(1)]); // [ 1 ]
console.log([...factorial(2)]); // [ 1, 2 ]
console.log([...factorial(3)]); // [ 1, 2, 6 ]
console.log([...factorial(4)]); // [ 1, 2, 6, 24 ]
console.log([...factorial(5)]); // [ 1, 2, 6, 24, 120 ]
