const { EventEmitter } = require('events');

class PrivateEmitter extends EventEmitter {
  constructor(startfn, stopfn, listenfn) {
    super();
    this.on('start', startfn);
    this.on('stop', stopfn);
    this.on('listen', listenfn);
  }

  removeEventListener(event, listenerFn) {
    const foundListener = this.listeners(event)
      .filter(listener => listener.name.toLowerCase() === listenerFn.toLowerCase())[0];

    if (foundListener) {
      this.removeListener(event, foundListener);
    }
  }

}

const start = function start() {
  console.log('Start listener');
};

const stop = function stop() {
  console.log('Stop listener');
};

const listen = function listen() {
  console.log('Listen listener');
};


const privateEmitter = new PrivateEmitter(start, stop, listen);

privateEmitter.emit('start');
privateEmitter.emit('stop');
privateEmitter.emit('listen');

privateEmitter.removeEventListener('start', 'start');

privateEmitter.emit('start');
privateEmitter.emit('stop');
privateEmitter.emit('listen');