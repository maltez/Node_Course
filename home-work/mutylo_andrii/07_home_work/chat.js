const server = require('net').createServer();
const { appendFile, appendFileSync } = require('fs');
let sockets = [];
let messages = {};
let history = [];

let counter = 0;
let id;
server.on('connection', socket => {
  let currentMessage;

  socket.write('Welcome to Telnet Chat. \n');
  id = counter++;

  socket.id = id;
  socket.write(`Your id: ${id}\n`);

  console.log(`New client connected with id:${id} \r\n`);

  sockets[id] = socket;

  messages[id] = [];

  socket.on('data', data => {

    currentMessage = data.toString();
    console.log('data', data.toString());

    let clients;
    if (socket.id%2) {
      //чет
      clients = sockets.filter((value, index) => index % 2 !== 0);

    }
    else {
      clients = sockets.filter((value, index) => index % 2 === 0);
    }
    clients.forEach((client) => {
      client.write(`Client id: > ${client.id}`);
      client.write(currentMessage);
    });
    history.push({id: socket.id, message: currentMessage});

  });

  socket.on('end', () => {
    console.log('collected history', history);

    appendFile('./history.txt', `\r\n${history.toString().join('\r\n')}`, (err) => {
      if (err) {
        appendFileSync('./error.log', `\r\nAppend to file error\r\n${err}`, () => process.exit(1));
      }
    });

    delete sockets[id];

    console.log(`Clints with id {${socket.id}, ${receiverId}} succesfully disconected`);
  })
});

server.on('error', error => {
  appendFileSync('./error.log', `\r\nServer error\r\n${err}`, () => process.exit(1));
});

server.listen(8000, () => {
  console.log('Server started on port:8000');
});

process.on('uncaughtException', () => {
  process.exit(1);
});