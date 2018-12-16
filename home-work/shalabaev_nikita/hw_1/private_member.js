//Create private member in class using Symbol primitive.

const privateMethod = Symbol('privateMethod');

class Foo {
  constructor() {}

  [privateMethod]() {
    console.log('I\'m a private method');
  }

  publicMethod() {
    console.log('I\'m a public method');
  }
};
