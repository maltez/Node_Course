//class private property with scoped variable
class Person {
  constructor(name) {
      let _name = name
      this.setName = function(name) { 
        _name = name; 
      }
      this.getName = function() { 
        return _name; 
      }
  }
}

let jack = new Person('Jack')

console.log(jack._name); //undefined
console.log(jack.getName()); // Jack


//class private property with scoped Symbol
let Person = (function () {
  let ageId = Symbol();

  class Person {
    constructor(name) {
      this.name = name; 
      this[ageId] = 20; 
    }

    greet() {
      console.log(`Name: ${this.name}`);
    }

    getAge() {
      console.log(`Age: ${this[ageId]}`);
    }
  }

  return Person;
})();

let john = new Person('John');
john.greet(); //Name: John
john.getAge(); //Age: 20
console.log(`Age: ${john.ageId}`); //Age: undefined

//class private property with scoped WeakMap
let Person = (function () {
  let privProps = new WeakMap();

  class Person {
    constructor(name) {
      this.name = name; 
      privProps.set(this, {age: 20}); 
    }

    greet() {
      console.log(`Name: ${this.name}`);
    }

    getAge() {
      console.log(`Age: ${privProps.get(this).age}`);
    }
  }

  return Person;
})();

let jack = new Person('Jack');
jack.greet(); // Name: Jack;
jack.getAge(); // Age: 20;
console.log(jack.privProps); // undefined;