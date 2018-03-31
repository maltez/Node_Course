function* fibonacci (n) {
  let current = 0;
  let next = 1;

  for(; n >= 0; n--){
    yield current;
    [current, next] = [next, current + next];
  }
}

const [...sequence] = fibonacci(10);
console.log(sequence);


function factorial(n) {
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
