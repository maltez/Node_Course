const __privateMethod = Symbol('privateMethod');

class AbstractClass
{
    getPrivateMethod() {
        return this[__privateMethod]();
    }

    [__privateMethod]() {
        return 'Private method was called';
    }
}

let test = new AbstractClass();

console.log(test.getPrivateMethod());