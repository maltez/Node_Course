function* factorialGenerator(count) {
  let result = 1;
  for (let index = 1; index <= count; index += 1) {
    result *= index;
  }
  
  yield result;
}

const factorial = factorialGenerator(0);

const factorialArray = [...factorial];
console.log(factorialArray);
