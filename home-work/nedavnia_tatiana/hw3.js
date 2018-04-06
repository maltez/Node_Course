//Create singletone based on generator. Generator returns random n niumbers. Numbers must be integers.

//proxy singletone
const randomSingletone = (function () {
  let instance;
  return new Proxy(function* (n) {
    for (let i = 1; i <= n; i += 1) {
      yield Math.round(Math.random() * n);
    }
  }, {
    apply(target, ctx, args) {
      if (!instance) {
        instance = target(...args);
      }
      return instance;
    }
  });
}());

const gen = randomSingletone(3);
gen.next();
gen.next();
const gen2 = randomSingletone(4);
gen2.next();
gen2.next();

//regular singletone (seems to work faster)
const randomNumberGenerator = (function () {
  let instance;

  function* generateRandom(n) {
    for (let i = 1; i <= n; i += 1) {
      yield Math.round(Math.random() * n);
    }
  }

  const create = function (n) {
    if (!instance) {
      instance = generateRandom(n);
    }
    return instance;
  };

  return {create};
}());

const {create} = randomNumberGenerator;
const random = create(3);

//Create proxy object that will be validate User class input.
//Age - is integer, in range 0 - 100.
//Name is the string. Min length 3 max length 50.
//Proxy should add full name field that would be concatination of First nad last name.

const validateName = name => name && typeof name === 'string' && name.length >= 3 && name.length <= 50;
const validateAge = age => age && Number.isInteger(age) && age > 0 && age < 100;

const User = (function () {
  class User {
    constructor(name, lastname, age) {
      this.name = name;
      this.lastname = lastname;
      this.age = age;
    }
  }

  return new Proxy(User, {
    construct(target, args) {
      const [name, lastname , age] = args;

      if (validateName(name) && validateAge(age)) {

        return new Proxy(Reflect.construct(...arguments), {
          set(target, prop, val) {
            if (prop === 'name' && validateName(val)) {
              Reflect.set(...arguments);
              return true;
            }

            if (prop === 'age' && validateAge(val)) {
              Reflect.set(...arguments);
              return true;
            }
            console.log(`Value ${val} is invalid for ${prop}`);
            return false;
          },

          get(target, prop) {
            return prop === 'fullName' ? `${target.name} ${target.lastname}` : Reflect.get(...arguments);
          }
        });

//we may have made this way if validation on instances is not required
        // const user = Reflect.construct(...arguments);
        // user.fullName = `${name} ${lastname}`;
        // return user;
        //NML: Refletion this is very bad way for instance validation
      }
      return new Error('invalid arguments value');
    }
  });
}());


let user;

try {
  user = new User('j', 'd', -2);
} catch (e) {
  console.log(e.message);
}

const user2 = new User('John', 'Doe', 30);
console.log(user2.fullName);
user2.name = 't';
