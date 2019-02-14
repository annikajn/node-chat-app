var socket = io();
//sending to the server
    socket.on('connect',function ()  {
        console.log('Connected to server.');

    
        socket.emit('createMessage', {
            from:'Annika',
            text:"Hey what's up",
            createdAt: 123
        });
    });
    socket.on('disconnect', function (){
        console.log('Disconnected from server');
});
//listening on the server
socket.on('newMessage', function(message){
    console.log('New message', message);
})