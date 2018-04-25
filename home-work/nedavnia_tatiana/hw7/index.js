const { appendFile, appendFileSync } = require('fs');
const { createServer } = require('net');
const { EventEmitter } = require('events');

class Room extends EventEmitter {
  constructor(connection) {
    super();
    this.opened = true;
    this.participants = [];
    this.history = [];
    this.add(connection);
  }

  add(connection) {
    connection.setEncoding('utf8');
    connection.on('data', data => this.messageHandler(data, connection));
    connection.on('end', () => this.endHandler(connection));
    connection.on('error', err => this.errorHandler(err));
    this.participants.push(connection);
    this.opened = this.participants.length < 2;
  }

  messageHandler(data, connection) {
    this.history.push(data);
    this.participants.forEach((socket) => {
      if (socket !== connection) socket.write(data);
    });
  }

  endHandler(connection) {
    const { participants, history } = this;
    appendFile('./history.txt', `\r\n${history.join('\r\n')}`, (err) => {
      if (err) {
        this.errorHandler(err);
      } else {
        participants.splice(participants.indexOf(connection), 1);
        if (!participants.length) this.emit('empty', this);
      }
    });
  }

  static errorHandler(err) {
    appendFileSync('./debug.txt', `\r\n${err}`, () => process.exit(1));
  }
}

class Chat {
  constructor() {
    this.roomList = [];
  }

  add(connection) {
    const lastRoom = this.roomList[this.roomList.length - 1];
    if (!this.roomList.length || !lastRoom.opened) {
      const newRoom = new Room(connection);
      newRoom.on('empty', room => this.roomList.splice(this.roomList.indexOf(room), 1));
      this.roomList.push(newRoom);
      return;
    }
    lastRoom.add(connection);
  }
}

const chat = new Chat();

const server = createServer()
  .on('connection', socket => chat.add(socket))
  .on('error', (err) => {
    appendFileSync('./debug.txt', `\r\n${err}`, () => process.exit(1));
  });
server.listen(3000);

process.on('uncaughtException', () => {
  process.exit(1);
});
