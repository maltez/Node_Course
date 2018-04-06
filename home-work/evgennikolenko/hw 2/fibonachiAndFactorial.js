/---------------------------------------------------------------------/
// Use more undertandable variable names.
const generatorFibonachi = function*(n) {
    let a = 0,
        b = 1;
    for (let i = 0; i < n; i += 1) {

        let sum = a + b;
        b = a;
        yield sum;
        a = sum;
    }
}

const iteratorFibonachi = generatorFibonachi(10);

let arr = Array.from(iteratorFibonachi);
console.log(`Fibonachi numbers 1 first to ${arr.length} : ${arr}`);

for (let [index, value] of arr.entries()) {
    console.log(`${index+1} item :  ${value}`);
}

/---------------------------------------------------------------------/

function* factorialGenerator(count) {
    let result = count; // assign first number

    for (let i = count; i >= 2; i -= 1) {
        console.log(`Multiply ${result} on ${i - 1} :`);

        result = result * (i - 1)
        yield result;
    }
}
let factorialIterator = factorialGenerator(5);

for (let mul of factorialIterator) {
    console.log(mul);
}

/---------------------------------------------------------------------/
