const server = require('net').createServer();
const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path');
const getPath = filename => join(__dirname, filename);
let counter = 0;
let sockets = {};
let messages = {};
let history = [];
const ENTER_KEY = '\r\n';
server.on('connection', socket => {
    let receiver;
    let receiverId;
    let message;
    socket.id = counter++;
    sockets[socket.id] = socket;
    messages[socket.id] = [];
    
    console.log('Client connected');
    socket.write('Welcome to Chat Roulet my friend!\r\n');

    socket.on('data', data => {
        messages[socket.id].push(data.toString());
        if (data.toString() === ENTER_KEY) {
            if (socket.id & 1) {
                receiverId = socket.id - 1;
            } else {
                receiverId = socket.id + 1;
            } 
            receiver = sockets[receiverId];
            if (receiver !== undefined) {
                receiver.write(`Client with id - ${socket.id} ==> `);
                message = messages[socket.id].join('');
                receiver.write(message);
                history.push({id: socket.id, message: message});
            }
            
            messages[socket.id] = [];
        }
    });

    socket.on('end', () => {
        console.log(history);
        historyStream = createWriteStream(getPath('history/1.txt'));
        history.map(item => {
            historyStream.write(`${item.id} - ${item.message}`);
        })
        delete sockets[socket.id];
        sockets[receiverId].destroy();
        delete sockets[receiverId];
        console.log(`Clints with id {${socket.id}, ${receiverId}} succesfully disconected`);
    })
});

server.listen(8000, () => {
    console.log('Server started');
});