const sqrDelay = (number, delay) => {
    return new Promise((resolve, reject) => {
        if (delay > 10) {
            return reject(new RangeError('Delay is too long'))
        }
        setTimeout(() => {
            return resolve(number * number);
        }, delay * 1000)
    });
};

const addRandomNumber = num => Math.floor(Math.random() * 10) + num;

Promise.all([
    sqrDelay(4, 3),
    sqrDelay(8, 2)
])
    .then(res => {
        return res.reduce((sum, current) => {
            return sum + current;
        }, 0);
    })
    .then(res => {
        console.log(`First sync call with ${res}: ${addRandomNumber(res)}`);
        console.log(`Second sync call with ${res}: ${addRandomNumber(res)}`);
    })
    .catch(err => {
        console.log(err.message);
    });
