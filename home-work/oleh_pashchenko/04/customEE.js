const { EventEmitter } = require('events');

class EE extends EventEmitter {
  constructor(starthandler, stophandler, listenhandler) {
    super();

    this.on('start', starthandler);
    this.on('stop', stophandler);
    this.on('listen', listenhandler);
  }

  set maxMisteners(value) {
    this.setMaxListeners(value);
  }

  removeEventListenerByName(eventName, listenerFunctionName) {
    const removedListener = this.listeners(eventName)
      .filter(listener => listener.name.toLowerCase() === listenerFunctionName.toLowerCase())[0];

    if (removedListener) {
      this.removeListener(eventName, removedListener);
    }
  }
}

const start = function starthandler() {
  console.log('Start handler');
};

const stop = function stophandler() {
  console.log('Start handler');
};

const listen = function listenhandler() {
  console.log('Start handler');
};


const ee = new EE(start, stop, listen);

ee.maxMisteners = 1;
ee.emit('start');
ee.emit('stop');
ee.emit('listen');

console.log(ee.listeners('start'));

ee.removeEventListenerByName('start', 'starthandler');

console.log(ee.listeners('start'), ee.getMaxListeners());
