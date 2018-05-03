process.on('message', (msg) => {
    console.log('Message from parent', msg);
});

let counter = 0;

const interval = setInterval(() => {
    process.send({counter: counter++});
    if (counter > 10) {
        clearInterval(interval);
    }
}, 500);
