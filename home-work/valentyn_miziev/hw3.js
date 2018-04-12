// Create singletone based on generator. Generator returns random n numbers. Numbers must be integers. 
const Singleton = (function(){
  let instance;

  class Generate {
    constructor(count){
      this.count = count;
      this.randomNumbers = [...this.generator(count)];
    }
    * generator(count) {
      for (let i = 1; i <= count; i += 1) {
        yield Math.round(Math.random() * 100); // range from 0 to 100
      }
    }  
  }

  return (count) => {
    if (!instance) {
      instance = new Generate(count);
    }
    return instance['randomNumbers'];
  };
})();

let result = Singleton(12);
console.log(result); // array with 12 integers
result = Singleton(3);
console.log(result); // the same array with 12 integers


// Create proxy object that will be validate User class input. Age - is integer, in range 0 - 100. 
// Name is the string. Min length 3 max length 50. Proxy should add full name field that would be concatination of First nad last name.
class User {
  constructor(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }
}

const validator = {
  construct: function(target, argumentsList) {
    const [firstName, secondName, age] = [...argumentsList];

    if (typeof firstName !== 'string' ) throw new TypeError('firstName must be a string');
    if (typeof secondName !== 'string') throw new TypeError('secondName must be a string');

    if (firstName.length < 3 || firstName.length > 50) throw RangeError('firstName length must be from 3 letters to 50');
    if (secondName.length < 3 || secondName.length > 50) throw RangeError('secondName length must be from 3 letters to 50');

    if (!Number.isInteger(age) || age < 0 || age > 100) throw new Error('Age must be an integer and in range from 0 to 100');

    const result = new target(firstName, secondName, age);
    result.fullName = `${firstName} ${secondName}`;
    return result;
  }
}

const UserProxy = new Proxy(User, validator);

const user = new UserProxy('Jackie', 'Chan', 64);
console.log(user); // User { firstName: 'Jackie', secondName: 'Chan', age: 64, fullName: 'Jackie Chan' }

const user2 = new UserProxy('Steven', 'Seagal', 124);
console.log(user2); // Error: Age must be an integer and in range from 0 to 100
