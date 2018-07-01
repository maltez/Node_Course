const GeneratorFibonacci = function*(n){
    let i = 0,
        res = [0, 1];
    while(i <= n) {
        console.log(res[i]);
        res.push(res[i++] + res[i]);
    }
};
const GeneratorFactorial = function*(n) {
    let i = 1,
        res = 1;
    while(i <= n) {
        console.log(res);
        res = res * ++i;
    }
};
const gen = GeneratorFibonacci(11);
gen.next();

const factorial = GeneratorFactorial(10);
factorial.next();