const { EventEmitter } = require('events');

const event = new EventEmitter();

const logger = () => {
    console.log(`Logged`);
};

const notifier = () => {
    console.log(`Notified`);
};

const audit = () => {
    console.log(`Audited`);
};

event.on('test', logger);
event.on('test', notifier);
event.on('test', audit);

event.emit('test');

event.removeListener('test', audit);
event.emit('test');