function sayThms(x, y){
    return { x, y };// {x: 12}
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

const a = {
    1: 12,
    2: 14,
    true: 3
}