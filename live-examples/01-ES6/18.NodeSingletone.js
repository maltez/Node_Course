let age = Math.random();

class Unicum {
    constructor(name, secondName, age){
        this.name = name;
        this.secondName = secondName;
        this.age = age;
    }
}

module.exports = new Unicum('basil', 'req', age);