const Jedi = (function createJedi() {
  const deathStar = new WeakMap();
  const privatProperties = function privatPropertiesByWeakMap(obj) {
    if (!deathStar.has(obj)) {
      deathStar.set(obj, {});
    }

    return deathStar.get(obj);
  };

  class JediInternal {
    constructor(name, side) {
      privatProperties(this).name = name;
      privatProperties(this).side = side;
    }

    get name() {
      return `Master ${privatProperties(this).name}`;
    }

    get side() {
      return `I'm on the ${privatProperties(this).side} side`;
    }

    set changeSide(side) {
      // Master Yoda can't change the side
      if (privatProperties(this).name.toLowerCase() !== 'yoda'.toLowerCase()) {
        privatProperties(this).side = side;
      }
    }
  }

  return JediInternal;
}());

const vasya = new Jedi('Вася', 'Dark');
console.log(vasya.name, vasya.side); // Master Вася I'm on the Dark side
vasya.changeSide = 'Light';
console.log(vasya.name, vasya.side); // Master Вася I'm on the Light side

const yoda = new Jedi('Yoda', 'Light');
console.log(yoda.name, yoda.side); // Master Yoda I'm on the Light side
yoda.changeSide = 'Darth';
console.log(yoda.name, yoda.side); // Master Yoda I'm on the Light side
