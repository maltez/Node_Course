class Auto {
    constructor(wheels) {
        this.wheels = wheels;
        this.go = this.go.bind(this);
        /*this.go = () => {
            console.log(`These ${this.wheels} weels go`);
        }*/
    }

    go(){
        console.log(`These ${this.wheels} weels go`);
    }
}

const fordCar = new Auto(4);
const toyota  = new Auto(100500);
myGo = fordCar.go;
myGo.apply(toyota);

this.x = 18;
const a = () => {
    console.log(this.x)
} 

setTimeout(a.bind({x: 100500}), 300);


