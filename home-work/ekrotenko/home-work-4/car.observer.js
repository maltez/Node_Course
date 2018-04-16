// Create class car. Create logger, that will log all movings coordinates and fuel level. coordinates and fuel level should
// be getter
//

class Car {
    constructor(fuelAmount, originCoordinates) {
        this.fuelAmount = +fuelAmount;
        this.currentLocation = {
            x: +originCoordinates.x || 0,
            y: +originCoordinates.y || 0,
        }
    }

    run() {
        if (!this.fuelAmount) {
            console.log('fuel tank is empty. Can not go');
        }
        else {
            this.currentLocation = {
                x: Math.floor(Math.random() * 10),
                y: Math.floor(Math.random() * 10),
            };
            this.fuelAmount -= 1;
        }
    }
}

class ObservableCar extends Car {
    constructor(fuelAmount, originCoordinates) {
        super(fuelAmount, originCoordinates);
        this.observers = [];
    }

    __notify() {
        this.observers.forEach(o => {
            o(this.fuel, this.location);
        })
    }

    get fuel() {
        return this.fuelAmount;
    }

    get location() {
        return this.currentLocation;
    }

    run() {
        super.run();
        this.__notify();
    }

    addObserver(fn) {
        if (typeof fn === 'function') {
            this.observers.push(fn);
        }
    }

    removeObserver(fn) {
        if (typeof fn === 'function') {
            this.observers.pop(fn);
        }
    }
}

const logger = function (fuel, location) {
    console.log(`Log - Current fuel amount: ${fuel}, Current location: (${location.x}, ${location.y})`);
};
const notifier = function (fuel, location) {
    console.log(`Notify - Current fuel amount: ${fuel}, Current location: (${location.x}, ${location.y})`);
};
const auditor = function (fuel, location) {
    console.log(`Audit - Current fuel amount: ${fuel}, Current location: (${location.x}, ${location.y})`);
};

const maserati = new ObservableCar(3, {x: 0, y: 30});
maserati.addObserver(logger);
maserati.addObserver(notifier);
maserati.addObserver(auditor);
maserati.run();

setTimeout(()=>{
    maserati.run()
}, 2000);

maserati.removeObserver(notifier);
maserati.run();
maserati.run();
maserati.run();
