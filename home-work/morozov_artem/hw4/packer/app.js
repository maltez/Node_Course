const Zipper = require("./zip");
const Minify = require("./minify");

const path = "fortest"
const ft = new Minify(path);
const zippa = new Zipper(path);

let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Start");
    }, 1000);

});

promise.then((data) => {
    console.log(data);
    ft.minify();


}).then(()=>{
    zippa.zip();
    return "Done";
    }
   ).then(console.log);





