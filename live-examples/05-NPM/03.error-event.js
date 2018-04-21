process.on('uncaughtException', (err) => {
    console.log(err.message);
    process.exit(1);
})

const asyncFn = async function() {
    setTimeout(() => {
        throw new Error('Sudden error');
        return Promise.resolve('Hello');
    }, 400)
}

const anotherAsync = async function() {
    try {
        await asyncFn();
    } catch(err) {
        console.log(err.message);
    }

    return Promise.resolve('It all right');
}

anotherAsync()
    .then((data) => {
        console.log(data);
    });
