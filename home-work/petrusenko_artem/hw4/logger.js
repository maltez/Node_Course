class Car {
    constructor() {
        this.__fuelLevel = 0;
        this.__coordinates = {
            x: 0,
            y: 0
        }
    }

    runForward() {
        this.__go();

        this.__coordinates.x = this.__coordinates.x + 1;

        return this;
    }

    runBackward() {
        this.__go();

        this.__coordinates.x = this.__coordinates.x - 1;

        return this;
    }

    turnLeft() {
        this.__go();

        this.__coordinates.y = this.__coordinates.y + 1;

        return this;
    }

    turnRigt() {
        this.__go();

        this.__coordinates.y = this.__coordinates.y - 1;

        return this;
    }

    __go() {
        
        if (this.fuelLevel !== 0) {
            this.fuelLevel = this.fuelLevel - 1;
        } else {
            console.log('Car can\'t mooving');
        }
    }

    tankUp(val) {
        this.fuelLevel = val;
    }

    set fuelLevel(val) {
        this.__fuelLevel = val;
    }

    get fuelLevel() {
        return this.__fuelLevel;
    }
}

class ObservableCar extends Car {
    constructor(name) {
        super(name);
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

    runForward() {
        super.runForward();
        this.__notifier();

        return this;
    }

    runBackward() {
        super.runBackward();
        this.__notifier();
    }

    turnLeft() {
        super.turnLeft();
        this.__notifier();
    }

    turnRigt() {
        super.turnRigt();
        this.__notifier();
    }

    tankUp() {
        super.tankUp();
        this.__notifier();
    }
}

const testCar = new ObservableCar();

const logger = function() {
    console.log(`Logged test run with ${this.name} - Status ${this.status} - Longevity ${this.longevity}`);
};

testCar.addListener(logger);

testCar.tankUp(20);
testCar.runForward().turnLeft().runBackward().turnLeft().runForward();
console.log(testCar);