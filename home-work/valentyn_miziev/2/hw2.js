// ----- Factorial -----
function* factorial(n) {
  let res = 1;
  for(let i = 1; i <= n; i += 1) {
    res *= i;
    yield [res, i];
  }
}

for(let [value, index] of factorial(7)) {
	console.log(`Factorial(${index}) = ${value}`);
}

// ----- Fibonacci -----
function* fibonacci(n) {
  let a = 0, b = 1;
  for(let i = 0; i < n; i += 1) {
    let c = a + b;
    a = b;
    yield [b, i]
    b = c;
  }
}

for(let [value, index] of fibonacci(7)) {
	console.log(`fibonacci[${index}] = ${value}`);
}

// ----- Private member in class using WeakMap -----
const ThisIsRock = (function() {
  let genre = new WeakMap();

  class ThisIsRock {
    constructor(name) {
      this.songName = name; // public
      genre.set(this, 'Rock'); //private
    }
    getSong() {
      console.log(`Songname - ${this.songName} / Genre - ${genre.get(this)}`);
    }
  }
  return ThisIsRock;
}());

let firstSong = new ThisIsRock('Stairway To Heaven');
let secondSong = new ThisIsRock('Smoke on the Water');
firstSong.getSong();
secondSong.getSong();
console.log(firstSong.songName); // Stairway To Heaven
console.log(firstSong.genre); // undefined


// ----- Promises -----

const firstPromise = new Promise((resolve, reject) => { 
  setTimeout(resolve, 500, 'first');
}); 
const secondPromise = new Promise((resolve, reject) => { 
  setTimeout(resolve, 600, 'second');
});

const concatinate = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(arr[i] + ' promise');
  }
  return newArr;
}

const replaceWord = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(arr[i].replace('promise', 'result'));
  }
  return newArr;
}

Promise.all([
  firstPromise,
  secondPromise
]).then((data) => {
  return concatinate(data);
}).then((data) => {
  console.log('concatinate result -', data); // [ 'first promise', 'second promise' ]
  return replaceWord(data)
}).then((data) => {
  console.log('replaceWord result -', data); // [ 'first result', 'second result' ]
}).catch(
  (error) => console.error(error)
);