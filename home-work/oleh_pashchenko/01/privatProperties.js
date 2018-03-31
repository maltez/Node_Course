class Human {
  constructor(name) {
    const humanName = name;
    this.getName = () => humanName;
  }
}

const man = new Human('Вася');
console.log(man.name); // undefined
console.log(man.getName()); // Вася

const OneMoreHuman = (function initHuman() {
  const symbolName = Symbol('name');

  class HumanNew {
    constructor(name) {
      this[symbolName] = name;
    }

    get name() {
      return this[symbolName];
    }
  }

  return HumanNew;
}());

const woman = new OneMoreHuman('Васелиса');
console.log(woman.name); // Name by getter: Васелиса
