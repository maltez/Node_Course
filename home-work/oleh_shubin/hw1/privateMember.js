class myClass {
    constructor(memberName) {
        let key = Symbol(memberName);
        this[key] = 'Private property';
        this.publicProp = 'Public';
    }
}
let str = 'nwClass',
    obj = new myClass(str);
    // console.log(obj);
    // console.log(obj.publicProp);
    // console.log(obj[Symbol(str)]);
    console.log(obj.keys);