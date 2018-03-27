function sayThms(x){
    return { x };
}

console.log(sayThms('Hey'));

const a = {
    sayHello(){
        console.log('Hello');
    }
}

let i = 12;

const b = {
    [`comp${i}`]:42,
};

console.log(b.comp12);
console.log(b[`comp${i}`]);