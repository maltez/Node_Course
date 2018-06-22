const fv = function() {
    this.z = 12;
    this.k = 14;
    return fn = () => {
        return this.k + this.z;
    }
}

console.log(fv()());

const a = {
    z: 12,
    k: 14,
    fn: () => {
        return this.k + this.z;
    }
}

console.log(a.fn());

const fg = x => x*2;