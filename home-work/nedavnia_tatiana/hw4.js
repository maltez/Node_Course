// Create class car. And create logger that will be log all movings, coordinates and fuel level of this car
const ObservableCar = (function() {
  const privateData = new WeakMap();

  class Car {
    constructor(fuel) {
      privateData.set(this, { coords: 0, fuel });
    }

    drive() {
      if(privateData.get(this).fuel > 0){
        const { fuel, coords } = privateData.get(this);
        privateData.get(this).coords = fuel > 0 ? coords + 1: coords;
        privateData.get(this).fuel = fuel > 0 ? fuel - 1: fuel;
      }
    }
  }

  return class ObservableCar extends Car {
    constructor(fuel) {
      super(fuel);
      const subscribers = [];
      const notifier = () => {
        const {fuel, coords, subscribers } = privateData.get(this);
        subscribers.forEach(fn => fn(fuel, coords));
      };

      privateData.set(this, Object.assign({}, privateData.get(this), { subscribers, notifier }));
    }

    subscribe(fn) {
      if(typeof fn === 'function') privateData.get(this).subscribers.push(fn);
    }

    unsubscribe(fn) {
      privateData.get(this).subscribers = privateData.get(this).subscribers.filter(observer => observer !== fn);
    }

    drive() {
      super.drive();
      privateData.get(this).notifier();
    }
  };
}());


const logger = (fuel, coord) => {
  console.log(`Car is at ${coord}; ${fuel ? `${fuel} left`: 'out of fuel'}`);
};

const car = new ObservableCar(4);
car.subscribe(logger);
car.drive();
car.drive();
car.drive();
car.drive();
car.drive();

// Create you own event emitter. It should predefine listeners for 3 events. Listen, start and stop.
// Shold have ability extend max listeners count via setter and remove listener by name.
const { EventEmitter } = require('events');

class CustomEmitter extends EventEmitter {
  constructor() {
    super();

    this.on('start', function startListener() {
      console.log('start event handled');
    });

    this.on('stop', function stopListener() {
      console.log('stop event handled');
    });

    const listenListener = () => console.log('listen event handled');
    this.on('listen', listenListener);
  }

  set maxListeners(num) {
    this._maxListeners = num;
  }

  removeListenerByName(event, fnName) {
    const stagedForRemoval = this.listeners(event).find(listener => listener.name === fnName);
    if(stagedForRemoval) this.removeListener(event, stagedForRemoval);
  }
}

const ee = new CustomEmitter();
ee.maxListeners = 15;
ee.removeListenerByName('listen', 'listenListener');
ee.removeListenerByName('stop', 'stopListener');
ee.emit('start');
ee.emit('listen');
ee.emit('stop');