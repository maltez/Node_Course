class User {
    constructor(username) {
        let _name = username;
        this.setName = function(name) { 
        	_name = name; 
      	}
      	this.getName = function() { 
        	return _name; 
      	}
    }
    greeting() {
    	let _name = this.getName();
        if (_name){
        	return `Hello ${_name} !`;
        }
    }
}

let knocking = new User('John Doe');
console.log(knocking); //User { setName: [Function], getName: [Function] }
console.log(knocking.greeting()); //Hello John Doe !
console.log(knocking._name); //undefined
console.log(knocking.setName('Fred')); //undefined
console.log(knocking.getName()); //Fred
console.log(knocking.greeting()); //Hello Fred !

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
console.log(public_user); //newUser {}
console.log(public_user._guest); //undefined
console.log(public_user.greeting()); //Hello Richard Doe !
