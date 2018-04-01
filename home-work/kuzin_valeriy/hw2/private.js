
function storage(inputPrivate) {
  const _privateData = new WeakMap();

  class Private {

    constructor(privateData) {
      _privateData.set(this, privateData);
    }

    readData() {
      return _privateData.get(this);
    }
  }

  return new Private(inputPrivate)
}


ourData = storage('test data');

console.log(ourData); // Private {}
console.log(ourData.readData()); // 'test data'
console.log(ourData._privateData); // undefined

