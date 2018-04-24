const { appendFile } = require('fs');

const clients = new Map();
const rooms = [];
const history = {};

const getLast = () => {
  const entries = [...clients.keys()];
  return entries[entries.length - 1];
};

const server = require('net').createServer()
  .on('connection', (socket) => {
    socket.setEncoding('utf8');

    if (clients.size && clients.size % 2 !== 0) {
      const pair = getLast();
      const { length: room } = rooms;
      clients.set(pair, { room });
      clients.set(socket, { room });
      history[room] = [];
      rooms.push([pair, socket]);
    } else {
      clients.set(socket, null);
    }

    socket.on('data', (data) => {
      const { room } = clients.get(socket);
      history[room].push(data);
      rooms[room].forEach(connection => connection.write(data));
    });

    socket.on('end', () => {
      const { room } = clients.get(socket);
      appendFile('./history.txt', history[room].join('\r\n'), (err) => {
        if (err) {
          appendFile('./debug.txt', `\r\n${err}`, () => process.exit(1));
        }
        rooms[room].splice(rooms[room].indexOf(socket), 1);
        clients.delete(socket);
      });
    });

    socket.on('error', (err) => {
      appendFile('./debug.txt', `\r\n${err}`, () => process.exit(1));
    });
  })
  .on('error', (err) => {
    appendFile('./debug.txt', `\r\n${err}`, () => process.exit(1));
  });

server.listen(3000);

