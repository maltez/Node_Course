// singleton based on generator
let singleton = (function(){
  let instance;

  generator = function* (n) {
        for (let i = 0; i < n; i += 1) {
        rand = Math.floor(0 + Math.random() * (n + 1 - i));
        yield rand;
      }
  } 

  getInstance = function () {
    if (!instance) {
      instance = [...generator(10)];
    }
    return instance;
  }

  return getInstance;

})();

let inst = singleton(5);
let inst2 = singleton(5)
console.log(inst === inst2); //true


//USER Proxy checking values
const User = (function(name, secondName, age){
  class User {
      constructor(name, secondName){
          this.name = name;
          this.secondName = secondName;
      }
  }

  return new Proxy(new User(name, secondName, age), {
      get(target, prop) {
          if	( prop == 'fullName' ) {
            return target['name'] + ' ' + target['secondName'];
          }
          else {
            return target[prop];
          }  
      },
      set(target, prop, value) {
          switch (prop) {
            case 'age':
              if (!Number.isInteger(value) || value < 0 || value > 100) {
                target[prop] = 0;
                throw	new Error('Value of ' + prop + ' must by number! And value is beetween 0 an 100.' + ' Value :' + value + ' given.' );
              }
            break;
            default:
              if (typeof value !== 'string' || value.length < 3 || value.length > 50 ) {
                target[prop] = '';
                throw	new Error('Value of ' + prop + ' must by number!' + 'Value :' + value + ' given.' );
              }
            break;
          }
          target[prop] = value;
          return true;
      }
  })
})

var user = User('Jack', 'Vinitz');
console.log(user.fullName);
user.age = 12
console.log(user.age);
var user2 = User('Andrew', 'Mead');
console.log(user2.fullName);
user2.age = 120
console.log(user2.age);
