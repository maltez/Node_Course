/*
 * Simulation private class property
 */

const Cat = (function() {

    let _name = new WeakMap();

    class Cat {
        constructor(name, age) {

            let _age = age; // simulation private property [age]

            _name.set(this, name); // simulation private property with WeakMap

            this.getAge = function() {
                return _age;
            }
        };

        greeting() {
            let age = this.getAge();
            console.log(`Hello, my name is  ${_name.get(this)}. I am ${age} year old;`);
        }
    }

    return Cat;
})();


let cat = new Cat('Barsik', 5);
cat.greeting();

console.log(cat.age); // undefined