class AbstractClass
{
    constructor() 
    {
        this.__privateMethod = {};
        this.__privateMethods = new WeakMap([
            [this.__privateMethod, function() {
                return 'Private method was called';
            }]
        ]);
    }
    callPrivateMethod() 
    {
        return this.__privateMethods.get(this.__privateMethod)();
    }
}

let test = new AbstractClass();

console.log(test.callPrivateMethod()); // Is working

console.log(test.__privateMethods.get(this.__privateMethod)()); // Is'nt working =) TypeError: test.__privateMethods.get(...) is not a function
