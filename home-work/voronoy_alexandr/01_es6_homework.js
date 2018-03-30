//============WeakMap===============\\

const Human = (function () {
    const ideas = new WeakMap();
    return class {
        setIdea(idea) {
            ideas.set(this, idea);
        }

        getIdea() {
            return ideas.get(this);
        }
    }
})();

const idea1 = new Human();
const idea2 = new Human();

idea1.ideas; //undefined

idea1.setIdea('good idea!');
idea2.setIdea('not good idea');

idea1.getIdea(); // good idea!
idea2.getIdea(); // not good idea

//=============Symbol==================\\


let AnotherHuman = (function () {
    const _name = Symbol('name');

    class AnotherHuman {
        constructor(name) {
            this[_name] = name;
        }

        name() {
            return this[_name];
        }
    }

    return AnotherHuman;
})();

let human = new AnotherHuman('John Doe');
console.log(human.name()); // John Doe
console.log(human._name);  //undefined
console.log(human[_name]); //ReferenceError: _name is not defined