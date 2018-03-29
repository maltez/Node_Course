class User {
    constructor(username) {
        this._name = username;
    }
    greeting() {
        if (this._name){
        	return `Hello ${this._name} !`;
        }
    }
}

let knocking = new User('John Doe');
console.log(knocking);
console.log(knocking._name);
console.log(knocking.greeting());

let _guest = new WeakMap();
class newUser {
    constructor(username) {
        _guest.set(this, username);
    }
    greeting() {
        let name = _guest.get(this);
        if (name){
        	return `Hello ${name} !`;
        }
    }
}

let public_user = new newUser('Richard Doe');
console.log(public_user);
console.log(public_user._guest);
console.log(public_user.greeting());
