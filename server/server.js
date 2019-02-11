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

    socket.on('disconnect', ()=>{
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
  
module.exports = {app};
  