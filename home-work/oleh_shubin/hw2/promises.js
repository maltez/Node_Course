// Create promise chain. First should run in parallel two functions. Their results should aggregate (concatenate in one string) and you have to run to functions with these aggregate results one by one. As result You have to returns separate results of last two functions.

const foo = function(str) {
    return new Promise((res, rej)=>{
        if(str && str.length > 0){
            res(str);
        } else {
            rej('Error!')
        }
    })
},
    concat = function (arr){
        return new Promise((res, rej)=>{
            if(arr && arr.length > 0) {
                res(arr.join(' '));
            } else {
                rej('Concat Error!')
            }
        })
    };

let result;
Promise.all([
    foo('First'),
    foo('Second'),
]).then(function (arr) {
    return concat(arr);
}).then(function (res) {
    result = res;
    return foo(`${result} one`);
}).then(function(res) {
    console.log(res);
    return foo(`${result} two`);
}).then(function(res) {
    console.log(res);
}).catch(function (err){
    console.log(err);
});