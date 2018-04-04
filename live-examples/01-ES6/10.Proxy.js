const User = (function(name, secondName){
    class User {
        constructor(name, secondName){
            this.name = name;
            this.secondName = secondName;
        }
    }

    return new Proxy(new User(name, secondName), {
        get(target, prop) {
            console.log(`Read ${prop}`);
            return target[prop] + ' Modified by proxy';
        },
        set(target, prop, value) {
            console.log(`Wright ${prop} ${value}`);
            if (typeof value !== 'string') {
                console.log('Dieeee');
                return false;
            }
            target[prop] = value;
            return true;
        }
    })
})

var user = User('Nick', 'Lototskiy');
user.name = 12;
console.log(user.name);
user.secondName = 'Basil';
console.log(user.secondName);