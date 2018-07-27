const { EventEmitter } = require('events');

const temp = new EventEmitter();

module.exports = temp;

setTimeout(() => {
    temp.emit('Hi', 'Nick');
}, 2000);
