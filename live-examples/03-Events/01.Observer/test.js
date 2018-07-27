module.exports = class Test {
    constructor(name) {
        this.name = name;
        this.isComplete = false;
        this.isPending = false;
    }

    execute() {
        this.isPending = true;
    }

    finalize() {
        this.isPending = false;
        this.isComplete = true;
    }
}