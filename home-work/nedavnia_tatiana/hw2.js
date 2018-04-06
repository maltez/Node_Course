//Create private member in class using WeakMap.
const User = (function() {
  const registrationDate = new WeakMap();

  class User {
    constructor(username) {
      this.username = username;
      registrationDate.set(this, new Date());
    }

    getRegistrationInfo(){
      return ` ${this.username} had been registered on: ${registrationDate.get(this)
        .toLocaleString('en', {year: 'numeric', month: '2-digit', day: '2-digit'})}`;
    }
  }

  return User;
}());

const user = new User('John Dou');
user.getRegistrationInfo();

//Create generator. Generator has to rerurns sequence of fibonachi numbers from first to n.

function* generateFibSequence(n) {
  let a, b;
  for (let i = 1; i <= n; i += 1) {
    const c = i <= 2 ? 1 : a + b;
    a = b || 1;
    b = c || 1;
    yield c;
  }
}

const fibSequence = generateFibSequence(8);

// Create generator generaor has to returns factorial sequence from 0 to n;

function* generateFactorialSequence(n) {
  let result = 1;
  for(let i = 1; i <= n; i += 1) {
    result *= i;
    yield result;
  }
}

const factorialSequence = generateFactorialSequence(5);

// Create promise chain. First should run in parallel two functions.
// Their results should agregate (concatinate in one string) and you have to run to functions with
// these agregate results one by one. As result You have to returns separate results of last two functions.
const getPromisePlaceholder = (text, delay) => new Promise( (res, rej) => setTimeout(() => res(text), delay));

const capitalize = (str) => {
  let result = '';
  for(let i = 0; i < str.length; i += 1) {
    result += i === 0 || str[i - 1] === ' ' ? str[i].toUpperCase() : str[i];
  }
  return result;
};

const getLength = str => str.length;

Promise.all([ getPromisePlaceholder('hello', 1000), getPromisePlaceholder('kitty', 2000) ])
  .then(([ str1, str2 ]) => `${str1} ${str2}`)
  .then(capitalize)
  .then(getLength)
  .catch(err => console.error(err.message));

//or this way in case functions to be fulfilled are synchronous (as in my case)
Promise.all([ getPromisePlaceholder('hello', 1000), getPromisePlaceholder('kitty', 2000) ])
  .then(([ str1, str2 ]) => `${str1} ${str2}`)
  .then(val => Promise.all([capitalize(val), getLength(val)]))
  .then(([ value, length ]) => ({ value, length }))
  .catch(err => console.error(err.message));

// Cool!