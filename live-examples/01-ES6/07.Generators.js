const gen = function*(count){
    for (let i = 0; i < count; i += 1) {
        yield i;
    }
}

const genInst = gen(150);
for (let item of genInst) {
    console.log(item);
}

// ---------------------------------------------
const gen2 = function*(count){
    for (let i = 0; i < count; i++) {
        let k = yield(i);
        if(k && Number.isInteger(k)){
            i = k;
        }
    }
}

const genInst2 = gen2(100);

console.log(genInst2.next().value);
console.log(genInst2.next(96).value);
console.log(genInst2.next(93).value);
console.log(genInst2.next().value);
console.log(genInst2.next().value);
console.log(genInst2.next(105).value);

// -----------------------
const gen3 = function*(){
    yield 1;
    yield 2;
    yield 3;
}

const genIns3 = gen3();

setTimeout(() => {
    console.log(genIns3.next().value);
}, 3000);

setTimeout(() => {
    console.log(genIns3.next().value);
}, 1000);

setTimeout(() => {
    console.log(genIns3.next().value);
}, 2000);

