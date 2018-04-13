const { EventEmitter } = require('events');

class NickEventEmitter extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
        this.on(name, () => {});
    }

    get maxListenersCount () {
        return this.getMaxListeners(this.name);
    }
}

const nickEvent = new NickEventEmitter('start');
console.log(nickEvent.maxListenersCount);