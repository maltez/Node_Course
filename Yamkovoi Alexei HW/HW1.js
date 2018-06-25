const _nickName = Symbol('nickName')

class Countdown {
    constructor(firstName, lastName, nickName){
        this.firstName = firstName
        this.lastName = lastName
        this[_nickName] = nickName
    }

}

let user = new Countdown('Alexei', 'Yamkovoi', 'eX')

console.log(Object.keys(c))                                  //[ 'firstName', 'lastName' ]
console.log(Object.getOwnPropertySymbols(c))                //[ Symbol(nickName) ]
console.log(c.firstName, c.lastName, c[_nickName])          //Alexei Yamkovoi eX  