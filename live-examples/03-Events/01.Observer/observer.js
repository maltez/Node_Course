const Test = require('./test');
const Logger = require('./logger');
const Notifier = require('./notifier');

class ObservableTest extends Test {
    constructor(name){
        super(name);
        this.collection = [];
        this.notify = this.notify.bind(this);
    }

    on(event) {
        this.collection.push(event);
    }

    notify() {
        console.log(this.collection)
        this.collection.forEach(item => item());
    }

    execute() {
        this.notify();
        super.execute();
    }
}

const observer = new ObservableTest('super test');

observer.on((new Logger()).notify);
observer.on((new Notifier()).log);

observer.execute();



