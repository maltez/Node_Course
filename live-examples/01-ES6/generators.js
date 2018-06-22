const Generator = function*(){
    let i = 1;
    let x = yield (i);
    while(x < 100) {
        console.log(x);
        i++;
        x = yield (i);
    }
    return 5;
}

const gen = Generator();
gen.next()
let counter = 6;
const interval = setInterval(()=> {
    gen.next(counter);
    counter += 1;
    if (counter > 100) {
        clearInterval(interval);
    }
}, 100);



