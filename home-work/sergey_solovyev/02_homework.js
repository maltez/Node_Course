function* fibonacci (n) {
  let current = 0;
  let next = 1;

  for(; n >= 0; n--){// It is very bad style. Define loop counter variable in loop. Do not use external variable;
    yield current;
    [current, next] = [next, current + next];
  }
}

const [...sequence] = fibonacci(10);
console.log(sequence);


function factorial(n) { // Factorial calculation should be in generator
  return n ? n * factorial(n - 1) : 1;
}

function* factorialGen (n) {
  let current = 0;
  let next = 1;

  for(; n >= 0; n--){
    yield factorial(current);
    current++;
    next++;
  }
}

const [...result] = factorialGen(10);
console.log(result);
