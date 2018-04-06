// fibonacci generator
function* fib () {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const fibonacci = fib();
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())

//factorial generator;
function* fact (n) {
    let res = 1;
    for (i = 1; i <= n; i++) {
        yield res;
        res = res * i;
    }
}
const factorial = fact(6);// Loops?
console.log(factorial.next());
console.log(factorial.next());
console.log(factorial.next());
console.log(factorial.next());
console.log(factorial.next());
console.log(factorial.next());
console.log(factorial.next());

// Promise chain. 
const first = new Promise((res, rej) => {
  setTimeout(() => {
    return res("Hello");
  }, 1000);
});

const second = new Promise ((res, rej) => {
  setTimeout(() => {
    return res("World");
  }, 2000)
});

const nextOne = function (arg) {
  var res = arg.split(' ');
  console.log(res[0])
  return res[1];
}

const nextTwo = function (arg) {
  console.log(arg);
}

Promise.all([
  first, second
])
.then((data) => {
  let res = data.join(' ');
  console.log(res);
  return res;
})
.then((data) =>{
  return nextOne(data);
})
.then((data)=>{
  return nextTwo(data);
})