



function nodeJsFunction(err, cb){
    setTimeout(() => {
        cb('Hello world');
    }, 1000);
}

function anotherNodeJsFunction(err, arg, cb){
    setTimeout(() => {
        console.log(arg);
        cb(null, 'Good bye world');
    }, 500);
}

nodeJsFunction(null, function(str){
    anotherNodeJsFunction(null, str, function(err, str){
        console.log(str);
    });
});

function nodeJsStyleFunction (err, cb = function() {}){
    return new Promise((res, rej) => {
        if(err) {
            rej(err);
            return cb(err, null);
        } else {
            res('Some value');
            return cb(null, 'Some value');
        }
    });
}

nodeJsStyleFunction(null, (err, val) => {
    console.log(val)
});

nodeJsStyleFunction(null)
 .then( data => {
     console.log(data)
 });