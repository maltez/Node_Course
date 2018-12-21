//// WeakMap
const privateData = new WeakMap();

class Person {
	constructor(name) {
		privateData.set(this, { name });
	}

	getName() {
		return privateData.get(this).name
	}
}

let user = new Person('Nata');
user.getName();

//// Fibonacci
function* generateFibonacci(num) {

	function fib(n) {
	  return n <= 1 ? 1 : fib(n - 1) + fib(n - 2)
	}

	for (let i = 1; i <= num; i++) {
	    yield fib(i);
	}
}

let fibonacci = [...generateFibonacci(5)];
console.log(fibonacci);

//// Factorial

function* generateFactorial(n) {
	function fact(x) {
		return x == 0 ? 1 : x * fact(x-1)
	}

	yield fact(n);
}

let factorial = generateFactorial(5).next().value;
console.log(factorial);

//// Promise

function createGreeting(name) {
	return new Promise((res) => {
		setTimeout(() => {
			return res(name)
		}, 100)
	})
}

let addHello = (str) => {
	return `hello ${str}`
}

Promise.all([
    createGreeting('Nata'),
    createGreeting('Tratata')
])
.then((data) => {
    return data.join(' ');
})
.then(addHello)
.then(addHello)

