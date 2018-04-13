const { EventEmitter } = require('events');

const event = new EventEmitter();

const namedLogger = () => {
    console.log('Logged!');
}

event.setMaxListeners(15);

event.on('test', namedLogger);
event.on('test', namedLogger);
event.on('test', namedLogger);
event.on('test', namedLogger);
event.on('test', namedLogger);
event.on('test', namedLogger);
event.on('test', namedLogger);
event.on('test', namedLogger);
event.on('test', namedLogger);
event.on('test', namedLogger);
event.on('test', namedLogger);

console.log(event.listenerCount('test'));

event.emit('test');