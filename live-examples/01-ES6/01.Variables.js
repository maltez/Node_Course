//console.log(variable); Temporary Dead zone

// 'use strict' breaks if not the first
let variable = 1;

if(true){
    let variable = 2;
}

console.log(variable);

for (let i = 0; i < 5; i += 1){
    setTimeout(function(){
        console.log(i);
    }, 0);
}

const a = 1;
// error a = 4;

const b = {a : 2};
b.a = 3;
// error b = {};