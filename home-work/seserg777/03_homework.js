const Singleton = (function(){
    let instance;

    class Unicum {
        constructor(count,min = 0, max = 10){
          this.count = count;
          this.numbers = [...this.gen(this.count, min, max)];
        }

        * gen(count, min, max){
          for (let i = 0; i < count; i += 1) {
              let rand = min + Math.random() * (max - min)
              rand = Math.round(rand);
              yield rand;
          }
        }
    }

    return(count, numbers) => {
      if (!instance) {
        instance = new Unicum(count);
      }
      return instance;
    };
})();

let unicum = Singleton(10);
console.log(unicum);
