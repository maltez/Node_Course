function* generate(n){
    yield 1;  
    let res = 1;
    for (i = 1; i <= n; i++) {
        res = res * i;
        yield res;
    }
}

let generator = generate(55); 
console.log(generator.next());// Maybe Loop?
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