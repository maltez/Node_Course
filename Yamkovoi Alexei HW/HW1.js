const User = ( function() {
    const nickName = Symbol()

    class User {
        constructor(firstName, lastName, nick){
            this.firstName = firstName;
            this.lastName = lastName;
            this[nickName] = nick;
        }

        set nick(value){
            this[nickName] = value;
        }
        get nick(){
            return this[nickName];

        }
    }
    return User;
})()

const alex = new User('Alexei', 'Yamkovoi', 'eX')


console.log(alex)   //User { firstName: 'Yamkovoi', lastName: 'Alexei', [Symbol()]: 'eX' }
console.log(alex.nickName)//undefined
console.log(alex.nick)//eX
