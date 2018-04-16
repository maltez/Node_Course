const { EventEmitter } = require('events');

const event = new EventEmitter();

event.on('request', (req, res) => {
    console.log(`Request - ${req}`);
    console.info(`Response - ${res}`);
});

event.on('request', (req, res) => {
    console.log(`Request1 - ${req}`);
    console.info(`Response1 - ${res}`);
});


event.emit('request', 'This is my request', 'This is my response');
setTimeout(() => {
    event.emit('request', 'Delayed request', 'Delayed response');
}, 200);

const listeners = event.listeners('request');
// event.removeListener('request', listeners[0]);
event.removeAllListeners('request');