
class User {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
        
        return new Proxy(User, {
            construct: function(target, argumentsList) {
              console.log(`Constructor Invokes With Arguments: ${argumentsList}`);
              const instance = new target(...argumentsList);
              instance.fullName = argumentsList.join(' ');
              
              return instance;
            }
        });
      }
}
  
const user = new User('Nick', 'Lototskiy');
console.log(new user("Basil", "Doe")); 