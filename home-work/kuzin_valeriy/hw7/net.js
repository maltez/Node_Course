//process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();
const fs = require("fs");

let counter = 0;
let sockets = {};

server.on('connection', socket => {
    socket.id = counter++;

    let group = socket.id % 2 === 1 ? socket.id - 1 : socket.id;
    sockets[group] = sockets[group] ? sockets[group] : {};
    sockets[group][socket.id] = socket;

    console.log('Client connected');
    socket.write('Welcom new client!\n');

    socket.on('data', data => {

        Object.entries(sockets[group]).forEach(([, cs]) => {
            cs.write(`${socket.id}:`);
            cs.write(data);
        });
        fs.appendFile(`./chats/${group}.txt`, `${socket.id}:${data}`, (err) => {
            if(err) throw err;
        });
    });

    socket.on('end', () => {

        fs.appendFile(`./chats/${group}.txt`, `Client ${socket.id} disconnected\n`, (err) => {
            if(err) throw err;
        });
        Object.entries(sockets[group]).forEach(([key, cs]) => {
            if (key !== socket.id) {
                cs.end();
            }
        });
        delete sockets[socket.id];
        console.log('Client disconnected');

    });
});

server.listen(8000, () => console.log('Server bound'));