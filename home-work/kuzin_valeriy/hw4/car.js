const { EventEmitter } = require('events');

class Car extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
    this.moving = [];
    this.on(name, () => {});
  }

  setData(coordinates, petrol) {
    let point = {
      coordinates: coordinates,
      petrol: petrol,
      datetime: Date.now()
    };

    this.moving.push(point)
  }

  getMoving() {
    return this.moving;
  }
}

car = new Car('my_car');
car.setData([14, 25], 22);
setTimeout(() => { car.setData([15, 28], 21) }, 1000);
setTimeout(() => { car.setData([16, 28], 20) }, 2000);
setTimeout(() => { car.setData([17, 28], 19) }, 3000);
setTimeout(() => { car.setData([18, 28], 18) }, 4000);
setTimeout(() => { console.log(car.getMoving()) }, 4100);
