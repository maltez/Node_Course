module.exports = class ServiceBase {
    constructor(methodName) {
        this.methodName = methodName;
    }

    applyThis() {
        console.log(`Applied ${this.methodName}`);
    }
}

