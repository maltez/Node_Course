// Create private member in class using Symbol primitive.

const privateMemberSymbol = Symbol('privateMemberOne')

class TestPrivatMemberClass {
    constructor () {
        this[Symbol('privateMember')] = 'privateOne';
        this.publicMember = 'public';
        this[privateMemberSymbol] = 'privateTwo';
    }
}

const test = new TestPrivatMemberClass();

console.log(test);
console.log(test.publicMember);
console.log(test[Object.getOwnPropertySymbols(test)[0]]);
console.log(test[Object.getOwnPropertySymbols(test)[1]]);
console.log(test[privateMemberSymbol]);


