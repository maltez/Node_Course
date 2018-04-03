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