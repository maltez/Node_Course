function* baseGenerator(number) {
  for (let i = 1; i<= number; i += 1) {
    yield i;
  }
}

function factorial(number) {
  let result = 1;
  let numbers = [...baseGenerator(number)];
  numbers.forEach(function (i) {
    result *= i;
  });
  
  return number === 0 ? 0 :result;
}

console.log(factorial(0)); // 0
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120