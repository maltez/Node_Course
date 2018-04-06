const User = ((firstName, secondName, age) => {
    class User {
        constructor(firstName, secondName, age) {
            this.firstName = firstName;
            this.secondName = secondName;
            this.age = age;
        }
    }

    return new Proxy(new User(firstName, secondName, age), {
        get(target, prop) {
            if (prop === 'fullName') {
                return target.firstName + ' ' + target.secondName;
            }
            
            return Reflect.get(target, prop);
        },
        set(target, prop, value) {
            if (prop == 'firstName') {
                if (typeof value !== 'string') {
                    throw new TypeError('Name should be a string . Your value has type of "' + typeof value + '".');
                }
                if (value.length > 50 || value.length < 3) {
                    throw new RangeError('Min length is 3 max length is 50. Youy value length is : "' + value.length + '".');
                }
            }

            if (prop == 'age') {
                if (typeof value !== 'number') {
                    throw new TypeError('Age should be an integer value. Your value has type of "' + typeof value + '".');
                }
                if (value > 100 || value < 0) {
                    throw new RangeError('Age should be in range from 0 to 100. Your value is : "' + value + '".');
                }
            }

            return Reflect.set(target, prop, value);
        },
    })
})

var user = User('Artem', 'Petrusenko', 27);
user.firstName = 33; // TypeError: Name should be a string . Your value has type of "number".
user.firstName = 'Ar'; // RangeError: Min length is 3 max length is 50. Youy value length is : "2".
user.firstName = '23kasdkll;askdkjklasjdlasksjdklsfdjaslkdjalksjalksdjalksjdaslkdjaslkdj'; // RangeError: Min length is 3 max length is 50. Youy value length is : "70".
user.age = 'Test'; //Age should be an integer value. Your value has type of "string".
user.age = 108; // RangeError: Age should be in range from 0 to 100. Your value is : "108".
console.log(user);