class Car {
    static create(color = 'black'){
        return new Car ('ford t', color, 120, 0, false, false, false);
    }

    constructor(name, color, maxSpeed, minSpeed, isCrossover, isDiesel, isParcytronic) {
        this.name = name;
        this.color;
        // Initalize a lot  of;
    }
}

const ford = Car.create();
const ford1 = Car.create('red');
const ford2 = Car.create();
const ford3 = Car.create();
const ford4 = Car.create();
const ford5 = Car.create();