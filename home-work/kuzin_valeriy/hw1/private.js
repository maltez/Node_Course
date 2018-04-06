
function storage(inputPrivate, inputOfficial) {
  const _privateData = Symbol('data');
  const _privateMethod = Symbol('method');

  class PrivateMember {

    constructor(privateData, officialData) {
      this[_privateData] = privateData;
      this.officialData = officialData;
    }

    all() {
      return {
        privateData: this[_privateMethod](),
        officialData: this.officialData
      }
    }

  // private method
    [_privateMethod]() {
      return this[_privateData]
    }
  }

  return new PrivateMember(inputPrivate, inputOfficial)
}



ourData = storage('secret', 'info');

console.log(ourData.all()); // { privateData: 'secret', officialData: 'info' }
console.log(ourData.officialData); // info
console.log(ourData._privateData); // undefined