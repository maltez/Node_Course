//Create generator generator has to returns factorial sequence from 0 to n;
'use strict';

const gen = function*(count){


    let result = 1;

    for (let i = 0; i <= count; i += 1) {

        if(i > 0)
        {
            result = i * + result;

            yield result;
        }
        else
        {
            yield result;
        }

    }
}

const genInst = gen(15);
for (let item of genInst) {
    console.log(item);
}
