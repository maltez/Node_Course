const { EventEmitter } = require('events');

class TestEmitter extends EventEmitter {
    constructor() {
        super();
        this.__predefinedEvents = ['listen', 'start', 'stop'];
        this.__predefinedEvents.map(item => this.on(item, () => console.log(item)));
    }

    addListener(name, fn) {
        if (this.__predefinedEvents.length < this.maxListenersCount) {
            if (typeof fn == 'function') {
                this.__predefinedEvents.push(name);
                this.on(name, fn);
            } else {
                throw new Error('Listener should be a function');
            }
        } else {
            throw new Error('Maximum listener count is exceed');
        }
        
    }

    removeListenerByName(name) {
        if (this.__predefinedEvents.includes(name) ) {
            const listeners = this.listeners(name);
            this.__predefinedEvents = this.__predefinedEvents.filter((item) => item !== name);
            this.removeListener(name, listeners[0]);
        }
    }

    set maxListenersCount(val) {
        this.__maxListenersCount = val;
    }

    get maxListenersCount() {
        return this.__maxListenersCount;
    }
}

const testEmitter = new TestEmitter();

testEmitter.maxListenersCount = 4; // Sets max count listener

// Error: Maximum listener count is exceed
console.log(testEmitter.maxListenersCount); // 

testEmitter.addListener('delete', () => console.log('Delete')); // Adds delete listener
testEmitter.addListener('update', () => console.log('Update'));

testEmitter.removeListenerByName('delete'); // Removes  'delete' listener by it's name
console.log(testEmitter);
