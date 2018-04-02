const rtry = 1;
const v = 'My string'

const x = { rtry , v }


const hugeObject = {
    a : {
        a : {
            fx : 1
        }
    },
    b : 'str',
    c: true,
    d: 'oitshsh',
    e: 123,
    zzzz: 'moto',
    z: [1,23,4,6,7,8,9,0]
};

const { c, zzzz = 'bobik' } = hugeObject;

//console.log(b);
console.log(c);
console.log(zzzz);

const { a : { a: { fx }, a }, b } = hugeObject;

console.log(a)
console.log(fx)

const arr = [1,2,3,4,5,6,7,8,9,0];
const [first,,third, ...last] = arr;

console.log(first)
console.log(third);
console.log(last);

const gen = function*(){
    for(let i = 0; i < 12; i += 2){
        yield i;
    }
};

const seq = gen();

const [,second,third, ... arr1] = seq;
console.log(arr1);

const { readFile, writeFile } = require('fs');
