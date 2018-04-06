class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

const UserProxy = new Proxy(User, {
  construct(Target, argumentsList) {
    const [name, surname, age] = [...argumentsList];

    if (typeof name !== 'string' || typeof surname !== 'string') throw new Error('name and surname should be string');
    if (name.length < 3 || name.length > 50
        || surname.length < 3 || surname.length > 50) throw Error('For name and surname nin length 3 max length 50.');
    if (!Number.isInteger(age)) throw new Error('age should be integer');
    if (age < 0 || age > 100) throw new Error('age shoud be in range 0 - 100');

    const instance = new Target(name, surname, age);
    instance.fullName = `${name} ${surname}`;
    return instance;
  },
});

const user = new UserProxy('Petya', 'Ivanov', 100);
console.log(user);
