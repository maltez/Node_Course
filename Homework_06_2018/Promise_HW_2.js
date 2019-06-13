//Create promise chain. First should run in parallel two functions.
// Their results should aggregate (concatenate in one string) and you have to run to functions with these aggregate results one by one.
// As result You have to returns separate results of last two functions.
'use strict';

function SayMessage(msg) {
    return new Promise((res, rej) => {


        if(msg === undefined)
        {
            return rej(new TypeError('Message is undefined!'));
        }

            return res(msg);
    });

}


let strSumma = '';

Promise.all([
    SayMessage('Hello '),
    SayMessage('My friend ')
])
    .then((data) => {
    data.forEach(data => {
        strSumma += data;
        console.log(data);
    })
})
    .catch((err) => {
        console.log(`This is say by promise function: ${err}`);
    })
    .then((data) => {

        console.log(strSumma);
    })
