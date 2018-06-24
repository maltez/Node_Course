//  Homework 2
// Create private member in class using WeakMap. 
'use strict';

let Person = (function() {

    let privateData = new WeakMap();

    function Person(name) {
        privateData.set(this, { name: name });
    }

    Person.prototype.getName = function() {
        return privateData.get(this).name;
    };

    return Person;
}());


let Person2 = new Person('Kolia');

console.log(Person2.getName());  //  'Kolia'
