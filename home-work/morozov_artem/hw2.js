const { EventEmitter } = require("events");

class Test extends EventEmitter {
    constructor(name){
        super();
        this.name = name;
        this.finalStateOfTheTest="failed";
        this.testState = "not runned";

        this.once("run",  ()=> {
            console.log(`Test ${this.name} running`);
            var y  = Math.floor(Math.random() * 11);
            if(y > 5) {this.testState = "runned";}
            else {
                console.log(`Test ${this.name} failed to run`);
                this.emit("rerun");
            }
        });
        this.on("rerun",  ()=> console.log(`Test ${this.name} rerunning`));
        this.on("end" , () => {
            var x  = Math.floor(Math.random() * 11);
            if(x > 5) this.finalStateOfTheTest = "passed";
            console.log(`Test ${this.name} ${this.finalStateOfTheTest}`);
        });
    }

    test(){
        this.emit("run");
        this.emit("end");
    }
}

var test = new Test("My test");
test.test();

