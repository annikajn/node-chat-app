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
var {generateMessage} = require('./utils/message.js')
// var client  

app.use(express.static(publicpath));

io.on('connection', (socket) =>{
    console.log('New user connected');
   
    socket.emit('newMessage',generateMessage('Admin',"Welcome to the chat app."));
    socket.broadcast.emit('newMessage',generateMessage('Admin',"New user joined"))
    socket.on('createMessage',(message)=>{
        // console.log('createMessage',message);
        io.emit('newMessage',generateMessage(message.from,message.text));
    });
    
    socket.on('disconnect', ()=>{
        console.log('User disconnected');
    });

});

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
  
module.exports = {app};
  