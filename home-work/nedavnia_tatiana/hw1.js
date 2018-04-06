//Create private member in class using Symbol primitive.
const User = (function() {
  const registrationDateKey = Symbol();

  class User {
    constructor(username) {
      this.username = username;
      this[registrationDateKey] = new Date();
    }

    getRegistrationInfo() {
      return ` ${this.username} had been registered on: ${this[registrationDateKey]
        .toLocaleString('en', {year: 'numeric', month: '2-digit', day: '2-digit'})}`;
    }
  }
  return User;
}());

const user = new User('Clint Eastwood');
user.getRegistrationInfo();

// I have some privacy conserns over Object.getOwnPropertySymbols
// You right - this reason why I reccomend use weak map instead symbols
// console.log(Object.getOwnPropertySymbols(user)); - shows your property