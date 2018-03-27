class IterableObject {
    constructor(i){
        this.i = i;
    }

    [Symbol.iterator]() {
        let i = 0;
        return {
            next:() =>{
                return i <= this.i ? { value: i++, done: false} :
                    { value : undefined, done: true}               
            }
        }
    }
}

for (let z of new IterableObject(10)){
    console.log(z);
}

function Iterator(n){
    return {
        [Symbol.iterator]() {
            let i = 0;
            return{
                next(){
                    return i <= n ? { value: i++ * 2, done: false} :
                        { value : undefined, done: true}               
                }
            }
        }
    }
}
for(let k of Iterator(4)){
    console.log(k);
}

let iterator  = Iterator(4)[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

