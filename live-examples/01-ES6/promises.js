const delay = function(msg, sec, fn = () => {}) {
    return new Promise((res, rej)=> {
        if (sec > 7) {
            rej(new Error('To long interval'));
            return fn(msg);
        }
        setTimeout(()=> {
            res(msg);
            return fn(msg);
        }, sec * 1000)
    });
}

const ff = async function() {
    const tt = await delay('my message', 0.5);
    console.log(tt);
    return 'Some value'
}

ff().then((data) => {
    console.log(data);
});

Promise.resolve('rrrr').then(data => console.log(data))
Promise.reject(new Error('Some error')).catch(err => console.log(err.message))

Promise.race([
    delay('How are you', 0.5), 
    delay('Im fine', 1), 
    delay('Thank you', 0.7), 
    delay('Buy', 0.4)])
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err.message));

const cb = (data) => {
    console.log(data);
}

Promise.all([
    delay('How are you', 0.5), 
    delay('Im fine', 1), 
    delay('Thank you', 0.7), 
    delay('Buy', 0.4)
]).then(data => {
    data.forEach(m => console.log(m))
}).catch(err => console.log(err.message));

delay('Hi', 1, cb);

delay('Hi', 1)
    .then((data) => {
        console.log(data);
        return delay('How are you', 0.5)
    })
    .then((data) => {
        console.log(data);
        return delay('Im fine', 1)
    })
    .then((data) => {
        console.log(data);
        return delay('Thank you', 8)
    })
    .then((data) => {
        console.log(data);
        return delay('Buy', 0.4)
    })
    .catch((err) => {
        console.log(err.message);
        return delay('Hey from catch', 0.4)
    })
    .then(data => {
        console.log(data);
    })









