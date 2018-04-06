let TestClass = (function () {// Use const insead

    const __privateMethod = Symbol('privateMethod');

    class AbstractClass
    {
        callPrivateMethod() {
            return this[__privateMethod]();
        }

        [__privateMethod]() {
            return 'Private method was called';
        }
    }

    return new AbstractClass();
});

let test = new TestClass();

console.log(test.callPrivateMethod()); // Is working =)

console.log(test[__privateMethod]()); // Is not working ReferenceError: __privateMethod is not defined