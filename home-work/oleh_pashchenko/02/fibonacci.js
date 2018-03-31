function* fibonacciGenerator(count) {
let firstNumber = 0;
let secondNumber = 1;
for (let index = 0; index < count; index += 1) {
  let number = firstNumber + secondNumber;
  secondNumber = firstNumber;
  yield number;
  firstNumber = number;
  }
}

const fibonacci = fibonacciGenerator(10);
const fibonacciArray = [...fibonacci];
console.log(fibonacciArray);
