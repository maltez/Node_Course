// const mac = new Computer('myMac');

class Computer {
    constructor(name){
        this.name = name;
    }

    print(str){
        console.log(`${this.name} print texty: ${str}`);
    }
}

const mac = new Computer('myMac');

class PC extends Computer {
    constructor(name){
        super(name);
        this.__cpu = 12;
    }

    print(str){
        console.log('Bzzzzzzz');
        super.print(str);
    }

    get frequency(){
        return this.__cpu * 1000;
    }

    set frequency(val){
        this.__cpu = val / 1000;
    }
}

const pc = new PC('My IBM');
console.log(pc.frequency);
pc.frequency = 2000;
console.log(pc.frequency);