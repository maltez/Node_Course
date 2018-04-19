// regular singletone
// const randomNumberGenerator = (function(){
//   let instance;

//   function* generateRandom(n) {
//     for (let i = 1; i <= n; i += 1) {
//       yield Math.round(Math.random() * n);
//     }
//   }

//   const create = function(n){
//     if (!instance) {
//       instance = generateRandom(n);
//     }
//     return instance;
//   };

//   return { create };
// }());

// const { create } = randomNumberGenerator;
// const random = create(3);
// random.next();
// random.next();
// random.next();
// random.next();
// const random2 = create(5);
// random2.next()


//proxy singletone
// const randomSingletone = (function(){
//   let instance;
//   return new Proxy(function*(n) {
//       for (let i = 1; i <= n; i += 1) {
//       yield Math.round(Math.random() * n);
//     }
//     }, {
//   apply(target, ctx, args){
//         if(!instance){
//           instance = target(...args);
//         }
//         return instance;
//       }
//   });
// }());


// const gen = randomSingletone(3);
// gen.next();
// gen.next();

// const gen2 = randomSingletone(4);
// gen2.next();


class User {
  constructor (name, surname) {
    this.name = name;
    this.surname = surname;

    return new Proxy(User, {
      construct: function(target, argumentsList) {
        console.log(`Constructor Invokes With Arguments: ${argumentsList}`);
        const instance = new target(...argumentsList);
        instance.fullName = argumentsList.join(' ');

        return instance;
      }
    });
  }
}

const user = new User('Nick', 'Lototskiy');
console.log(new user("Basil", "Doe"));