//Create generator. Generator has to returns sequence of fibonacci numbers from first to n.

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function* fibonacciSequenceGenerator(n) {
  let start = 0;

  while (start != n) {
    yield fibonacci(start++);
  }
}

const gen = fibonacciSequenceGenerator(5);