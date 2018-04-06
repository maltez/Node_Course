let Monitor = (function () {// Use const
  let resolution = Symbol();

  class Monitor {
    constructor(name) {
      this.name = name;
      this[resolution] = '1920x1080';
    }
    print() {
      console.log(`Monitor '${this.name}' has resolution: ${this[resolution]}`);
    }
  }

  return Monitor;
})();

let samsung = new Monitor('Samsung');// Use const
let dell = new Monitor('Dell');// Use const
samsung.print();
dell.print();

console.log(dell.name); // Dell
console.log(dell.resolution); // undefined
