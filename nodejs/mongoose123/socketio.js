var express = require('express');
var path = require('path');

var app = express();

var server = require('http').createServer(app);

var socketIo = require('socket.io')
var io = socketIo(server)
// var io = require('socket.io')(server);

//监听connection（用户连接）事件，socket为用户连接的实例
io.on('connection', function (socket) {

    console.log('客户端已经连接');
	
	//向客户端发送事件
	socket.emit('hehe','欢迎光临')

	//接受客户端消息
	socket.on('haha',(msg)=>{
		console.log(msg)
	})
	
	 socket.on('disconnect',()=>{
	     //监听用户断开事件
	        console.log("用户"+socket.id+"断开连接");
	 });
		
});



server.listen(8000,'0.0.0.0');
