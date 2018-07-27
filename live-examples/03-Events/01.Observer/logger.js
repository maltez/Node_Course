const ServiceBase = require('./services');

module.exports = class Logger extends ServiceBase {
    constructor(){
        super();
        this.methodName = 'notify';
        this.notify = this.notify.bind(this);
    }

    log(){
        this.applyThis();
    }
}