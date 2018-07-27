const ServiceBase = require('./services');

module.exports = class Notifier extends ServiceBase {
    constructor(){
        super();
        this.methodName = 'logging';
        this.log = this.log.bind(this);
    }

    notify(){
        this.applyThis();
    }
}