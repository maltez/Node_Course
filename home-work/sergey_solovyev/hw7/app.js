const fs = require('fs');
const socketio = require('socket.io');
const path = require('path');
const express = require('express');
const pug = require('pug');
const app = express();
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var urlParser = bodyParser.urlencoded({ extended: false });

var rooms = {} // map socket.id to room 
var roomname = {} // map of room id to name
var data = {} // map socket id to data

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
global.io = io;

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'pug');

app.use(cookieSession({
    name: 'session',
    keys: ['@n00j'],
      maxAge: 1 * 60 * 60 * 1000 // 1 hour
  }));
  
  io.on('connection', function(socket) {
      console.log('a user connected');
    
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
    
    socket.on('room', function(room) {
        console.log('user connected to room '+room);
        rooms[socket.id] = room;
        socket.join(room);
        socket.emit('newcollab-name', roomname[room]);
        if (!(room in data)) {
            console.log('initialized list for ' + socket.id);
            data[room] = new Array();
        } else {
            for (var i = 0; i < data[room].length; ++i) {
                console.log('broadcasting ' + data[room][i] + ' to ' + room);
                socket.emit('newcollab', data[room][i]);
            }
        }
        
    });
    
    socket.on('add', function(item) {
        console.log(`socket.on.add ${item}`);
        room = rooms[socket.id];
        if (!(room in data)) {
            data[room] = new Array();
        } else {
            data[room].push(item)
        }
        console.log('data: ' + data + ' item is ' + item);
        socket.broadcast.to(room).emit('added', item);
    });
    
});

app.get("/", (req, res) => {
    res.render("home");
});

server.listen(app.get('port'), () => {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});