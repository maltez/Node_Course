const {EventEmitter} = require('events');

class MyEventEmitter extends EventEmitter {
  constructor() {
    super();

    this.on('listen', function listenFunction() {
      console.log('Listening')
    });

    this.on('start', function startFunction() {
      console.log('Started')
    });

    this.on('end', function endFunction() {
      console.log('Ended')
    });

  }

  updateMaxListeners(number) {
    this.setMaxListeners(number);
    console.log(this.getMaxListeners());
  }

  deleteListener(nameEvent, functionName = false) {
    let names = functionName ? this.listeners(nameEvent).filter(listener => listener.name === functionName) : this.listeners(nameEvent);

    names.forEach((name) => {
      this.removeListener(nameEvent, name);
    })
  }
}

let emitter = new MyEventEmitter;

emitter.updateMaxListeners(8);

emitter.deleteListener('end');
emitter.emit('listen');
emitter.emit('start');
emitter.emit('end');
