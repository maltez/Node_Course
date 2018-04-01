const genFib = function* (count) {
    let prev = 0;
    let next = 1;
    for (let i = 0; i <= count; i++) {
        let res = prev + next;
        prev = next;
        next = res;
        yield res;
    }
};

const generatorFib = genFib(10);
console.log([...generatorFib]);

const genFactorial = function* (count) {
    let res = 1;
    for (let i = 0; i <= count;) {
        yield res;
        res*=++i;
    }
};


const generatorFactorial = genFactorial(7);
console.log([...generatorFactorial]);
