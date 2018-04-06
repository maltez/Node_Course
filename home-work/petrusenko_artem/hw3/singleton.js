const Singleton = (function(){
    let instance;

    class Generator {
        constructor(){
            let rand = Math.floor(Math.random() * 100);
            this.generator = this.generate(rand);
        }

        * generate(n){ 
            for (let i = 1; i <= n; i++) {
                yield i;
            }
        }
    }

    return () => {
        if (!instance) {
            instance = new Generator();
        }

        return instance;
    };
})();

let generator1 = Singleton();
let generator2 = Singleton();
console.log(generator1.generator.next()); //{ value: 1, done: false }
console.log(generator2.generator.next()); //{ value: 2, done: false }
console.log(generator1.generator.next()); //{ value: 3, done: false }
console.log(generator2.generator.next()); //{ value: 4, done: false }
console.log(generator1.generator.next()); //{ value: undefined, done: true }
console.log(generator1.generator.next()); //{ value: undefined, done: true }
console.log(generator1.generator.next()); //{ value: undefined, done: true }
