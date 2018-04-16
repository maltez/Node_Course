class Test {
    constructor(name) {
        this.name = name;
        this.status = 'Not run';
        this.longevity = 0;
    }

    run(status) {
        this.status = status;
        this.longevity = Math.floor(Math.random() * 100);
    }
}

class ObservableTest extends Test {
    constructor(name) {
        super(name);
        this.__observers = [];
    }

    addListener(fn) {
        if(typeof fn == 'function') {
            this.__observers.push(fn);
        }
    }

    removeListener(fn) {
        this.__observers = this.__observers.filter(itemFn => itemFn !== fn);
    }

    __notifier(){
        this.__observers.forEach(fn => fn.apply(this));
    }

    run(status) {
        super.run(status);
        this.__notifier();
    }
}

const logger = function(status, longevity) {
    console.log(`Logged test run with ${this.name} - Status ${this.status} - Longevity ${this.longevity}`);
};

const notifier = function(status, longevity) {
    console.log(`Notify test run with ${this.name} - Status ${this.status} - Longevity ${this.longevity}`);
};

const audit = function(status, longevity) {
    console.log(`Audit test run with ${this.name} - Status ${this.status} - Longevity ${this.longevity}`);
};

const test = new ObservableTest('My test');
test.addListener(logger);
test.addListener(notifier);
test.addListener(audit);
test.run('Success');
test.removeListener(audit);
test.run('Fail');

setTimeout(()=> {
    test.addListener(logger);
    test.removeListener(notifier);
}, 500);

setTimeout(() => {
    test.run('Async run');
}, 1000);