const { EventEmitter } = require('events');

 const event = new EventEmitter();

 event.once('start', (arg) => {
    console.log(arg);
 });

 event.once('start', (arg) => {
    console.log(arg);
 });

 //event.removeAllListeners('start');

 event.emit('start', 'I started once');
 event.emit('start', 'I started twice');
