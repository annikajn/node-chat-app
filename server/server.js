require('./config/config');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const publicpath = path.join(__dirname, '../public');
const express = require('express');
const port = process.env.PORT;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
// var client  

app.use(express.static(publicpath));

io.on('connection', (socket) =>{
    console.log('New user connected');
    socket.emit('newEmail',{
        from:'annikajnicol@gmail.com',
        test:"Hey it's me",
        createAt:123
    });
    socket.emit('newMessage',{
        from:'Annika',
        text:"Hey what's up",
        createdAt: 123
    })
    socket.on('createMessage',(message)=>{
        console.log('createMessage',message);
    });
    socket.on('createEmail',(newEmail)=>{
        console.log('createEmail',newEmail);
    });
    socket.on('disconnect', ()=>{
        console.log('User disconnected');
    });

});

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
  
module.exports = {app};
  