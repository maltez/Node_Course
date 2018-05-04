
const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
    for(let i = 0; i < 1000000; i++){
        console.log(i);
    }; // simulate CPU work
    res.end(`Handled by process ${pid}`);
}).listen(3000, () => {
    console.log(`Started process ${pid}`);
});
