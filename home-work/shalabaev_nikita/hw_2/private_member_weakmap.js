//Create private member in class using WeakMap.
const weakMap = new WeakMap();

const _private = (key) => {
  if (!weakMap.has(key)) {
    weakMap.set(key, {});
  }
  return weakMap.get(key);
}

class Foo {
  constructor({ name }) {
    _private(this).name = name;
  }

  getName() {
    console.log(`Name is: ${_private(this).name}`);
  }
}

const foo = new Foo({name: 'Nikita'});