const singletone = (function() {

  const getRandomNumbers = function* (n) {
    for (let index = 0; index < n; index += 1) {
      yield Math.random();
    }
  }

  return {
    getRandomNumbers
  };
})();


console.log(...singletone.getRandomNumbers(5));
console.log(...singletone.getRandomNumbers(2));



const singletoneClass = (function() {
  let instance;
  class Singletone {
    constructor() {
      this.getRandomNumbers =  function* (n) {
        for (let index = 0; index < n; index += 1) {
          yield Math.random();
        }
      }
    }
  }

  const create = function createInstance() {
    if(!instance) instance = new Singletone();

    return instance;
  }

return {
  create
}

})();

const singletoneInstance = singletoneClass.create();

console.log(...singletoneInstance.getRandomNumbers(5));
console.log(...singletoneInstance.getRandomNumbers(2));