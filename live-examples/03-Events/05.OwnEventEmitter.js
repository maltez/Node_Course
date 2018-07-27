const { EventEmitter } = require('events');

class MyOwnEvent extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }

    on(eventName, fn) {
        console.log(`Add listener with name ${this.name}`);
        super.on(eventName, fn)
    }
    removeListener(...args) {
        console.log(`Remove listener with name ${this.name}`);
        super.removeListener(...args);
    }
}

const myEvent = new MyOwnEvent('Nick event');
myEvent.on('Nick run', () => {
    console.log('Nick running!!!!!');
})


myEvent.
myEvent.emit('Nick run');
myEvent.removeListener('Nick run', myEvent.listeners('Nick run')[0]);
myEvent.emit('Nick run');