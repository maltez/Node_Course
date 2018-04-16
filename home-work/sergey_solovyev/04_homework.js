class Car {
  constructor(name, rate = 10) {
    this.name = name;
    this.rate = rate;
  }

  run(direction = 'forward', x, y, distance){
    this.direction = direction;
    this.x = x;
    this.y = y;
    this.distance = distance;
  }
}

class ObservableCar extends Car {
  constructor(name, rate = 10) {
    super(name, rate = 10);
    this.__name = name;
    this.__rate = rate;
    this.__observers = [];
  }

  addListener(fn) {
      if(typeof fn == 'function') {
          this.__observers.push(fn);
      }
  }

  removeListener(fn) {
      this.__observers = this.__observers.filter(itemFn => itemFn !== fn);
  }

  __notifier(){
      this.__observers.forEach(fn => fn.apply(this));
  }

  __fuellevel(distance){
    this.fuelLevel = this.__rate/100 * distance;
    return this.fuelLevel;
  }

  run(direction = 'forward', x , y, distance) {
    super.run(direction, x, y, distance, this.__fuellevel(distance));
    this.__notifier();
  }
}

const logger = function() {
  console.log(`Logged car with name ${this.name} | Run direction ${this.direction} | From ${this.x} ${this.y} | Distance ${this.distance} | Rate ${this.rate} | FuelLevel ${this.fuelLevel}`);
};

const test = new ObservableCar('BMW', 8);
test.addListener(logger);
test.run('backward', 10, 17, 100); // Logged car with name BMW | Run direction backward | From 10 17 | Distance 100 | Rate 10 | FuelLevel 10
test.run('forward', 20, 34, 200); // Logged car with name BMW | Run direction forward | From 20 34 | Distance 200 | Rate 10 | FuelLevel 20
