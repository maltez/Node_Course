function sayHelloWithDelay(msg, delay) {
    return new Promise((res, rej) => {
        if( delay > 7) {
            return rej(new RangeError('Out of time range'));
        }
        setTimeout(() => {
            return res(msg);
        }, delay * 1000);
    });
}

sayHelloWithDelay('Hello', 0.5)
    .then((data) => {
       console.log(data);
       return sayHelloWithDelay('World', 0.5);
    })
    .then((data) => {
        console.log(data);
        return sayHelloWithDelay('Suckers!', 10);
    })
    .catch((err) => {
        return err.message;
    })
    .then((data) => {
        console.log(data);
        console.log('Goodbye');
    })

    Promise.resolve('Goodbye')
    .then((data) => {
        console.log(`This is say by promise ${data}`);
    })

    Promise.reject('Crash')
    .catch((err) => {
        console.log(`This is say by promise ${err}`);
    });

    Promise.all([
        sayHelloWithDelay('World', 0.5),
        sayHelloWithDelay('Me', 1),
        sayHelloWithDelay('You', 1.5),
        sayHelloWithDelay('We', 0.75),
    ])
    .then((data) => {
        data.forEach(data => {
            console.log(data);
        })
    })

    Promise.race([
        sayHelloWithDelay('World', 0.5),
        sayHelloWithDelay('Me', 1),
        sayHelloWithDelay('You', 1.5),
        sayHelloWithDelay('We', 0.75),
    ])
    .then((data) => {
        console.log(data);
    });
    