//Generator has to returns sequence of fibonacci numbers from first to n.
'use strict';

const gen = function*(count){

    let tmp1 = 0;
    let tmp2 = 0;
    let result = 0;

    for (let i = 0; i < count; i += 1) {

        if(i >= 2)
        {
            result = tmp1 + tmp2;
            tmp1 = tmp2;
            tmp2 = result;

            yield result;
        }
        else
        {
            if(i===1)
            {
                tmp2 = 1;
            }

            yield i;
        }

    }
}

const genInst = gen(20);
for (let item of genInst) {
    console.log(item);
}
