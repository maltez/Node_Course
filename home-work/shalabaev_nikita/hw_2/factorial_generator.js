//Create generator generator has to returns factorial sequence from 0 to n;

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

function* factorialGenerator(n) {
  let start = 1;

  while (start != n) {
    yield factorial(start++);
  }
}

const gen = factorialGenerator(5);