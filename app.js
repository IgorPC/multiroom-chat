let app = require('./config/server');

let server = app.listen(80, function(){
    console.log("EXPRESS SERVER WORKING");
});

let io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket){
    console.log('NEW USER CONNECTED');

    socket.on('disconnect', function(){
        console.log('USER DESCONNECTED');
    });

    socket.on('msgServer', function(data){
        socket.emit('msgClient', {nickname: data.nickname, msg: data.msg});
        socket.broadcast.emit('msgClient', {nickname: data.nickname, msg: data.msg});
        if(data.updated == 0){
            socket.emit('participantes', {nickname: data.nickname});
            socket.broadcast.emit('participantes', {nickname: data.nickname});
        }
        
    });
});