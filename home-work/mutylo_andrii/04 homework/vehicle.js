const { EventEmitter } = require('events');

const Vehicle = (function () {
  let privListeners = Symbol('pList');
  let runListeners = Symbol('rList');

  class VehicleClass extends EventEmitter {
    constructor(mark, model, type) {
      super();
      this.mark = mark;
      this.model = model;
      this.type = type;
      this.fuel = 200;
      this[privListeners] = [];
    }

    run() {
      if (this.fuel <= 1) {
        throw new Error('Fuel is low');
      }

      this.fuel -= 1;

      this[runListeners]('Go ahead');
    }

    left() {
      this[runListeners]('Going left');
    }

    right() {
      this[runListeners]('Going right');
    }

    addListener(listener) {
      if (typeof listener === 'function') {
        this[privListeners].push(listener);
        this[runListeners]('New Listener added');
      }
    }

    [runListeners](...args) {
      this[privListeners].forEach((listener) => {
        listener.call(this, ...args);
      });
    }
  }

  return VehicleClass;
}());

const listener = function (...args) {
  console.log(...args);
};

const car = new Vehicle('KIA', 'Soul', 'Gasoline');

car.addListener(listener);

car.run();
car.right();
car.run();
car.left();
car.run();

