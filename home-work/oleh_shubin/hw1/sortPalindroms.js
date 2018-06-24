class Instance {
    constructor(arr) {
        this.arr = arr;
    }
    [Symbol.iterator]() {
        let i = 0;
        return {
            next:() =>{
                if(i < this.arr.length ) {
                    if (this.isPalindrome(this.arr[i])) {
                        return {value: this.arr[i++], done: false};
                    } else {
                        i++;
                        return { value : undefined, done: false};
                    }
                } else {
                    return { value : undefined, done: true}
                }
            }
        }
    }
    isPalindrome(str) {
        str = str.toString().toLowerCase().replace(/[\W]/g,'');
        let reversed = '';
        for (let v of str) {
            reversed = `${v}${reversed}`;
        }
        return reversed === str;
    }
}

const data = ['Mama', 'test', 1001, 1001001, 'Redder', 'Repaper', 'stats', 'noon', 'I did, did I?', 'Eva, can I see bees in a cave?'];
for (let v of new Instance(data)) {
    if (v){
        console.log(v);
    }

}
