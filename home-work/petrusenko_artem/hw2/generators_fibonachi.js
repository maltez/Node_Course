function* generate(n){
    yield 0;
    let res = 1;

    for (i = 1; i <= n; i++) {
        res = res + i;
        console.log(res);
        yield i + res;
    }
}

let generator = generate(10);
console.log(generator.next()); // Maybe loop better?
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());