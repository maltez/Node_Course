class myClass {
    constructor() {
        this.privateMembers = new WeakMap();
    }
    setPrivaaateMember(value) {
        this.privateMembers.set(this, value)
    }
    getPrivate(){
        return this.privateMembers.get(this);
    }
}
let obj = new myClass();
obj.setPrivaaateMember('blaBla');
console.log(obj.getPrivate());