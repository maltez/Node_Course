const http = require('http');
const pid = process.pid;

let userCount;

http.createServer((req, res) => {
    for(let i = 0; i < 1e7; i++); // simulate CPU work
    res.write(`Handled by process ${pid}\n`);
    res.end(`Users ${userCount}`)
}).listen(3000, () => {
    console.log(`Started process ${pid}`);
});

process.on('message', (msg) => {
    userCount = msg.userCount;
    console.log(`Message from master: ${msg.userCount}`);
});
