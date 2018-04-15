/* eslint-disable no-alert, func-names */
const { EventEmitter } = require('events');

const Car = (function () {
  const privatePropertyListeners = Symbol('privatePropertyListeners');
  const privateMetodRunListeners = Symbol('privateMetodRunListeners');

  class CarClass extends EventEmitter {
    constructor(mark, model, type) {
      super();
      this.mark = mark;
      this.model = model;
      this.type = type;
      this.fuel = 0;
      this[privatePropertyListeners] = [];
    }

    move() {
      if (this.fuel <= 0) {
        throw new Error('Fuel tank is empty');
      }

      this.fuel -= 1;

      this[privateMetodRunListeners]('Moved ahead');
    }

    turnLeft() {
      this[privateMetodRunListeners]('Turned left');
    }

    turnRight() {
      this[privateMetodRunListeners]('Turned right');
    }

    replenishFuelTank() {
      if (this.fuel >= 3) {
        throw new Error('Fuel tank is full');
      }

      this.fuel = 3;
      this[privateMetodRunListeners]('Fuel tank was replenished');
    }

    addListener(listener) {
      if (typeof listener === 'function') {
        this[privatePropertyListeners].push(listener);
        this[privateMetodRunListeners]('Added listener');
      }
    }

    [privateMetodRunListeners](...args) {
      this[privatePropertyListeners].forEach((listener) => {
        listener.call(this, ...args);
      });
    }
  }

  return CarClass;
}());

const listener = function (...args) {
  console.log(...args);
};

const car = new Car('BMW', 'X5', 'Disel');

car.addListener(listener);

car.replenishFuelTank();
car.move();
car.turnLeft();
car.move();
car.turnRight();
car.move();

// Should be error 'Fuel tank is empty'
car.move();
