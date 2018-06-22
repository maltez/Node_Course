class Iterator {
    constructor(arr) {
        this.arr = arr;
    }

    [Symbol.iterator]() {
        let i = 0;
        return {
             next: (function() {
                if(i < this.arr.length) {
                    while(this.arr[i] % 2 !== 0){
                        i += 1;
                    }
                    const res = {value: this.arr[i], done: false };
                    i += 1;
                    return res;
                } else {
                    return {value: undefined, done: true};
                }
            }).bind(this)
        }
    }
}

const iter = new Iterator([1,2,3,4,5,6,7,8,89,90])[Symbol.iterator]();
//for(let k of iter) {
//    console.log(k);
//}
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


