const Singleton = (function(){
    let instance;

    class Unicum {
        constructor(count,min = 0, max = 10){
          this.count = count;
          this.numbers = [...this.gen(this.count, min, max)];
        }

        * gen(count, min, max){
          for (let i = 0; i < count; i += 1) {
              let rand = min + Math.random() * (max - min)
              rand = Math.round(rand);
              yield rand;
          }
        }
    }

    return(count, numbers) => {
      if (!instance) {
        instance = new Unicum(count);
      }
      return instance;
    };
})();

let unicum = Singleton(10);
console.log(unicum);

class User {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    return new Proxy(this, {
        get(target, prop, value) {
            if(typeof prop != 'symbol'){
              console.log(`Read ${prop} ${value}`);
            }
            return target[prop] + ' Modified by proxy';
        },
        set(target, prop, value) {
            console.log(`Wright ${prop} ${value}`);
            switch(prop) { 
              case 'firstName': { 
                if (typeof value !== 'string') {
                  console.log('firstName not string');
                  return false;
                }
                if (value.length < 3 || value.length > 50) {
                  console.log('firstName wrong lenth');
                  return false;
                }

                break; 
              } 
              case 'lastName': { 
                if (typeof value !== 'string') {
                  console.log('lastName not string');
                  return false;
                }
                if (value.length < 3 || value.length > 50) {
                  console.log('lastName wrong lenth');
                  return false;
                }

                break; 
              } 
              case 'age': { 
                if(!Number.isInteger(value) || value < 0 || value > 100){
                  console.log('Wrong age!');
                  return false;
                }

                break; 
              } 
            }

            target[prop] = value;

            target.fullname = target.firstName + ' ' + target.lastName;

            return true;
        }
    });
  }
}

var user = new User('Nick', 'Lototskiy', 33);
user.age = 42;
user.firstName = 'Mr.';

console.log(user);
