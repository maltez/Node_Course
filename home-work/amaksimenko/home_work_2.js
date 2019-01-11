// Create private member in
// class using WeakMap.

const HasPrivate = (function () {
  const _private = new WeakMap()

  class HasPrivate {
    constructor(name) {
      _private.set(this, { name })
    }

    getName() {
      return _private.get(this).name
    }
  }

  return HasPrivate
})()

const hasPrivate = new HasPrivate('Bob')

console.warn('Private prop: ')
console.log(hasPrivate.getName())





// Create generator. Generator has
// to returns sequence of fibonacci
// numbers from first to n.


const genFib = function* (count) {
  let a = 1
  let b = 1

  yield a
  yield b

  for (let i = 3; i <= count; i++) {
    let c = a + b
    a = b
    b = c

    yield b
  }
}

const itemsFib = genFib(20)

console.warn('Sequence of fibonacci: ')
for (let item of itemsFib) {
  console.log(item)
}




// Create generator. Generator has
// to returns factorial sequence
// from 0 to n;

const genFact = function* (count) {
  let result = 1

  for (let i = count; i > 1; i--) {
    result *= i

    yield result
  }
}

const itemsFact = genFact(5)

console.warn('Factorial sequence: ')
for (let item of itemsFact) {
  console.log(item)
}




// Create promise chain. First should run in parallel two functions.
// Their results should aggregate (concatenate in one string) and you
// have to run to functions with these aggregate results one by one.
// As result You have to returns separate results of last two functions.


console.warn('Promise chain: ')

function sayHelloWithDelay(msg, delay) {
  return new Promise((res, rej) => {
    if (delay > 7) {
      return rej(new RangeError('Out of time range'))
    }
    setTimeout(() => {
      return res(msg)
    }, delay * 1000)
  })
}

Promise.all([
  sayHelloWithDelay('World', 1),
  sayHelloWithDelay('Hello', 0.5),
])
  .then((data) => {
    return data.join(' + ')
  })
  .then(data => {
    console.log(data)

    return data
  })
  .then(data => {
    data.split(' + ').map(dataSplit => console.log(dataSplit))
  })
